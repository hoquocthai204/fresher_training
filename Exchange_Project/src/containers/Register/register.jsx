import { FormHeader } from '../../shared/components/formHeader';
import { SubmitBtn } from './components/submitBtn';
import { RegisInputContainer } from './components/regisInputContainer'; 
import { CheckboxContainer } from './components/checkboxContainer';
import { SelectContainer } from './components/selectContainer';
import { PasswordContainer } from './components/passwordContainer';
import './register.scss'

function RegisterPage({ t }) {
    return (
        <form className="form_register">
            <FormHeader title={t('register_title')} subtitle={t('register_subtitle')} />
            <RegisInputContainer type={'text'} text={t('firstName')} val={'firstName'} />
            <RegisInputContainer type={'text'} text={t('lastName')} val={'lastName'} />
            <RegisInputContainer type={'email'} text={'Email'} val={'email'} />
            <PasswordContainer text={t('password')} val={'password'} />
            <SelectContainer t={t} />
            <CheckboxContainer t={t} />
            <SubmitBtn value={t('register')} flag={'register'} />
        </form>
    )
}
export { RegisterPage }