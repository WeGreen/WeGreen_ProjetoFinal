import { useContext } from "react";
import Icon__Add from "../../assets/Icon__Add.png"
import { StyledHeaderTask, StyledTaskContainer, StyledUserTask,} from "./taskContainerStyle";
import { TaskList } from "./TaskList/taskList";
import { TaskContext } from "../../Providers/TaskProviders/taskContext";
import { CreateTaskModal } from "../../Components/Modal/TaskModals/CreateTaskModal/CreateTaskModal";

export const TaskContainer = () => {

    const { createTaskModalIsOpen, setCreateTaskModalIsOpen } = useContext( TaskContext )

    return(
        <StyledTaskContainer>

            <CreateTaskModal isOpen={createTaskModalIsOpen} onClose={() => setCreateTaskModalIsOpen(false)}/>

            <StyledUserTask>
                <h3>Olá, Marlene</h3>
                <p>Condomínio Solar Harmonia</p>
            </StyledUserTask>

            <StyledHeaderTask>
                <h2>Tarefas</h2>
                <figure>
                    <img onClick={() => setCreateTaskModalIsOpen(true)} src={Icon__Add} alt="Add task image" />
                </figure>
            </StyledHeaderTask>
            
            <TaskList />

        </StyledTaskContainer>
    )
}