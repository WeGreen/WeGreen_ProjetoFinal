import axios from "axios"

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

export const createPostRequest = (formData) => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbmljZUBtYWlsLmNvbSIsImlhdCI6MTY4Mjg4NDA1OCwiZXhwIjoxNjgyODg3NjU4LCJzdWIiOiI0In0.Y_GzJrJWdgGyL-yjFJ47Jp4XXuzOvDJ-w2FvC-TMwu0" //@TODO get token from localStorage
        return api.post("/posts", formData, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
    })
}
