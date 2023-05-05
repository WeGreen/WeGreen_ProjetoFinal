import { StyledTask } from "./taskStyled";
import NoCheck from "../../../../assets/NoCheck.svg"
import Check from "../../../../assets/Check.svg"
import { useContext, useState } from "react";
import { ITasks } from "../../../../Providers/TaskProviders/typeTask";
import { TaskContext } from "../../../../Providers/TaskProviders/taskContext";

import { ModalOfChoice } from "../../../Modal/TaskModals/ModalOfChoice/modalOfChoice";

export interface ITasksProviderProps{
    task: ITasks;
}

export const Task = ( { task }: ITasksProviderProps ) => {
    const {selectTaskModalIsOpen, setSelectTaskModalIsOpen, setCurrentId } = useContext( TaskContext )
    const [ checkValue, setCheckValue] = useState(false)

    const colorCheck = "done";
    const colorNoCheck = "notDone";
    
    const image = checkValue ? Check : NoCheck
    const color = checkValue ? colorCheck : colorNoCheck

    const execution = ( id: number ) => {
        const conversion = id.toString()

        setSelectTaskModalIsOpen(true)
        setCurrentId( conversion ) 
    }

    return(

        <>
            <ModalOfChoice isOpen={selectTaskModalIsOpen} onClose={() => setSelectTaskModalIsOpen(false)} />
        
            <StyledTask $buttonStyle={color} >


                <div className="setButton__color" onClick={() => setCheckValue(!checkValue)}>

                    <div className="check__figure">
                        <figure>
                            <img src={image} alt="" />
                        </figure>
                    </div>

                    <div className="check__title">
                        <h3>{task.title}</h3>
                    </div>

                </div>

                <div className="check__edit" onClick={() =>  execution( task.id ) }>
                    <p> ... </p>
                </div>

            </StyledTask>
        </>
     )
}