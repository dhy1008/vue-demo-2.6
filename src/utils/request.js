import axios from 'axios'
import { message } from '@/utils/resetMessage'
import { getToken } from '@/utils/auth'
import store from '@/store'
import router from '../router'

// create an axios instance
window.axiosCancel = []
export function request(config) {
    const service = axios.create({
        timeout: 50000, // request timeout
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
    })

    // 请求拦截器
    service.interceptors.request.use(
        (config) => {
            // 在发送请求之前做点什么
            // 给每个请求添加取消方法
            config.cancelToken = new axios.CancelToken((cancel) => {
                window.axiosCancel.push({
                    cancel,
                })
            })
            if (store.getters.token) {
                // 请求头都带上token
                config.headers['X-Auth-Token'] = getToken()
            }
            return config
        },
        (error) => {
            // 处理请求错误
            Promise.reject(error)
        }
    )
    // 响应拦截器
    service.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            if (error) {
                if (error.response.data.code === 401) {
                    // token过期时直接跳去登录
                    router.push(`/login`)
                    message({
                        message: `token过期，请重新登录！`,
                        type: 'error',
                    })
                } else if (error.response.data.code === 500) {
                    message({
                        message: `服务器异常！`,
                        type: 'error',
                        duration: 2000,
                    })
                } else {
                    message({
                        message: `${error.response.data.msg}！`,
                        type: 'error',
                    })
                }
            }
            return Promise.reject(error)
        }
    )

    service(config.baseConfig)
        .then((res) => {
            config.success(res)
        })
        .catch((err) => {
            config.failure(err)
        })
}
