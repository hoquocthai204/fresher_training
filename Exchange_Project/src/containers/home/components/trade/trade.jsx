import './trade.scss'
import { useSelector } from 'react-redux'

function Trade({ t }) {
    const loginStates = useSelector(state => state.login)
    return (
        <div className='trade_select'>
            <h1 className='trade_title'>{t('start trade now')}</h1>
            <div className='btn_selector'>
                {!loginStates.auth.token && <button>{t('register_now')}</button>}
                <button>{t('trade_now')}</button>
            </div>
        </div>
    )
}
export { Trade }