import axios from "axios";

const baseURL = "/api/blogs/create"
let token = null

const setToken = newToken => {
    token = `Bearer ${newToken}`
}
const createBlog = async (newObject) => {
    const config = {
        headers: {Authorization: token}
    }
    const response = await axios.post(baseURL, newObject, config)
    return response.data
}
const getBlogs = async () => {
    const response = await axios.get(`/api/blogs`)
    return  response.data
}
export default {createBlog, setToken, getBlogs}