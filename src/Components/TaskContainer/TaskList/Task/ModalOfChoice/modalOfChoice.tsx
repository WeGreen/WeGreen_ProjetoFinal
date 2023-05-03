import { useContext } from "react"
import { StyledCloseModalButton, StyledDialog, StyledOverlay } from "./modalOfChoiceStyle"
import { TaskContext } from "../../../../../Providers/TaskProviders/taskContext"
import { EditTaskModal } from "../../../../Modal/TaskModals/EditTaskModal/EditTaskModal"
import { DeleteTaskModal } from "../../../../Modal/TaskModals/DeleteTaskModal/DeleteTaskModal"

type TChoseTaskModalProps = {
    isOpen: boolean;
    onClose: () => void;
    task: ITasks;
}


export const ModalOfChose = ({isOpen, onClose, task }: TChoseTaskModalProps) => {
    const { editTaskModalIsOpen, setEditTaskModalIsOpen, deleteTaskModalIsOpen, setDeleteTaskModalIsOpen } = useContext( TaskContext )


    if(!isOpen) return <></>;

    return(
        <>
            <StyledOverlay></StyledOverlay>
            <EditTaskModal isOpen={editTaskModalIsOpen} onClose={() => setEditTaskModalIsOpen(false)} task={task} />
            <DeleteTaskModal isOpen={deleteTaskModalIsOpen} onClose={() => setDeleteTaskModalIsOpen(false)} task={task} />

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