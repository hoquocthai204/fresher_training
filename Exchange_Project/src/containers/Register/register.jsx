import { FormHeader } from '../../shared/components/formHeader';
import { SubmitBtn } from '../../shared/components/submitBtn';
import { InputContainer } from './components/inputContainer';
import { CheckboxContainer } from './components/checkboxContainer';
import { SelectContainer } from './components/selectContainer';
import './register.scss'

function RegisterPage({ t }) {
    return (
        <form className="form_register">
            <FormHeader title={t('register_title')} subtitle={t('register_subtitle')} />
            <InputContainer type={'text'} text={t('firstName')} val={'firstName'} />
            <InputContainer type={'text'} text={t('lastName')} val={'lastName'} />
            <InputContainer type={'email'} text={'Email'} val={'email'} />
            <InputContainer type={'password'} text={t('password')} val={'password'} />
            <SelectContainer t={t} />
            <CheckboxContainer t={t} />
            <SubmitBtn value={t('register')} flag={'register'} />
        </form>
    )
}
export { RegisterPage }