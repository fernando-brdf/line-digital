import axios from 'axios';
import env from '../common';

const api = axios.create({
    baseURL: process.env.BASE_URL
});

export default api;  