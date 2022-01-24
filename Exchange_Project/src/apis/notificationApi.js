import axios from 'axios'

const notificationApi = {
    getNotList(token) {
        return axios.get('http://localhost:8080/api/public/notifications', {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })

    },
    getUnreadNot(token) {
        return axios.get('http://localhost:8080/api/public/notifications/count-unread', {
            headers: {
                'Authorization': 'Bearer ' + `${token}`,
            }
        })
    },
    putReadAllNot(token) {
        // return axios.put('http://localhost:8080/api/public/notifications/read-all', {
        //     headers: {
        //         'Authorization': 'Bearer ' + `${token}`,
        //     }
        // })

        return (
            fetch('http://localhost:8080/api/public/notifications/read-all', {
                method: 'put',
                headers: new Headers({
                    'Authorization': 'Bearer ' + (`${token}`),
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
            })
        )
    },
    putReadAnyNot({ token, id }) {
        return (
            fetch(`http://localhost:8080/api/public/notifications/read/${id}`, {
                method: 'put',
                headers: new Headers({
                    'Authorization': 'Bearer ' + (`${token}`),
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
            })
        )

        // return axios.put(`http://localhost:8080/api/public/notifications/read/${id}`, {
        //     headers: {
        //         'Authorization': 'Bearer ' + `${token}`,
        //     }
        // })
    }
}

export default notificationApi