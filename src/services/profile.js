import axios from "axios";

let token = null
let userId = null

const setToken = newToken => {
    token = `Bearer ${newToken}`
}
const setUserId = id => {
    userId = id
}
const getUser = async () => {
    const config = {
        headers: {Authorization: token},
        params: {userId}
    }
    console.log("***", userId)
    const response = await axios.get(`https://tpn-server.onrender.com/api/users/user/`, config)
    console.log("data returned", response.data)
    return response.data
}

export default {setToken, setUserId, getUser}