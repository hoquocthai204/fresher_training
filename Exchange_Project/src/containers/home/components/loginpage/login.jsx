import { useEffect } from 'react'
import * as Components from '.'
import './login.scss'
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../../redux/slices/loginslice';
import axios from 'axios';

function LoginPage() {
    const dispatch = useDispatch()
    const states = useSelector(state => state.login);

    function handleSubmit(e) {
        e.preventDefault()
        let payload = {
            email: states.email,
            password: states.password
        }
        var config = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        };
        fetch('http://localhost:8080/api/login', config)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                dispatch(Actions.setAuth(json))
            })
    }

    useEffect(() => {
        if (states.auth.token) {
            dispatch(Actions.setIsLogin(true))
        }
        else {
            dispatch(Actions.setIsLogin(false))
        }
    }, [states.auth])

    function handleclick() {
        alert(states.isLogin)
    }
    return (
        <>
            <form className='form_login'>
                <Components.FormHeader />

                <Components.Container type='email' text='Email' />

                <Components.Container type='password' text='Password' />

                <input className='submitbtn' onClick={handleSubmit} type="submit" value={'Log In'} />

                <p className='registerbtn' onClick={handleclick}>Register Now</p>
            </form>
        </>
    )
}
export { LoginPage }