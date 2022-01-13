import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../redux/slices/loginslice';
import './submitBtn.scss'

function SubmitBtn({ type, value }) {
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
                if (json.token) {
                    dispatch(Actions.setInLogin(false))
                }
                dispatch(Actions.setAuth(json))
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <input className='submitbtn' onClick={handleSubmit} type={type} value={value} />
        </>
    )
}
export { SubmitBtn }