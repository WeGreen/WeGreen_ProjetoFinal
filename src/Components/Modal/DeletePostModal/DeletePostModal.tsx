import { StyledButtonPurple } from "../../../Styles/StyledButtons";
import { TPost, deletePostRequest } from "../../../Utilities/api";
import { CloseModalButton } from "../ModalFragments/CloseModalButton/CloseModalButton";
import { StyledConfirmationSpan, StyledDeleteConfirmationContainer, StyledDialog, StyledOverlay, StyledPostTitleContainer } from "../ModalStyles";


interface IDeletePostModalProps {
    isOpen: boolean;
    onClose: boolean;
    setDeleteModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    post: TPost;
}


export const DeletePostModal = ({ isOpen, onClose, setDeleteModalIsOpen, post }: IDeletePostModalProps) => {

    const deletePost = async() => {
        try {
            deletePostRequest(2);
            console.log("post deletado");
            //@TODO adicionar toast de sucesso
            setDeleteModalIsOpen(false);
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
                    <h3 className="confirmation_question">Tem certeza que deseja excluir esta postagem?</h3>
                    <StyledConfirmationSpan>Esta ação não poderá ser desfeita, então pedimos que tenha cautela antes de proceder.</StyledConfirmationSpan>
                    <StyledButtonPurple onClick={deletePost}>Deletar</StyledButtonPurple>
                </StyledDeleteConfirmationContainer>
                
            </StyledDialog>
        </>
    )    
}