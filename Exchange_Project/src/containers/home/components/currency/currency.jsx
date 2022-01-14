import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../../redux/slices/homeslice';
import './currency.scss'

function Currency(props) {
    const dispatch = useDispatch()
    const states = useSelector(state => state.home);
    const [currencyList, setcurrencyList] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/common/currencies')
            .then(res => res.json())
            .then(json => {
                setcurrencyList(json)
            })
    }, [])

    function handleClick(element, symbol) {
        document.querySelectorAll('.currency_list .item').forEach((e) => {
            e.classList.remove('active')
        })
        document.querySelector(`.currency_list .${element}`).classList.add('active')
        let jsondata = {
            code: element,
            symbol: symbol
        }
        localStorage.setItem('curr', JSON.stringify(jsondata))
        dispatch(Actions.setCurrency(jsondata))
    }

    return (
        <div className='currency_container'>
            <h4 className='currency_header'>{props.title}</h4>
            <div className='currency_list'>
                {
                    currencyList.map(element => {
                        return <a key={element.code} className={`item ${element.code}`} onClick={() => handleClick(`${element.code}`, `${element.symbol}`)}>{element.code} - {element.symbol}</a>
                    })
                }
            </div>
        </div>
    )
}
export { Currency }