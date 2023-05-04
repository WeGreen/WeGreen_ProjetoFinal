import { toast } from "react-toastify";
import { ITasks } from "../../../../Providers/TaskProviders/typeTask";
import { StyledButtonPurple } from "../../../../Styles/StyledButtons";
import { deleteTaskRequest } from "../../../../Utilities/api";
import { CloseModalButton } from "../../ModalFragments/CloseModalButton/CloseModalButton";
import { StyledConfirmationSpan, StyledDeleteConfirmationContainer, StyledDialog, StyledOverlay,StyledPostTitleContainer } from "../../ModalStyles";
import { useContext } from "react";
import { TaskContext } from "../../../../Providers/TaskProviders/taskContext";

interface TDeleteTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    setDeleteTaskIsOpen: (value: React.SetStateAction<boolean>) => void;
    selectTask: ITasks;
}

export const DeleteTaskModal = ({ isOpen, onClose, selectTask }: TDeleteTaskModalProps) => {

    const { setSelectTaskModalIsOpen, loadingTask } = useContext( TaskContext )

    const closeModal = () => {
        onClose();
        setSelectTaskModalIsOpen(false);
        loadingTask();
    }

    const deleteTask = async() => {
        try {
            deleteTaskRequest(selectTask.id);
            toast.success("Tarefa excluída com sucesso");
            closeModal();
        } catch (error) {
            toast.error("Falha ao ecluir a tarefa");
        }
    }

    if(!isOpen) return <></>;
    return(
        <>
            <StyledOverlay></StyledOverlay>
            <StyledDialog>
                <StyledPostTitleContainer>
                    <p className="confirmation_title">Confirmação de exclusão</p>
                    <CloseModalButton onClick={onClose}/>
                </StyledPostTitleContainer>
                <StyledDeleteConfirmationContainer>
                    <h3 className="confirmation_question">Tem certeza que deseja excluir esta tarefa?</h3>
                    <StyledConfirmationSpan>Esta ação não poderá ser desfeita, então pedimos que tenha cautela antes de proceder.</StyledConfirmationSpan>
                    <StyledButtonPurple onClick={deleteTask}>Deletar</StyledButtonPurple>
                </StyledDeleteConfirmationContainer>
                
            </StyledDialog>
        </>
    )    
}