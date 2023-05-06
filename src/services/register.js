import axios from "axios";

const baseURL = "/api/users"

const register = async (newObject) => {
    const response = await axios.post(baseURL, newObject)
    return response.data
}

export default {register}