import { createContext, useEffect, useState } from "react"; 
import { api } from "../Utilities/api";

interface IPostProviderProps{
    children: React.ReactNode
}


interface IPost{
    title: string;
    content: string;
    id: number;
    userId: number; 

}

interface IPostsContext{
    postsList: IPost[]
}


export const PostContext = createContext({} as IPostsContext)

export const PostProvider = ({children}: IPostProviderProps) => {
    const [postsList, setPostsList] = useState<IPost[]>([])

useEffect(() => {
   const postsLoad = async () => {
        try {
            const { data } = await api.get<IPost[]>('/posts/:id') // A gente tem uma rota só para os posts sem o id?
            setPostsList(data);
            
        } catch (error) {
            console.log(error);
            
        }
    }
    postsLoad()
}, [])

    return(
        <PostContext.Provider value={{ postsList, }}>
            {children}
        </PostContext.Provider>
    )
}


