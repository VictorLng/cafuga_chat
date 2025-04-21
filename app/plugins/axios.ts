import axios from 'axios';

export default defineNuxtPlugin(() => {
    const axiosInstance = axios.create({
        baseURL: process.env.VUE_APP_BASE_URL_API || 'http://localhost:7034',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    axiosInstance.interceptors.request.use(
        config => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        },
        error => {
            if (error.response && error.response.status === 401) {
                localStorage.removeItem('auth_token')
            }

            return Promise.reject(error)
        })
    return {
        provide: {
            axios: axiosInstance
        }
    }
})