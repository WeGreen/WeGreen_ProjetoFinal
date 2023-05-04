import { StyledTask } from "./taskStyled";
import NoCheck from "../../../../assets/Icon__NoCheck.png"
import Check from "../../../../assets/Icon__Check.png"
import { useContext, useState } from "react";
import { ITasks } from "../../../../Providers/TaskProviders/typeTask";
import { TaskContext } from "../../../../Providers/TaskProviders/taskContext";

import { ModalOfChoice } from "../../../Modal/TaskModals/ModalOfChoice/modalOfChoice";

export interface ITasksProviderProps{
    task: ITasks;
    selectTask: ITasks;
}

export const Task = ( { task,  selectTask }: ITasksProviderProps ) => {
    const {selectTaskModalIsOpen, setSelectTaskModalIsOpen, setCurrentId } = useContext( TaskContext )
    const [ checkValue, setCheckValue] = useState(false)

    const colorCheck = "done";
    const colorNoCheck = "notDone";
    
    const image = checkValue ? Check : NoCheck
    const color = checkValue ? colorCheck : colorNoCheck

    const execution = ( id: number ) => {
        setSelectTaskModalIsOpen(true)
        setCurrentId( id )
    }

    return(

        <>
            <ModalOfChoice isOpen={selectTaskModalIsOpen} onClose={() => setSelectTaskModalIsOpen(false)} task={task} selectTask={selectTask} />
        
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