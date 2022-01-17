import { useDispatch, useSelector } from 'react-redux';
import './submitBtn.scss'
import { useNavigate } from "react-router-dom";
import * as loginActions from '../../../redux/slices/loginslice'
import { useEffect } from 'react';

function SubmitBtn({ value }) {
    const dispatch = useDispatch()
    const loginstates = useSelector(state => state.login);
    const navigate = useNavigate()

    const handleShowAlert = () => {
        dispatch(loginActions.setShowAlert(true))
    }
    useEffect(() => {
        dispatch(loginActions.setShowAlert(false))
        dispatch(loginActions.setemail(''))
        dispatch(loginActions.setpassword(''))
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        let payload = {
            email: loginstates.email,
            password: loginstates.password
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

        try {
            dispatch(loginActions.loginAsyncApi({ config, navigate, handleShowAlert }))
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <input className='submitbtn' onClick={(e) => handleSubmit(e)} type='submit' value={value} />
    )
}
export { SubmitBtn }