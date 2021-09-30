import axios from 'axios';


const Api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 1000
});

Api.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    if(token){
        config.headers.Authorization =  token ? `Bearer ${token}` : '';
    }
    return config;
});


export default Api