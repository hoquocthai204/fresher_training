import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../redux/slices/authslice'
import * as loginActions from '../../redux/slices/loginslice'
import './userInfo.scss'

function UserInfo() {
    const dispatch = useDispatch()
    const loginStates = useSelector(state => state.login);
    const authStates = useSelector(state => state.auth)

    function handleLogout() {
        dispatch(loginActions.setAuth(''))
        dispatch(authActions.setShowUserInfo())
    }

    return (
        <div className="user_container">
            <button className='userTab' onClick={() => dispatch(authActions.setShowUserInfo(!authStates.showUserInfo))}><i class="far fa-user-circle"></i></button>

            {authStates.showUserInfo &&
                (<div className="user_box">
                    <div className="emailinfo">
                        {loginStates.email}
                    </div>
                    <div className="verified"><i class="fas fa-check-circle"></i> Verified</div>
                    <div className="vip"><i class="fas fa-gem"></i> VIP 0</div>
                    <button className="logout" onClick={handleLogout}>
                        <i class="fas fa-sign-out-alt"></i>
                        Log Out
                    </button>
                </div>)}
        </div>
    )
}
export { UserInfo }