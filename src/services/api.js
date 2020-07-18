import axios from 'axios';
import env from '../common';

const api = axios.create({
    baseURL: env.api.baseUrl
});

export default api;  