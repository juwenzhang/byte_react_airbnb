import axios from "axios"
import { BASE_URL, TIMEOUT } from "./config"

// 开始我们的 axios 的二次封装
class JWZRequestConfig {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL: baseURL,
            timeout: timeout
        })

        this.instance.interceptors.request.use((config) => {
            const token = localStorage.getItem("token") // BOM 操作了  js  DOM  BOM
                || sessionStorage.getItem("token")
                || localStorage.getItem("cookie")
                || sessionStorage.removeItem("cookie")

            if (token) {
                config.headers.Authorization = token
            }
            return config
        }, err => {
            // console.log(err)
        })

        // this.instance.interceptors.response.use((res) => {
        //     return res?.data
        // }, (err) => {
        //     if (err?.response) {
        //         switch (err?.response?.status) {
        //             // 根据不同的响应结果，返回不同的值
        //             case 401:
        //                 return Promise.reject(err?.response?.desc)
        //             case 403:
        //                 return Promise.reject(err?.response?.desc)
        //             case 404:
        //                 return Promise.reject(err?.response?.desc)
        //             case 500:
        //                 return Promise.reject("垃圾后端工程师 | 垃圾服务器（但我是 fullStack）")
        //             default:
        //                 return Promise.reject(err?.response?.desc)
        //         }
        //     } else if(err?.request) {
        //         return Promise.reject(err?.request)  // 请求发出了，但是服务端没有做出响应
        //     } else {
        //         return Promise.reject(err)  // 客户端请求过程错误
        //     }
        // })
    }

    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(response => {
                resolve(response)
            }).catch(error => {
                // reject(error)
                // console.log(error)
            })
        })
    }

    get(config) {
        this.request({ ...config, method: 'GET' })
    }

    post(config) {
        this.request({ ...config, method: 'POST' })
    }

    put(config) {
        this.request({ ...config, method: 'PUT' })
    }

    patch(config) {
        this.request({ ...config, method: 'PATCH' })
    }

    delete(config) {
        this.request({ ...config, method: 'DELETE' })
    }
}

const JWZRequest = new JWZRequestConfig(BASE_URL, TIMEOUT)
export default JWZRequest

// 组件中直接在 useEffect 中发送请求即可