import { useDispatch, useSelector } from 'react-redux';
import { NavSide } from './navigate'
import { LoginNav } from './loginNav';
import * as loginActions from '../../redux/slices/loginslice'
import { AuthNav } from './authNav';
import './header.scss'
import {
    Link
} from "react-router-dom";
import { useEffect } from 'react';

function Header({ t }) {
    const dispatch = useDispatch()
    const loginstate = useSelector(state => state.login)
    useEffect(()=>{
        console.log(loginstate.inLogin)
    },[loginstate.inLogin])
    return (
        <div className='header'>
            <div className='leftSide'>
                <Link to='/' onClick={() => dispatch(loginActions.setInLogin(false))}><p className='header_title'>Exchange</p></Link>
                {!loginstate.inLogin && <p className='trade'>{t('trade')}</p>}
            </div>
            {
                !loginstate.inLogin ? (!loginstate.auth.token ? <NavSide t={t} /> : <AuthNav t={t} />) : <LoginNav t={t} />
            }
        </div>
    )
}

export { Header }