import './checkboxContainer.scss'

function CheckboxContainer({ t }) {
    return (
        <div className="checkbox_container">
            <label class="container">{t('promise1')}
                <input type="checkbox" required />
                <span class="checkmark"></span>
            </label>
            <label class="container">{t('propmise2')}
                <input type="checkbox" required />
                <span class="checkmark"></span>
            </label>
        </div>
    )
}
export { CheckboxContainer }