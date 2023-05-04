import { toast } from "react-toastify";
import { StyledButtonPurple } from "../../../Styles/StyledButtons";
import { TPost, deletePostRequest } from "../../../Utilities/api";
import { CloseModalButton } from "../ModalFragments/CloseModalButton/CloseModalButton";
import { StyledConfirmationSpan, StyledDeleteConfirmationContainer, StyledDialog, StyledOverlay, StyledPostTitleContainer } from "../ModalStyles";


interface IDeletePostModalProps {
    isOpen: boolean;
    onClose: () => void;
    post: TPost;
}


export const DeletePostModal = ({ isOpen, onClose, post }: IDeletePostModalProps) => {

    const deletePost = async() => {
        try {
            deletePostRequest(post.id);
            toast.success("Postagem deletada com sucesso!")
            onClose();
        } catch (error) {
            toast.error("Falha ao deletar postagem.")
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
                    <h3 className="confirmation_question">Tem certeza que deseja excluir esta postagem?</h3>
                    <StyledConfirmationSpan>Esta ação não poderá ser desfeita, então pedimos que tenha cautela antes de proceder.</StyledConfirmationSpan>
                    <StyledButtonPurple onClick={deletePost}>Deletar</StyledButtonPurple>
                </StyledDeleteConfirmationContainer>
                
            </StyledDialog>
        </>
    )    
}