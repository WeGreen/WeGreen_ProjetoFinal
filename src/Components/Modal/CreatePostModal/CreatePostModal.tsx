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

type TCreatePostModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

type tUserId = number


export const CreatePostModal = ({isOpen, onClose }: TCreatePostModalProps) => {
    const userId: tUserId = localStorage.getItem('@TOKEN') //Continua errado, mozão

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
            <StyledDialog>
                <StyledPostTitleContainer className="modalTitle_container">
                    <h2 className="modal_title">Novo Post</h2>
                    <CloseModalButton onClick={onClose} />
                </StyledPostTitleContainer>

                <StyledModalForm onSubmit={handleSubmit(onSubmit)}>
                    <Input label="Título" placeholder="Escreva o título aqui" {...register("title")} type="text" error={errors?.title?.message} />
                    <Textarea label="Texto" id="createPost_content" placeholder="Escreva seu texto aqui" {...register("content")} rows="10" error={errors?.content?.message}/>

                    <StyledModalButtonsContainer>
                        <StyledButtonPurple onClick={onClose}>Cancelar</StyledButtonPurple>
                        <StyledButtonGreen fluid={false} type="submit">Publicar</StyledButtonGreen>
                    </StyledModalButtonsContainer>
                    
                </StyledModalForm>
            </StyledDialog>
        </>
    )
}