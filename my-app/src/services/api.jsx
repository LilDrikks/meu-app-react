import axios from 'axios'

const api = axios.create({
    baseURL: "http://15.228.185.140:3333/person"
})

export default api