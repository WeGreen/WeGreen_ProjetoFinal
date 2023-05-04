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

const token = () => localStorage.getItem("@wegreen:token")

export const api = axios.create({
    baseURL: "https://wegreen-api.onrender.com",
    timeout: 10000,
});

export const createPostRequest = (formData: TCreatePostFormValues, userId?: number) => {
        return api.post("/posts", { ...formData, userId }, {
            headers: {
                "Authorization": `Bearer ${token()}`
            }
    })
}

export const editPostRequest = (post: TPost) => {
    return api.put(`/posts/${post.id}`, post, {
        headers: {
            "Authorization": `Bearer ${token()}`
        }
})
}

export const deletePostRequest = (postId: TPostId) => {
    return api.delete(`/posts/${postId}`, {
        headers: {
            "Authorization": `Bearer ${token()}`
        }
})
}

export const createTaskRequest = (formData: TCreateTaskFormValues, userId?: number) => {
    return api.post("/tasks", { ...formData, userId }, {
        headers: {
            "Authorization": `Bearer ${token()}`
        }
    })
}

export const editTaskRequest = (task: ITasks) => {
    return api.put(`/tasks/${task.id}`, task, {
        headers: {
            "Authorization": `Bearer ${token()}`
        }
    })
}

export const deleteTaskRequest = (taskId: number) => {
    return api.delete(`/tasks/${taskId}`, {
        headers: {
            "Authorization": `Bearer ${token()}`
        }
    })
}