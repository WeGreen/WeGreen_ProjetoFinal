import { useContext } from "react"
import { StyledDialog, StyledOverlay } from "./modalOfChoiceStyle"
import { TaskContext } from "../../../../Providers/TaskProviders/taskContext"
import { EditTaskModal } from "../EditTaskModal/EditTaskModal"
import { DeleteTaskModal } from "../DeleteTaskModal/DeleteTaskModal"

import { CloseModalButton } from "../../ModalFragments/CloseModalButton/CloseModalButton"

type TChoseTaskModalProps = {
    isOpen: boolean;
    onClose: () => void;
}


export const ModalOfChoice = ({ isOpen, onClose }: TChoseTaskModalProps) => {
    const { editTaskModalIsOpen, selectTask, setEditTaskModalIsOpen, deleteTaskModalIsOpen, setDeleteTaskModalIsOpen } = useContext( TaskContext )

    if(!isOpen || !selectTask) return <></>;

    return(
        <>
            <StyledOverlay></StyledOverlay>
            <EditTaskModal isOpen={editTaskModalIsOpen} onClose={() => setEditTaskModalIsOpen(false)} />
            <DeleteTaskModal isOpen={deleteTaskModalIsOpen} onClose={() => setDeleteTaskModalIsOpen(false)} />

            <StyledDialog>
                <CloseModalButton onClick={onClose} />

                <div>
                    <p onClick={() => setEditTaskModalIsOpen(true)} > Editar </p>
                    <p onClick={() => setDeleteTaskModalIsOpen(true)} > Delete </p>
                </div>
            </StyledDialog>

        </>
    )
}