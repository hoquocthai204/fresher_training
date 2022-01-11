import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../../redux/slices/homeslice';
import './subcontent.scss'

function Subcontent(props) {
    const dispatch = useDispatch()
    const states = useSelector(state => state.home);
    return (
        <div className='subcontent'>
            <div className='subcontent_container'>
                <p className='subcontent_title'>{props.header}</p>
                <p className='subcontent_subtitle'>{props.subheader}</p>
                <button className='register_btn'>{props.resbtn}</button>
            </div>
            <div className='coinDetail'>
                {
                    states.coinList.map((element) => {
                        if (element.id < 6) {
                            let data = states.socketdata
                            return data.map(e => {
                                if (e[0] === element.code && e[1] === states.currency.code) {
                                    return (
                                        <div className='coinContainer' key={element.id}>
                                            <p className='coinPair'>{`${element.code}/${states.currency.code}`} {e[3] > 0 ? (<span className='increase'>{e[3]}</span>) : (<span className='decrease'>{e[3]}</span>)}</p>
                                            <p className='rate'>1</p>
                                            <span>{states.currency.code === 'USD' ? `${states.currency.symbol} ${e[2]}` : `${e[2]} ${states.currency.symbol}`}</span>
                                        </div>
                                    )
                                }
                            })
                        }
                    })
                }

            </div>
        </div>
    )
}
export { Subcontent }