import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../redux/slices/authslice'
import { useEffect } from 'react'
import './notification.scss'

function Notification() {
    const dispatch = useDispatch()
    const authStates = useSelector(state => state.auth)
    const loginStates = useSelector(state => state.login)

    useEffect(() => {
        if (authStates.showNotificationBox) {
            fetch('http://localhost:8080/api/public/notifications/count-unread', {
                method: 'get',
                headers: new Headers({
                    'Authorization': 'Bearer ' + (`${loginStates.auth.token}`),
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
            })
                .then(res => res.json())
                .then(json => {
                    dispatch(authActions.setUnreadNotification(json))
                })
                .catch(error => console.log(error))

            fetch('http://localhost:8080/api/public/notifications', {
                method: 'get',
                headers: new Headers({
                    'Authorization': 'Bearer ' + (`${loginStates.auth.token}`),
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
            })
                .then(res => res.json())
                .then(json => {
                    dispatch(authActions.setListNotification(json))
                })
                .catch(error => console.log(error))
        }
    }, [authStates.showNotificationBox])

    const handleReadAll = () => {
        fetch('http://localhost:8080/api/public/notifications/read-all', {
            method: 'put',
            headers: new Headers({
                'Authorization': 'Bearer ' + (`${loginStates.auth.token}`),
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
        })
    }

    const handleview = (id) => {
        fetch(`http://localhost:8080/api/public/notifications/read/${id}`, {
            method: 'put',
            headers: new Headers({
                'Authorization': 'Bearer ' + (`${loginStates.auth.token}`),
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
        })
    }
    return (
        <div className="notification_container">
            <button className='notTab' onClick={() => dispatch(authActions.setShowNotificationBox(!authStates.showNotificationBox))}><i class="far fa-bell"></i></button>

            {authStates.showNotificationBox &&
                (<div className="not_Box">
                    <div className="not_Header">
                        <p className="not_pending">
                            <span>{authStates.unreadNotification}</span>
                            pending notifications
                        </p>
                        <button className='clear_not' onClick={handleReadAll}>Clear All</button>
                        <button className='view_not'>View All <i class="fas fa-chevron-right"></i></button>
                    </div>

                    <div className="not_List">
                        {
                            authStates.listNotification.map(element => {
                                let timeText = ''
                                let diff = Math.abs(((new Date() - new Date(element.createdDate)) / 86400) / 1000)
                                if (diff > 0) {
                                    timeText = `${Math.trunc(diff)} d ago`
                                }
                                else if (diff < 0) {
                                    diff = diff * 24
                                    timeText = `${Math.trunc(diff)} h ago`
                                }
                                return (!element.seen &&
                                    (<div className="item" key={element.id} onClick={() => handleview(element.id)}>
                                        <p className='title'>{element.title}</p>
                                        <p className='content'>{element.content}</p>
                                        <p className='date'>{timeText}</p>
                                    </div>)
                                )
                            })
                        }
                    </div>
                </div>)}
        </div>
    )
}
export { Notification }