import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/user/v1',
    withCredentials: true,
});

export default api;