import { createContext, useEffect, useState } from "react";
import { api } from "../../Utilities/api";
import { ITasks, ITasksContext, ITasksProviderProps, IUser } from "./typeTask";

export const TaskContext = createContext( {} as ITasksContext)

export const TaskProviders = ( { children }: ITasksProviderProps ) => {
    const [ allListTasks, setAllListTasks ] = useState<ITasks[]>([]);
    const [ createTaskModalIsOpen, setCreateTaskModalIsOpen ] = useState(false);
/*     const userToken = localStorage.getItem( "@wegreen:usertoken" ) */
    const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvYW9AbWFpbC5jb20iLCJpYXQiOjE2ODMwNjYwNzAsImV4cCI6MTY4MzA2OTY3MCwic3ViIjoiNSJ9.t2VZbT0ajSSXy3lmZb9_PFYNzwU3c_m4Ox6cLwrfINA"


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
        <TaskContext.Provider value={{ allListTasks, createTaskModalIsOpen, setCreateTaskModalIsOpen }}>
          { children }
        </TaskContext.Provider>
      )
    }