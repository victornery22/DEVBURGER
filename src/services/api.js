import axios from "axios";
export const api = axios.create({
    baseURL: "http://localhost:3001",
})

api.interceptors.request.use(async config => {
    const userData = localStorage.getItem("devburger:data")
    const token = userData && JSON.parse(userData).token
    config.headers.authorization = `Bearer ${token}`
    return config
})