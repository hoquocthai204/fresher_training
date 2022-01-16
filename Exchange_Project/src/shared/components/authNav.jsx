import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../redux/slices/homeslice';
import * as HomeComponents from '../../containers/Home/components'
import { Notification } from './notification';
import { UserInfo } from './userInfo'
import './authNav.scss'
import { useEffect } from 'react';

function AuthNav({ t }) {
    const dispatch = useDispatch()
    const states = useSelector(state => state.home);

    return (
        <div className='rightSide'>
            <button className='walletTab'>{t('wallet')} <i class="fas fa-caret-down"></i></button>
            <button className='orderTab'>{t('order')} <i class="fas fa-caret-down"></i></button>

            <UserInfo />

            <Notification />

            <div className='download_container'>
                <button className='download_btn' onClick={() => dispatch(Actions.setShowDownloadBox(!states.showDownloadBox))}>{t('download')}</button>
                {
                    states.showDownloadBox && (<HomeComponents.Download title={t('download_title')} btn={t('download_btn')} />)
                }
            </div>
            <div className='option_container'>
                <button className='other_option'>
                    {states.language.name}
                </button>
            </div>
        </div>
    )
}
export { AuthNav }