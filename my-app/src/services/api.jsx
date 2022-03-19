import axios from 'axios'

const api = axios.create({
    baseURL: "https://api-nodejs-drikks.herokuapp.com"
})

export default api