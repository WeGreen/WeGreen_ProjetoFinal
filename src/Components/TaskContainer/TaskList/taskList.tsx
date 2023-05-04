import { useContext } from "react";
import { Task } from "./Task/task";
import { StyledTaskList } from "./taskListStyled";
import { TaskContext } from "../../../Providers/TaskProviders/taskContext";

export const TaskList = () => {

    const { allListTasks, currentId, setSelectTask } = useContext(TaskContext)
    const conversion = Number(currentId)
    
    setSelectTask(allListTasks.find((task) => task.id == conversion ))

    return(
        <StyledTaskList>
            {allListTasks.map((task) => (<Task key={task.id} task={task} />))}
        </StyledTaskList>
    );
};