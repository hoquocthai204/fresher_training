import './regisInputContainer.scss'
import { useDispatch, useSelector } from 'react-redux';
import * as regisActions from '../../../redux/slices/registerslice';

function RegisInputContainer({ type, text, val }) {
    const dispatch = useDispatch()
    const regisstates = useSelector(state => state.regis);

    function handleupdate(e) {
        dispatch(regisActions[`set${val}`](e.target.value))
    }
    return (
        <div className='container'>
            <label>{text}</label>
            <input
                type={type}
                value={regisstates[val]}
                onChange={handleupdate}
            />
        </div>
    )
}
export { RegisInputContainer }