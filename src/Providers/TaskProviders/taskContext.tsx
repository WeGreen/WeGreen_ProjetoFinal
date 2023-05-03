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
    const userToken = localStorage.getItem( "@wegreen:token" )
    //const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvYW9AbWFpbC5jb20iLCJpYXQiOjE2ODMxMjU5NzEsImV4cCI6MTY4MzEyOTU3MSwic3ViIjoiNSJ9._yBk3gj0i8Rsykq_1whxfv2dsn9u57PzPC4-c88_P8g"


    useEffect(() => {
      async function loadingTask(){
        try {
          const { data } = await api.get<IUser[]>( '/tasks', {
          headers:{
            Authorization:`Bearer ${userToken}`
          } } );
  
          setAllListTasks(data);
        } catch (error) {
          console.log(error);
        }
      }
      loadingTask()
    },[createTaskModalIsOpen]);

    return(
        <TaskContext.Provider value={{ allListTasks, createTaskModalIsOpen, setCreateTaskModalIsOpen, editTaskModalIsOpen, setEditTaskModalIsOpen, 
                                      deleteTaskModalIsOpen, setDeleteTaskModalIsOpen, selectTaskModalIsOpen, setSelectTaskModalIsOpen, selectTask, setSelectTask }}>
          { children }
        </TaskContext.Provider>
      )
    }