import { $authHost, $host } from './axios'
import jwtDecode from 'jwt-decode'

export const registration = async (email: string, password: string) => {
    try {
        const {data} = await $host.post('api/user/registration', { email, password, role: "ADMIN" })
        const token = data.token
        localStorage.setItem("token", token)
        return jwtDecode(token)
    } catch (err) {
        console.log(err)
    }
}

export const login = async (email: string, password: string) => {
    try {
        const {data} = await $host.post('api/user/login', { email, password })
        const token = data.token
        localStorage.setItem("token", token)
        return jwtDecode(token)
    } catch (err) {
        console.log(err)
    }
}

export const check = async () => {
    try {
        const { data } = await $authHost.get('api/user/auth')
        const token = data.token
        localStorage.setItem("token", token)
        return jwtDecode(token)
    } catch (err) {
        console.log(err)
    }
}