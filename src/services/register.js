import axios from "axios";

const baseURL = "https://tpn-server.onrender.com/api/users"

const register = async (newObject) => {
    const response = await axios.post(baseURL, newObject)
    return response.data
}

export default {register}