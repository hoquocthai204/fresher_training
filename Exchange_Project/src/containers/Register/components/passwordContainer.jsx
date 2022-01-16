import './passwordContainer.scss'
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../redux/slices/registerslice';
import { useEffect, useState } from 'react';

function PasswordContainer({ text, val }) {
    const dispatch = useDispatch()
    const regisstates = useSelector(state => state.regis);
    const [eye, setEye] = useState(false)
    const [type, setType] = useState('password')

    function handleToggle() {
        setEye(!eye)
    }
    useEffect(() => {
        (!eye) ? setType('password') : setType('text')
    }, [eye])
    
    return (
        <div className='container'>
            <label>{text}</label>
            <div className="input_box">
                <input
                    type={type}
                    value={regisstates[val]}
                    onChange={(e) => {
                        dispatch(Actions[`set${val}`](e.target.value))
                    }}
                />
                {
                    !eye ? <i onClick={handleToggle} class="fas fa-eye-slash"></i> : <i onClick={handleToggle} class="fas fa-eye"></i>
                }

            </div>
        </div>
    )
}
export { PasswordContainer }