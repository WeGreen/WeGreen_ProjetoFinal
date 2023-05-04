import { SubmitHandler, useForm } from "react-hook-form";
import { StyledButtonGreen, StyledButtonPurple } from "../../../Styles/StyledButtons"
import { CloseModalButton } from "../ModalFragments/CloseModalButton/CloseModalButton";
import { createPostRequest } from "../../../Utilities/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreatePostSchema, TCreatePostFormValues } from "./CreatePostSchema";
import { StyledDialog, StyledModalButtonsContainer, StyledOverlay, StyledPostTitleContainer } from "../ModalStyles";
import { StyledModalForm} from "../ModalFormStyles";
import { Input } from "../ModalInputs/ModalInput";
import { Textarea } from "../ModalInputs/ModalTextArea";
import { UserContext } from "../../../Providers/UserContext";
import { useContext } from "react";
import { toast } from "react-toastify";

type TCreatePostModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

export const CreatePostModal = ({isOpen, onClose }: TCreatePostModalProps) => {
    const { user } = useContext(UserContext)

    const { register, handleSubmit, formState:{errors}, reset} = useForm<TCreatePostFormValues>({
        resolver: zodResolver(CreatePostSchema),
    })

    const onSubmit: SubmitHandler<TCreatePostFormValues> = async (formData) => {
        try {
           const response =  await createPostRequest(formData, user?.id);
           console.log(response)
           onClose()
           reset()
        } catch (error) {
            toast.error("Falha ao criar a Postagem")
        }
    }

    if(!isOpen) return <></>;
    
    return(
        <>
            <StyledOverlay></StyledOverlay>
            <StyledDialog>
                <StyledPostTitleContainer className="modalTitle_container">
                    <h2 className="modal_title">Novo Post</h2>
                    <CloseModalButton onClick={onClose} />
                </StyledPostTitleContainer>

                <StyledModalForm onSubmit={handleSubmit(onSubmit)}>
                    <Input label="Título" placeholder="Escreva o título aqui" {...register("title")} type="text" error={errors?.title?.message} /> 
                    <Textarea label="Texto" id="createPost_content" placeholder="Escreva seu texto aqui" {...register("content")} rows={10} error={errors?.content?.message}/>

                    <StyledModalButtonsContainer>
                        <StyledButtonPurple onClick={onClose}>Cancelar</StyledButtonPurple>
                        <StyledButtonGreen fluid={false} type="submit">Publicar</StyledButtonGreen>
                    </StyledModalButtonsContainer>
                    
                </StyledModalForm>
            </StyledDialog>
        </>
    )
}