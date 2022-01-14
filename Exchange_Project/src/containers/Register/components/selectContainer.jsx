import './selectContainer'

function SelectContainer({ t }) {
    return (
        <div className="select_container">
            <p htmlFor="selectbox">{t('country')}</p>
            <select name="" id="">
                <option value=""></option>
            </select>

        </div>
    )
}
export { SelectContainer }