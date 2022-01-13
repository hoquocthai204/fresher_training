import { FormHeader } from '../../shared/components/formHeader';
import { InputContainer } from '../../shared/components/inputContainer';
import { SubmitBtn } from '../../shared/components/submitBtn';
import './login.scss'

function LoginPage() {
    return (
        <>
            <form className='form_login'>
                <FormHeader />

                <InputContainer type='email' text='Email' />

                <InputContainer type='password' text='Password' />

                <SubmitBtn type='submit' value='Log In' />

                <p className='registerbtn'>Register Now</p>
            </form>
        </>
    )
}
export { LoginPage }