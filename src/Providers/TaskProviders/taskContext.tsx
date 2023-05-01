import { createContext, useEffect, useState } from "react";
import { api } from "../../Services/api";
import { ITasks, ITasksContext, ITasksProviderProps, IUser } from "./typeTask";

export const TaskContext = createContext( {} as ITasksContext)

export const TaskProviders = ( { children }: ITasksProviderProps ) => {
    const [ allListTasks, setAllListTasks ] = useState<ITasks[]>([]);
    const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAbWFpbC5jb20iLCJpYXQiOjE2ODI3Mjc4MDksImV4cCI6MTY4MjczMTQwOSwic3ViIjoiMiJ9.QD0LlJozf0hHoKVDkKqmnfi9yCJQms5vzWhsIUT8Ok4"

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
    },[]);

    return(
        <TaskContext.Provider value={{ allListTasks }}>
          { children }
        </TaskContext.Provider>
      )
    }