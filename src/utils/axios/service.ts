import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import config from './config'
import qs from 'qs'

const configAxios = { baseURL: 'api', timeout: config.request_timeout }
const service: AxiosInstance = axios.create(configAxios)

service.interceptors.request.use((config: AxiosRequestConfig) => {
    if (
        config.method === 'post' &&
    config.headers?.['Content-Type'] === 'application/x-www-form-urlencoded'
    ) {
        config.data = qs.stringify(config.data)
    }
    return config
})

service.interceptors.response.use((response: AxiosResponse) => {
    return response.data
})

export { service }
