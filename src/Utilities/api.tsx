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
//pegar token no localStorage para habilitar esta requisição