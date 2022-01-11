import { useEffect, useState, useRef, useCallback } from 'react';
import * as Components from './components'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../redux/slices/homeslice';
import io from "socket.io-client";
import useWebSocket from 'react-use-websocket';
import './home.scss'

function Home() {
    const dispatch = useDispatch()
    const states = useSelector(state => state.home);
    const [showOptionBox, setShowOptionBox] = useState(false)
    const [showDownloadBox, setShowDownloadBox] = useState(false)
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
            setSocketUrl(null)
            dispatch(Actions.setSocketData(socketdata))
        }
    })

    useEffect(() => {
        if (showOptionBox === false) {
            dispatch(Actions.setOtherOption('language'))
        }
    }, [showOptionBox])

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
            <div className='header'>
                <div className='leftSide'>
                    <p className='header_title'>Exchange</p>
                    <p className='trade'>{t('trade')}</p>
                </div>
                <div className='rightSide'>
                    <button className='login'>{t('login')}</button>
                    <button className='register'>{t('register')}</button>
                    <div className='download_container'>
                        <button className='download_btn' onClick={() => setShowDownloadBox(!showDownloadBox)}>{t('download')}</button>
                        {
                            showDownloadBox && (<Components.Download title={t('download_title')} btn={t('download_btn')} />)
                        }
                    </div>
                    <div className='option_container'>
                        <button className='other_option' onClick={() => setShowOptionBox(!showOptionBox)}>
                            {optionText}
                        </button>
                        {
                            showOptionBox &&
                            (<div className='option_boxs'>
                                <div className='header_option'>
                                    <p className='language active' onClick={() => dispatch(Actions.setOtherOption('language'))}>{t('language_header')}</p>
                                    <p className='currency' onClick={() => dispatch(Actions.setOtherOption('currency'))}>{t('currency_header')}</p>
                                </div>

                                {
                                    states.otherOption === 'language' ? <Components.Language title={t('language_header_choose')} /> : <Components.Currency title={t('currency_header_choose')} />
                                }
                            </div>)
                        }
                    </div>
                </div>
            </div>

            <Components.Introduce text={t('Introducing_Highstreet')} more={t('Introducing_Highstreet_more')} />

            <Components.Subcontent header={t('header_title')} subheader={t('subheader')} resbtn={t('register_now')} />

            <div className='slide_image'>
                <div className='imgContainer'></div>
                <div className='imgContainer'></div>
                <div className='imgContainer'></div>
                <div className='imgContainer'></div>
            </div>

            <Components.MainContent t={t}/>

            <div className='trade_select'>
                <h1 className='trade_title'>{t('start trade now')}</h1>
                <div className='btn_selector'>
                    <button>{t('register_now')}</button>
                    <button>{t('trade_now')}</button>
                </div>
            </div>

            <Components.Footer />
        </div>
    )
}
export { Home }