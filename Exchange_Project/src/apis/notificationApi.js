const notificationApi = {
    getNotList(token) {
        return (
            fetch('http://localhost:8080/api/public/notifications', {
                method: 'get',
                headers: new Headers({
                    'Authorization': 'Bearer ' + (`${token}`),
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
            })
                .then(res => {
                    if (Math.trunc(res.status / 100) !== 2) {
                        throw new Error("Error to get getNotList");
                    }
                    return res.json()
                })
        )
    },
    getUnreadNot(token) {
        return (
            fetch('http://localhost:8080/api/public/notifications/count-unread', {
                method: 'get',
                headers: new Headers({
                    'Authorization': 'Bearer ' + (`${token}`),
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
            })
                .then(res => {
                    if (Math.trunc(res.status / 100) !== 2) {
                        throw new Error("Error to get getUnreadNot");
                    }
                    return res.json()
                })
        )
    },
    putReadAllNot(token) {
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
    }
}

export default notificationApi