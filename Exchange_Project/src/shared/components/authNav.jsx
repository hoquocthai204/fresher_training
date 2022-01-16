import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../redux/slices/homeslice';
import * as authActions from '../../redux/slices/authslice'
import * as loginActions from '../../redux/slices/loginslice'
import * as HomeComponents from '../../containers/Home/components'
import { Notification } from './notification';
import './authNav.scss'

function AuthNav({ t }) {
    const dispatch = useDispatch()
    const states = useSelector(state => state.home);
    const loginStates = useSelector(state => state.login);
    const authState = useSelector(state => state.auth)

    function handleLogout(){
        dispatch(loginActions.setAuth(''))
        dispatch(authActions.setShowUserInfo())
    }

    return (
        <div className='rightSide'>
            <button className='walletTab'>{t('wallet')} <i class="fas fa-caret-down"></i></button>
            <button className='orderTab'>{t('order')} <i class="fas fa-caret-down"></i></button>

            <div className="user_container">
                <button className='userTab' onClick={() => dispatch(authActions.setShowUserInfo())}><i class="far fa-user-circle"></i></button>

                {authState.showUserInfo && <div className="user_box">
                    <div className="emailinfo">
                        {loginStates.email}
                    </div>
                    <div className="verified"><i class="fas fa-check-circle"></i> Verified</div>
                    <div className="vip"><i class="fas fa-gem"></i> VIP 0</div>
                    <button className="logout" onClick={handleLogout}>
                        <i class="fas fa-sign-out-alt"></i>
                        Log Out
                    </button>
                </div>}
            </div>

            <Notification/>

            <div className='download_container'>
                <button className='download_btn' onClick={() => dispatch(Actions.setShowDownloadBox())}>{t('download')}</button>
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