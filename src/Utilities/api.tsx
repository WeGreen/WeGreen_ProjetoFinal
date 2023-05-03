import axios from "axios"
import { TCreatePostFormValues } from "../Components/Modal/CreatePostModal/CreatePostSchema";
import { TCreateTaskFormValues } from "../Components/Modal/TaskModals/CreateTaskModal/CreateTaskSchema";
import { ITasks } from "../Providers/TaskProviders/typeTask";

export type TPost = {
    title: string,
    content: string,
    userId: number,
    id: number
}

type TPostId = number;

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbmljZUBtYWlsLmNvbSIsImlhdCI6MTY4MzA3MTg4MywiZXhwIjoxNjgzMDc1NDgzLCJzdWIiOiIyIn0.FkNKX14g7rfPistTet8eDuwLcnipY0JVaJ8Lpf-QQ6w" //@TODO get token from localStorage or context

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
/*     const userToken = localStorage.getItem( "@wegreen:usertoken" ) */
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvYW9AbWFpbC5jb20iLCJpYXQiOjE2ODMxMjIyMDAsImV4cCI6MTY4MzEyNTgwMCwic3ViIjoiNSJ9.IW0vkbwXRU8RnOHIfxzpzcGOB_sepmBN4P-Vt59sakw"
    
    return api.post("/tasks", formData, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
})
}

export const editTaskRequest = (task: ITasks) => {

    console.log(task)
    return api.put(`/tasks/${task.id}`, task, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
})
}

export const deleteTaskRequest = (taskId: number) => {

    return api.delete(`/tasks/${taskId}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
})
}
