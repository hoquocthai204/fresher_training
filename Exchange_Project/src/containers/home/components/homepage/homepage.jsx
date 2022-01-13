import * as Components from '.'
import './homepage.scss'

function HomePage({ t }) {
    return (
        <>
            <Components.Subcontent header={t('header_title')} subheader={t('subheader')} resbtn={t('register_now')} />

            <div className='slide_image'>
                <div className='imgContainer'></div>
                <div className='imgContainer'></div>
                <div className='imgContainer'></div>
                <div className='imgContainer'></div>
            </div>

            <Components.MainContent t={t} />

            <div className='trade_select'>
                <h1 className='trade_title'>{t('start trade now')}</h1>
                <div className='btn_selector'>
                    <button>{t('register_now')}</button>
                    <button>{t('trade_now')}</button>
                </div>
            </div>

            <Components.Footer />
        </>
    )
}
export { HomePage }