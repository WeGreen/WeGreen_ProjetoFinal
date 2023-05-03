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
    id: number
    title: string,
}

export interface ITasksContext{
    allListTasks: ITasks[],
    createTaskModalIsOpen: boolean,
    setCreateTaskModalIsOpen: boolean,
}