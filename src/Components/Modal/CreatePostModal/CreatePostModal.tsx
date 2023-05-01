import { SubmitHandler, useForm } from "react-hook-form";
import { StyledButtonGreen, StyledButtonPurple } from "../../../Styles/StyledButtons"
import { CloseModalButton } from "../ModalFragments/CloseModalButton/CloseModalButton";
import { createPostRequest } from "../../../Utilities/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreatePostSchema, TCreatePostFormValues } from "./CreatePostSchema";
import { ModalButtonsContainer, StyledCreatePostDialog, StyledModalButtonsContainer, StyledOverlay, StyledPostTitleContainer } from "../ModalStyles";
import { StyledInputContainer, StyledModalForm, StyledModalInput, StyledModalTextarea } from "../ModalFormStyles";

type CreatePostModalProps = {
    isOpen: boolean;
    onClose: () => void;
}
export const CreatePostModal = ({isOpen, onClose }: CreatePostModalProps) => {
    const userId = 4 // @TODO Pegar do provider

    const { register, handleSubmit, formState:{errors}} = useForm<TCreatePostFormValues>({
        resolver: zodResolver(CreatePostSchema),
    })

    const onSubmit: SubmitHandler<TCreatePostFormValues> = async (formData) => {
        try {
           const response =  await createPostRequest({...formData, userId });
           console.log(response)
           onClose()
        } catch (error) {
            console.log(errors)
        }
    }

    if(!isOpen) return <></>;
    
    return(
        <>
            <StyledOverlay></StyledOverlay>
            <StyledCreatePostDialog>
                <StyledPostTitleContainer className="modalTitle_container">
                    <h2 className="modal_title">Novo Post</h2>
                    <CloseModalButton onClick={onClose} />
                </StyledPostTitleContainer>
                <StyledModalForm onSubmit={handleSubmit(onSubmit)}>
                    <StyledInputContainer>
                        <label htmlFor="createPost_title">Título</label>
                        <StyledModalInput type="text" id="createPost_title" placeholder="Escreva o título aqui" {...register("title")}/>
                    </StyledInputContainer>
                    <StyledInputContainer>
                        <label htmlFor="createPost_content">Texto</label>
                        <StyledModalTextarea  id="createPost_content" placeholder="Escreva seu texto aqui" {...register("content")} rows="10"/>
                    </StyledInputContainer>
                    <StyledModalButtonsContainer>
                        <StyledButtonPurple>Cancelar</StyledButtonPurple>
                        <StyledButtonGreen type="submit">Publicar</StyledButtonGreen>
                    </StyledModalButtonsContainer>
                    
                </StyledModalForm>
            </StyledCreatePostDialog>
        </>
    )
}