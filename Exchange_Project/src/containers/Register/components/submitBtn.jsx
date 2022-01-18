import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import * as regisActions from '../../../redux/slices/registerslice'
import './submitBtn.scss'

function SubmitBtn({ value }) {
    const dispatch = useDispatch()
    const regisstates = useSelector(state => state.regis);
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(regisActions.setemail(''))
        dispatch(regisActions.setpassword(''))
        dispatch(regisActions.setfirstName(''))
        dispatch(regisActions.setlastName(''))
        dispatch(regisActions.setlangCode('en'))
    },[])
    function handleSubmit(e) {
        e.preventDefault()
        let payload
        if (regisstates.checkCondition) {
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
        
        try {
            dispatch(regisActions.regisAsyncApi({ config, navigate }))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <input className='submitbtn' onClick={(e) => handleSubmit(e)} type='submit' value={value} />
    )
}
export { SubmitBtn }