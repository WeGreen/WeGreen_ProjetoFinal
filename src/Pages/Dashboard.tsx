import { useContext } from "react"
import { Header } from "../Components/Header/Header"
import { TaskContainer } from "../Components/TaskContainer/taskContainer"
import { PostContext } from "../Providers/PostContext"

export const Dashboard = () => {
    const { postsList } = useContext(PostContext);
    return(
        <>
            <Header/>
            {postsList && postsList.map((currentPost) => (
                <li key={currentPost.id} >
                    <h3>{currentPost.title}</h3>
                    <p>{currentPost.content}</p>
                    <div className="postBtns">
                        <button>Excluir</button>
                        <button>Editar</button>
                    </div>
                </li>
            ))}
            <TaskContainer />
        </>
    )
}