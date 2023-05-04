import { useContext } from "react";
import { Task } from "./Task/task";
import { StyledTaskList } from "./taskListStyled";
import { TaskContext } from "../../../Providers/TaskProviders/taskContext";

export const TaskList = () => {

    const { allListTasks, currentId } = useContext(TaskContext)
    const conversion = Number(currentId)
    
    const selectTask = allListTasks.find((task) => task.id == conversion )

    return(
        <StyledTaskList>
            {allListTasks.map((task) => (<Task key={task.id} task={task} selectTask={selectTask} />))}
        </StyledTaskList>
    );
};