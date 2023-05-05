import { Header } from "../Components/Header/Header"
import { TaskContainer } from "../Components/TaskContainer/taskContainer"
import { PostsList } from "../Components/PostsList/PostsList";
import { StyledDashboard } from "../Styles/dashboardStyled";


    
export const Dashboard = () => {
   
    return(
        <>
            <Header/>
            <StyledDashboard>
                <TaskContainer />
                <hr />
                <PostsList />
            </StyledDashboard>
        </>
    )
}