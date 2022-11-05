import { MockMethod } from 'vite-plugin-mock'
import data from './data'
const timeout = 10000
export default [
    {
        url: '/user/login',
        method: 'get',
        response: ({ query }) => {
            for (const user of data) {
                if (user.username === query.username && user.password === query.password) {
                    return {
                        code: 200,
                        data: user
                    }
                }
            }
            return {
                code: 500,
                message: '账号或密码错误'
            }
        }
    }
] as MockMethod[]
