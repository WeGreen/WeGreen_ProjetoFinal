import { zodResolver } from "@hookform/resolvers/zod";
import { EditPostSchema, TEditPostFormValues } from "./EditPostSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { TPost, editPostRequest } from "../../../Utilities/api";
import { StyledCreatePostDialog, StyledModalButtonsContainer, StyledOverlay, StyledPostTitleContainer } from "../ModalStyles";
import { CloseModalButton } from "../ModalFragments/CloseModalButton/CloseModalButton";
import { StyledModalForm } from "../ModalFormStyles";
import { Input } from "../ModalInputs/ModalInput";
import { Textarea } from "../ModalInputs/ModalTextArea";
import { StyledButtonGreen, StyledButtonPurple } from "../../../Styles/StyledButtons";

type TEditPostModalProps = {
    isOpen: boolean;
    onClose: () => void;
    post: TPost
}

export const EditPostModal = ({isOpen, onClose, post }: TEditPostModalProps) => {
    const { register, handleSubmit, formState:{ errors } } = useForm<TEditPostFormValues>({
        resolver: zodResolver(EditPostSchema),
        defaultValues: {
            title: post.title,
            content: post.content
        }
    })
    
    const onSubmit: SubmitHandler<TEditPostFormValues> = async (formData) => {
        try {
           const response =  await editPostRequest({
            ...formData,
            id: post.id,
            userId: post.userId
        });
           console.log('sucesso', response)
           onClose()
        } catch (error) {
            console.log('erro', errors)
        }
    }

    if(!isOpen) return <></>;
    
    return(
        <>
            <StyledOverlay></StyledOverlay>
            <StyledCreatePostDialog>
                <StyledPostTitleContainer className="modalTitle_container">
                    <h2 className="modal_title">Editar Post</h2>
                    <CloseModalButton onClick={onClose} />
                </StyledPostTitleContainer>
                <StyledModalForm onSubmit={handleSubmit(onSubmit)}>
                    <Input label="Título" placeholder="Escreva o título aqui" {...register("title")} type="text" error={errors?.title?.message}/>
                    <Textarea label="Texto" id="createPost_content" placeholder="Escreva seu texto aqui" {...register("content")} rows={10} error={errors?.content?.message}/>
                    <StyledModalButtonsContainer>
                        <StyledButtonPurple>Cancelar</StyledButtonPurple>
                        <StyledButtonGreen fluid={false} type="submit">Publicar</StyledButtonGreen>
                    </StyledModalButtonsContainer>
                    
                </StyledModalForm>
            </StyledCreatePostDialog>
        </>
    )
}