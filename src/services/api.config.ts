import axios from 'axios';

//* baseURL should be in the .env
export const api = axios.create({ baseURL: 'https://www.simplycook.com/api' });

api.interceptors.request.use(
    (config: any) => {
        try {
            config.headers.Accept = 'application/json';
            return config;
        } catch { }
    },
    error => Promise.reject(error),
);
