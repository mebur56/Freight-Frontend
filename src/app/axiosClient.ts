import axios from 'axios';
const axiosClient = axios.create({
    baseURL: process.env.API_BASE_URL
});




export default axiosClient;