import { createContext, useEffect, useState } from "react";
import { api } from "../../Utilities/api";
import { ITasks, ITasksContext, ITasksProviderProps, IUser } from "./typeTask";

export const TaskContext = createContext( {} as ITasksContext)

export const TaskProviders = ( { children }: ITasksProviderProps ) => {
    const [ allListTasks, setAllListTasks ] = useState<ITasks[]>([]);
    const userToken = localStorage.getItem( "@wegreen:token" )

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
      if(userToken){
        loadingTask()
      }
    },[]);

    return(
        <TaskContext.Provider value={{ allListTasks }}>
          { children }
        </TaskContext.Provider>
      )
    }