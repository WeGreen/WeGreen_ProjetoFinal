import { SubmitHandler, useForm } from "react-hook-form";
import { StyledButtonGreen, StyledButtonPurple } from "../../../../Styles/StyledButtons"
import { CloseModalButton } from "../../ModalFragments/CloseModalButton/CloseModalButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledDialog, StyledModalButtonsContainer, StyledOverlay, StyledPostTitleContainer } from "../../ModalStyles";
import { StyledModalForm} from "../../ModalFormStyles";
import { Input } from "../../ModalInputs/ModalInput";
import { CreateTaskSchema, TCreateTaskFormValues } from "./CreateTaskSchema";
import { createTaskRequest } from "../../../../Utilities/api";

type TCreateTaskModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

type tUserId = number
//@TODO pegar tipagem do provider


export const CreateTaskModal = ({isOpen, onClose }: TCreateTaskModalProps) => {

    const userId: tUserId = 6 // @TODO Pegar do provider

    const { register, handleSubmit, formState:{errors}} = useForm<TCreateTaskFormValues>({
        resolver: zodResolver(CreateTaskSchema),
    })

    const onSubmit: SubmitHandler<TCreateTaskFormValues> = async (formData) => {
        try {
           const response =  await createTaskRequest({...formData, userId });
           console.log("tarefa criada", response)
           onClose()
        } catch (error) {
            console.log("erro",errors)
        }
    }

    if(!isOpen) return <></>;
    
    return(
        <>
            <StyledOverlay></StyledOverlay>
            <StyledDialog>
                <StyledPostTitleContainer className="modalTitle_container">
                    <h2 className="modal_title">Nova tarefa</h2>
                    <CloseModalButton onClick={onClose} />
                </StyledPostTitleContainer>

                <StyledModalForm onSubmit={handleSubmit(onSubmit)}>
                    <Input label="Tarefa" placeholder="Digite a tarefa aqui." {...register("title")} type="text" error={errors?.title?.message} />

                    <StyledModalButtonsContainer>
                        <StyledButtonPurple onClick={onClose}>Cancelar</StyledButtonPurple>
                        <StyledButtonGreen fluid={false} type="submit">Publicar</StyledButtonGreen>
                    </StyledModalButtonsContainer>
                    
                </StyledModalForm>
            </StyledDialog>
        </>
    )
}