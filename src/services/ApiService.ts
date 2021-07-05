import axios from 'axios'

const ApiService = axios.create({
    baseURL: 'https://s3-sa-east-1.amazonaws.com/config.instacarro.com/recruitment/'
})

export default ApiService;