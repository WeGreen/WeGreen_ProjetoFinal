import axios from "axios"
import { TCreatePostFormValues } from "../Components/Modal/CreatePostModal/CreatePostSchema";
import { TEditPostFormValues } from "../Components/Modal/EditPostModal/EditPostSchema";

export type TPost = {
    title: string,
    content: string,
    userId: number,
    id: number
}

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
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbmljZUBtYWlsLmNvbSIsImlhdCI6MTY4Mjg4ODEwNSwiZXhwIjoxNjgyODkxNzA1LCJzdWIiOiI0In0.Ca6C1wWX3xzQ6tzKHYWw6BMnFlqCy88utbuUgOmMy2A" //@TODO get token from localStorage
        return api.post("/posts", formData, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
    })
}

export const editPostRequest = (post: TPost) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbmljZUBtYWlsLmNvbSIsImlhdCI6MTY4Mjk3NjU4MCwiZXhwIjoxNjgyOTgwMTgwLCJzdWIiOiI0In0.1mIMbC7weXV0ZDVk3OpG0Vy1pVKLlMJu0gIFlEm571E" //@TODO get token from localStorage
    console.log(post)
    return api.put(`/posts/${post.id}`, post, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
})
}

