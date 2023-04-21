import axios, { AxiosRequestConfig } from 'axios'
import { URL } from '../utils/URL'

const $host = axios.create({
    baseURL: URL
})

const $authHost = axios.create({
    baseURL: URL
})

const authInterceptor = (config: AxiosRequestConfig) => {
    (config.headers ??= {}).authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor as any)

export {
    $host,
    $authHost
}