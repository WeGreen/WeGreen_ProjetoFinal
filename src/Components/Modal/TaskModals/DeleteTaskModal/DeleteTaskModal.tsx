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
    setDeleteTaskisOpen: (value: React.SetStateAction<boolean>) => void;
    task: ITasks
}

export const DeleteTaskModal = ({ isOpen, onClose, task }: TDeleteTaskModalProps) => {

    const { setSelectTaskModalIsOpen } = useContext( TaskContext )

    const closeModal = () => {
        onClose();
        setSelectTaskModalIsOpen(false)
    }

    const deleteTask = async() => {
        try {
            deleteTaskRequest(task.id);
            console.log("post deletado");
            toast("Post deletado com sucesso.")
            closeModal();
        } catch (error) {
            console.log("erro", error)
            //@TODO adicionar toast de erro
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