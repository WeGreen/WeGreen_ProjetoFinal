import { Dispatch, SetStateAction } from "react";

export interface ITasksProviderProps{
    children: React.ReactNode;
}

export interface IUser{
    email: string,
    password: string,
    title: string,
    age: number,
    id: number
}

export interface ITasks{
    userId: string,
    id: number,
    title: string,
}

export interface ITasksContext{
    allListTasks: ITasks[],
    createTaskModalIsOpen: boolean,
    setCreateTaskModalIsOpen: Dispatch<SetStateAction<boolean>>,
    editTaskModalIsOpen: boolean,
    setEditTaskModalIsOpen: Dispatch<SetStateAction<boolean>>,
    deleteTaskModalIsOpen: boolean,
    setDeleteTaskModalIsOpen: Dispatch<SetStateAction<boolean>>,
    selectTaskModalIsOpen: boolean,
    setSelectTaskModalIsOpen: Dispatch<SetStateAction<boolean>>,
    selectTask: ITasks | undefined | null, 
    setSelectTask: Dispatch<SetStateAction<ITasks | undefined | null>>, 
    currentId: string, 
    setCurrentId: Dispatch<SetStateAction<string>>, 
    loadingTask: () => void,
    task?: ITasks,
}
