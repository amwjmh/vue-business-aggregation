import request from '@/utils/axios'
import { LoginParams } from './model/userModel'
export const loginApi = (data: LoginParams) => {
    return request.post({ url: '/user/login', data })
}
