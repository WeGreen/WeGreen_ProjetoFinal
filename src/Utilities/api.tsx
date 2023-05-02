import axios from "axios"
import { TCreatePostFormValues } from "../Components/Modal/CreatePostModal/CreatePostSchema";
import { TCreateTaskFormValues } from "../Components/Modal/TaskModals/CreateTaskModal/CreateTaskSchema";

export type TPost = {
    title: string,
    content: string,
    userId: number,
    id: number
}

type TPostId = number;

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbmljZUBtYWlsLmNvbSIsImlhdCI6MTY4MzA0MzU3OSwiZXhwIjoxNjgzMDQ3MTc5LCJzdWIiOiI0In0.qnX5EMBQKeDG0bHTDdL74bl-E9kci8HY6JQC_Bd6sxQ" //@TODO get token from localStorage

export const api = axios.create({
    baseURL: "http://localhost:3333",
    timeout: 10000,
});

export const loginRequest = (formData) => {
    return api.post('/login', formData)
}

export const signupRequest = (formData) => {
    return api.post('/register', formData)
}

// export const fetchUserRequest = (id) => {
//     return api.get(`/users/${id}`, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//           },
//     })
// }
//@TODO pegar token no localStorage para habilitar esta requisição

export const createPostRequest = (formData: TCreatePostFormValues) => {

        return api.post("/posts", formData, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
    })
}

export const editPostRequest = (post: TPost) => {

    console.log(post)
    return api.put(`/posts/${post.id}`, post, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
})
}

export const deletePostRequest = (postId: TPostId) => {
 
    return api.delete(`/posts/${postId}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
})
}

export const createTaskRequest = (formData: TCreateTaskFormValues) => {
    
    return api.post("/tasks", formData, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
})
}

