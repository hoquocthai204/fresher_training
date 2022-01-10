import { useEffect, useState, useRef } from 'react';
import * as Components from './components'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../redux/slices/homeslice';
import io from 'socket.io-client';
import './home.scss'

function Home() {
    const dispatch = useDispatch()
    const states = useSelector(state => state.home);
    const [showOptionBox, setShowOptionBox] = useState(false)
    const [showDownloadBox, setShowDownloadBox] = useState(false)
    const { t, i18n } = useTranslation();
    const lang_ref = useRef()
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

    useEffect(()=>{
        if(showOptionBox===false){
            dispatch(Actions.setOtherOption('language'))
        }
    },[showOptionBox])

    useEffect(() => {
        const socket = io("ws://localhost:8080/stream", {
            cors: {
                origin: "*",
            }
        });

        let message = {
            "method": "SUBSCRIBE",
            "topic": "MARKET_PRICE"
        }
        socket.on("connect", () => {
            socket.emit("message", JSON.parse(message));
        });

        socket.on("message", data => {
            console.log(data);
        });
    }, [])

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
                console.log(arrCoin)
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

            <div className='subcontent'>
                <div className='subcontent_container'>
                    <p className='subcontent_title'>{t('header_title')}</p>
                    <p className='subcontent_subtitle'>{t('subheader')}</p>
                    <button className='register_btn'>{t('register_now')}</button>
                </div>
                <div className='coinDetail'>
                    {
                        states.coinList.map((element) => {
                            if (element.id < 6) {
                                let currency = JSON.parse(localStorage.getItem('currency'))
                                return (
                                    <div className='coinContainer' key={element.id}>
                                        <p className='coinPair'>{`${element.code}/${states.currency.code}`}<span className='increase'>6.64%</span> </p>
                                        <p className='rate'>2.076</p>
                                        <span>$2.07</span>
                                    </div>
                                )
                            }
                        })
                    }

                </div>
            </div>

            <div className='slide_image'>
                <div className='imgContainer'></div>
                <div className='imgContainer'></div>
                <div className='imgContainer'></div>
                <div className='imgContainer'></div>
            </div>

            <div className='mainContent'>
                <h1>{t('market_trend')}</h1>
                <div className='info_container'>
                    <div className='header_list'>
                        <span className='name'>{t('name')}</span>
                        <span className='lprice'>{t('last price')}</span>
                        <span className='change24h'>{t('change 24h')}</span>
                        <span className='markets'>{t('markets')}</span>
                    </div>

                    {
                        states.coinList.map((e) => {
                            return (
                                <div className='item' key={e.id}>
                                    <div className='item_name'>
                                        <img width={25} height={25} src={e.image} alt="" />
                                        <div className='name'><span>{`${e.code}`}</span><span>{`${e.name}`}</span></div>
                                    </div>
                                    <span className='lprice'>$514.10</span>
                                    <span className='change24h'>-4.14%</span>
                                    <img src='https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1027.svg' />
                                </div>
                            )
                        })
                    }

                    <div className='view'>{t('view more')} <i class="fas fa-chevron-right"></i></div>
                </div>
            </div>

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