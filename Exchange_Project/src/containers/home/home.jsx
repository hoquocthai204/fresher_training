import { useEffect, useState, useRef, useCallback } from 'react';
import * as HomeComponents from './components/homepage'
import * as LoginComponents from './components/loginpage'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../redux/slices/homeslice';
import useWebSocket from 'react-use-websocket';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
} from "react-router-dom";

import './home.scss'

function Home() {
    const dispatch = useDispatch()
    const states = useSelector(state => state.home);
    const loginStates = useSelector(state => state.login);
    const { t, i18n } = useTranslation();
    const [optionText, setOptionText] = useState(() => {
        dispatch(Actions.setLanguage({
            "code": "en",
            "name": "English"
        }))
        dispatch(Actions.setCurrency({
            "code": "USD",
            "symbol": "$"
        }))
        return (`${states.language.name} | ${states.currency.code}`)
    })


    const [socketUrl, setSocketUrl] = useState('ws://localhost:8080/stream');
    useEffect(() => {
        setSocketUrl('ws://localhost:8080/stream')
        sendJsonMessage({
            method: "SUBSCRIBE",
            topic: "MARKET_PRICE"
        })
    }, [])
    const { sendJsonMessage, lastJsonMessage } = useWebSocket(socketUrl);
    useEffect(() => {
        if (lastJsonMessage) {
            let socketdata = lastJsonMessage.data
            console.log(socketdata)
            dispatch(Actions.setSocketData(socketdata))
            setSocketUrl(null)
        }
    })


    useEffect(() => {
        if (states.showOptionBox === false) {
            dispatch(Actions.setOtherOption('language'))
        }
    }, [states.showOptionBox])

    useEffect(() => {
        fetch('http://localhost:8080/api/common/coins')
            .then(res => res.json())
            .then(json => {
                let arrCoin = json.map(ele => {
                    return {
                        id: ele.id,
                        code: ele.code,
                        name: ele.name,
                        image: ele.image
                    }
                })
                dispatch(Actions.setCoinList(arrCoin))
            })
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        setOptionText(`${states.language.name} | ${states.currency.code}`)
    }, [states.language, states.currency])

    useEffect(() => {
        let element = document.querySelector(`.${states.otherOption}`)
        if (element) {
            element.classList.add('active')
        }

        return () => {
            let element = document.querySelector(`.${states.otherOption}`)
            if (element) {
                element.classList.remove('active')
            }
        }
    }, [states.otherOption])

    useEffect(() => {
        i18n.changeLanguage(states.language.code)
    }, [states.language])

    return (
        <div id='home'>

            <Router>
                <div className='header'>
                    <div className='leftSide'>
                        <Link to='/'><p className='header_title'>Exchange</p></Link>

                        <p className='trade'>{t('trade')}</p>
                    </div>
                    <div className='rightSide'>
                        <button className='login'>
                            <Link to='/login'>{t('login')}</Link>
                        </button>
                        <button className='register'>{t('register')}</button>
                        <div className='download_container'>
                            <button className='download_btn' onClick={() => dispatch(Actions.setShowDownloadBox())}>{t('download')}</button>
                            {
                                states.showDownloadBox && (<HomeComponents.Download title={t('download_title')} btn={t('download_btn')} />)
                            }
                        </div>
                        <div className='option_container'>
                            <button className='other_option' onClick={() => dispatch(Actions.setShowOptionBox())}>
                                {optionText}
                            </button>
                            {
                                states.showOptionBox &&
                                (<div className='option_boxs'>
                                    <div className='header_option'>
                                        <p className='language active' onClick={() => dispatch(Actions.setOtherOption('language'))}>{t('language_header')}</p>
                                        <p className='currency' onClick={() => dispatch(Actions.setOtherOption('currency'))}>{t('currency_header')}</p>
                                    </div>

                                    {
                                        states.otherOption === 'language' ? <HomeComponents.Language title={t('language_header_choose')} /> : <HomeComponents.Currency title={t('currency_header_choose')} />
                                    }
                                </div>)
                            }
                        </div>
                    </div>
                </div>

                <HomeComponents.Introduce text={t('Introducing_Highstreet')} more={t('Introducing_Highstreet_more')} />

                <Routes>
                    {
                        loginStates.isLogin ? <Route path="/login" element={<Navigate replace to="/" />} /> : <Route path='/login' element={<LoginComponents.LoginPage />} />
                    }
                    <Route path='/login' element={<LoginComponents.LoginPage />} />

                    <Route path='/' element={<HomeComponents.HomePage t={t} />} />
                </Routes>

            </Router>
        </div>
    )
}
export { Home }