import Icon__Add from "../../assets/Icon__Add.png"
import { StyledHeaderTask, StyledTaskContainer, StyledUserTask,} from "./taskContainerStyle";
import { TaskList } from "./TaskList/taskList";

export const TaskContainer = () => {
    return(
        <StyledTaskContainer>
            <StyledUserTask>
                <h3>Olá, Marlene</h3>
                <p>Condomínio Solar Harmonia</p>
            </StyledUserTask>

            <StyledHeaderTask>
                <h2>Tarefas</h2>
                <figure>
                    <img onClick={(event) => console.log(event)} src={Icon__Add} alt="Add task image" />
                </figure>
            </StyledHeaderTask>
            
            <TaskList />

        </StyledTaskContainer>
    )
}