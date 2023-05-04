import { SetStateAction, useContext } from "react"
import { StyledCloseModalButton, StyledDialog, StyledOverlay } from "./modalOfChoiceStyle"
import { TaskContext } from "../../../../Providers/TaskProviders/taskContext"
import { EditTaskModal } from "../EditTaskModal/EditTaskModal"
import { DeleteTaskModal } from "../DeleteTaskModal/DeleteTaskModal"
import { ITasks } from "../../../../Providers/TaskProviders/typeTask"

type TChoseTaskModalProps = {
    isOpen: boolean;
    onClose: () => void;
    task: ITasks;
    selectTask: ITasks;
}


export const ModalOfChoice = ({isOpen, onClose, selectTask }: TChoseTaskModalProps) => {
    const { editTaskModalIsOpen, setEditTaskModalIsOpen, deleteTaskModalIsOpen, setDeleteTaskModalIsOpen } = useContext( TaskContext )

    if(!isOpen) return <></>;

    return(
        <>
            <StyledOverlay></StyledOverlay>
            <EditTaskModal isOpen={editTaskModalIsOpen} onClose={() => setEditTaskModalIsOpen(false)} selectTask={selectTask}  />
            <DeleteTaskModal isOpen={deleteTaskModalIsOpen} onClose={() => setDeleteTaskModalIsOpen(false)} selectTask={selectTask} setDeleteTaskIsOpen={function (value: SetStateAction<boolean>): void {
                throw new Error("Function not implemented.")
            } }  />

            <StyledDialog>
                <StyledCloseModalButton onClick={onClose} />

                <div>
                    <p onClick={() => setEditTaskModalIsOpen(true)} > Editar </p>
                    <p onClick={() => setDeleteTaskModalIsOpen(true)} > Delete </p>
                </div>
            </StyledDialog>

        </>
    )
}