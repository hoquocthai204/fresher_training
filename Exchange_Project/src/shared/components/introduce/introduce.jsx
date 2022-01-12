import { memo, useRef } from 'react'
import './introduce.scss'

function Introduce(props) {
    const ref = useRef()
    function handleClick() {
        ref.current.style.display = 'none'
    }
    return (
        <div className='introduce_notification' ref={ref}>
            <i class="fas fa-exclamation-circle"></i>
            <p>{props.text}</p>
            <span>{props.more}</span>
            <i class="fas fa-times" onClick={handleClick}></i>
        </div>
    )
}
export { Introduce }