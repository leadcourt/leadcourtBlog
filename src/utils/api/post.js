import axios from 'axios'


const baseUrl = import.meta.env.VITE_BE_URL

const addPost = async (payload) => {
    return axios.post(`${baseUrl}/post/create`, payload)
}



const getAllPost = async (payload) => {
    return axios.get(`${baseUrl}/post/getposts`, payload)
}

const getPostBySlug = async (postSlug) => {
    return axios.get(`${baseUrl}/post/getposts?slug=${postSlug}`)
}

const deletePostByID = async (postId) => {
    return axios.get(`${baseUrl}/post/deletepost/${postId}`)
}
// /


const getPostComment = async (postId) => {
    return axios.get(`${baseUrl}/comment/getPostComments/${postId}`,)
}

const addCommentToPost = async (payload) => {
    return axios.post(`${baseUrl}/comment/create`, payload)
}



export {
    addPost,
    getAllPost,
    getPostBySlug,

    deletePostByID,
    getPostComment,
    addCommentToPost,
}