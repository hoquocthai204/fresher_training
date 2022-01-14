import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../redux/slices/loginslice';
import './submitBtn.scss'
import { useNavigate } from "react-router-dom";

function SubmitBtn({ value, flag }) {
    const dispatch = useDispatch()
    const loginstates = useSelector(state => state.login);
    const regisstates = useSelector(state => state.regis);
    const navigate = useNavigate()

    function handleSubmit(e, flag) {
        e.preventDefault()
        let payload
        if (flag === 'login') {
            payload = {
                email: loginstates.email,
                password: loginstates.password
            }
        }
        if (flag === 'register') {
            payload = {
                email: regisstates.email,
                firstName: regisstates.firstName,
                langCode: regisstates.langCode,
                lastName: regisstates.lastName,
                password: regisstates.password
            }
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
        fetch(`http://localhost:8080/api/${flag}`, config)
            .then(res => res.json())
            .then(json => {
                if (json.token) {
                    dispatch(Actions.setInLoginorRegis(false))
                    navigate('/')
                }
                dispatch(Actions.setAuth(json))
            })
        if (flag === 'register')
            navigate('/login')
    }

    return (
        <input className='submitbtn' onClick={(e) => handleSubmit(e, flag)} type='submit' value={value} />
    )
}
export { SubmitBtn }