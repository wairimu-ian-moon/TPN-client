import axios from "axios"

const baseURL = "http://localhost:3000/api/users/login"
let token = null

const setToken = newToken => {
    token = `Bearer ${newToken}`
}

const create = async (newObject) => {
    const config = {
        headers: {Authorization: token}
    }
    const response = await axios.post(baseURL, newObject, config)
    return response.data
}

const login = async credential => {
    const response = await axios.post(baseURL, credential)
    return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { login, create, setToken }