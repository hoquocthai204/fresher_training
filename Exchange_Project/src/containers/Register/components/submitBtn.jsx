import { useSelector } from 'react-redux';
import './submitBtn.scss'
import { useNavigate } from "react-router-dom";

function SubmitBtn({ value }) {
    const regisstates = useSelector(state => state.regis);
    const navigate = useNavigate()

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
        fetch(`http://localhost:8080/api/register`, config)
            .then(res => {
                if (Math.trunc(res.status/100) !== 2) {
                    throw new Error("Error from bahnql endpoint");
                }
                return res.text();
            })
            .then(json => {
                navigate('/login')
            })
            .catch(error => console.log(error))
    }

    return (
        <input className='submitbtn' onClick={(e) => handleSubmit(e)} type='submit' value={value} />
    )
}
export { SubmitBtn }