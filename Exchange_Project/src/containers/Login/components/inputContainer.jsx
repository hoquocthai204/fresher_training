import './inputContainer.scss'
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../redux/slices/loginslice';

function InputContainer({ type, text, val }) {
    const dispatch = useDispatch()
    const states = useSelector(state => state.login);
    return (
        <div className='container'>
            <label>{text}</label>
            <input
                type={type}
                value={states.type}
                onChange={(e) => {
                    dispatch(Actions[`set${val}`](e.target.value))
                }} />
        </div>
    )
}
export { InputContainer }