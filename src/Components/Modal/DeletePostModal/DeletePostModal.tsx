import { StyledButtonPurple } from "../../../Styles/StyledButtons";
import { TPost, deletePostRequest } from "../../../Utilities/api";
import { CloseModalButton } from "../ModalFragments/CloseModalButton/CloseModalButton";
import { StyledConfirmationSpan, StyledDeteleConfirmationContainer, StyledDialog, StyledOverlay, StyledPostTitleContainer } from "../ModalStyles";


interface IDeletePostModalProps {
    isOpen: boolean;
    onClose: boolean;
    post: TPost;
}


export const DeletePostModal = ({ isOpen, onClose, post }: IDeletePostModalProps) => {

    const deletePost = async() => {
        try {
            deletePostRequest(2);
            console.log("post deletado");
            //@TODO adicionar toast de sucesso
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
                <StyledDeteleConfirmationContainer>
                    <h3>Tem certeza que deseja excluir esta postagem?</h3>
                    <StyledConfirmationSpan>Esta ação não poderá ser desfeita, então pedimos que tenha cautela antes de proceder.</StyledConfirmationSpan>
                    <StyledButtonPurple onClick={deletePost}>Confirmar</StyledButtonPurple>
                </StyledDeteleConfirmationContainer>
                
            </StyledDialog>
        </>
    )    
}