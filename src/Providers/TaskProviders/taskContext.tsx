import { createContext, useEffect, useState } from "react";
import { api } from "../../Utilities/api";
import { ITasks, ITasksContext, ITasksProviderProps, IUser } from "./typeTask";

export const TaskContext = createContext( {} as ITasksContext)

export const TaskProviders = ( { children }: ITasksProviderProps ) => {

    const [ allListTasks, setAllListTasks ] = useState<ITasks[]>([]);
    const [ createTaskModalIsOpen, setCreateTaskModalIsOpen ] = useState(false);
    const [ editTaskModalIsOpen, setEditTaskModalIsOpen ] = useState(false);
    const [ deleteTaskModalIsOpen, setDeleteTaskModalIsOpen ] = useState(false);
    const [ selectTaskModalIsOpen, setSelectTaskModalIsOpen ] = useState(false);
    const [ selectTask, setSelectTask ] = useState<ITasks[]>([]);
    const [ currentId, setCurrentId ] = useState("");
    
    const userToken = localStorage.getItem( "@wegreen:token" )
    
    async function loadingTask(){
      try {
        const { data } = await api.get<ITasks[]>( '/tasks', {
        headers:{
          Authorization:`Bearer ${userToken}`
        } } );
        setAllListTasks(data);
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      if(userToken){
        loadingTask()
      }
    },[]);

    return(
        <TaskContext.Provider value={{ allListTasks, createTaskModalIsOpen, setCreateTaskModalIsOpen, editTaskModalIsOpen, setEditTaskModalIsOpen, 
                                      deleteTaskModalIsOpen, setDeleteTaskModalIsOpen, selectTaskModalIsOpen, setSelectTaskModalIsOpen, selectTask, setSelectTask,
                                      currentId, setCurrentId, loadingTask }}>
          { children }
        </TaskContext.Provider>
      )
    }