import './inputContainer.scss'
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../redux/slices/loginslice';

function InputContainer({ type, text }) {
    const dispatch = useDispatch()
    const states = useSelector(state => state.login);
    return (
        <div className='container'>
            <label htmlFor={type}>{text}</label>
            <input
                type={type}
                id={type}
                value={states.type}
                onChange={(e) => {
                    if(type==='email'){
                        localStorage.setItem('email', e.target.value)
                        dispatch(Actions.setEmail(e.target.value))
                    }
                    else{
                        dispatch(Actions.setPassword(e.target.value))
                    }
                    // type === 'email' ? dispatch(Actions.setEmail(e.target.value)) : dispatch(Actions.setPassword(e.target.value))
                }} />
        </div>
    )
}
export { InputContainer }