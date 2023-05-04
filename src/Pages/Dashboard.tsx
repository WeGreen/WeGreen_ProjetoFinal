import { Header } from "../Components/Header/Header"
import { TaskContainer } from "../Components/TaskContainer/taskContainer"

import { useContext } from 'react';
import { PostContext } from "../Providers/PostContext"; 
import { PostsList } from "../Components/PostsList/PostsList";


    
export const Dashboard = () => {
    const { postsList } = useContext(PostContext);

    return(
        <>
            <Header/>
            <PostsList />
            <TaskContainer />
        </>
    )
}