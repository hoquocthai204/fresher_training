import './checkboxContainer.scss'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import * as regisActions from '../../../redux/slices/registerslice'

function CheckboxContainer({ t }) {
    const dispatch = useDispatch()
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)

    useEffect(() => {
        if (check1 && check2) {
            dispatch(regisActions.setCheckCondition(true))
        }
    }, [check1, check2])

    return (
        <div className="checkbox_container">
            <label class="container">{t('promise1')}
                <input type="checkbox" required checked={check1} onChange={(e) => setCheck1(!check1)} />
                <span class="checkmark"></span>
            </label>
            <label class="container">{t('propmise2')}
                <input type="checkbox" required checked={check2} onChange={(e) => setCheck2(!check2)} />
                <span class="checkmark"></span>
            </label>
        </div>
    )
}
export { CheckboxContainer }