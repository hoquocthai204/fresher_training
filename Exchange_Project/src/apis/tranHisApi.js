import axios from "axios"

const tranHisApi = {
    getTranHis({ data, token }) {
        return axios.get('http://localhost:8080/api/public/transactions', data, {
            headers: {
                'Authorization': 'Bearer ' + (`${token}`),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
    }
}
export default tranHisApi