import React from 'react'
import * as Components from './components'
import './home.scss'
import { useSelector } from 'react-redux';

function HomePage({ t }) {
    const loginStates = useSelector(state => state.login);
    return (
        <React.Fragment>

            <Components.Subcontent
                header={t('header_title')}
                subheader={t('subheader')}
                resbtn={!loginStates.auth.token ? t('register_now') : t('trade_now')}
            />
            <Components.Slide />
            <Components.MainContent t={t} />
            <Components.Trade t={t} />
            <Components.Footer />

        </React.Fragment>
    )
}
export { HomePage }