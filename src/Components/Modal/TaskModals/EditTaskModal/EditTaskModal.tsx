import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledDialog, StyledModalButtonsContainer, StyledOverlay, StyledPostTitleContainer } from "../../ModalStyles";
import { CloseModalButton } from "../../ModalFragments/CloseModalButton/CloseModalButton";
import { StyledModalForm } from "../../ModalFormStyles";
import { Input } from "../../ModalInputs/ModalInput";
import { StyledButtonGreen, StyledButtonPurple } from "../../../../Styles/StyledButtons";
import { ITasks } from "../../../../Providers/TaskProviders/typeTask";
import { EditTaskSchema, TEditTaskFormValues } from "./EditTaskSchema";
import { editTaskRequest } from "../../../../Utilities/api";

type TEditTaskModalProps = {
    isOpen: boolean;
    onClose: () => void;
    task: ITasks;
}

export const EditTasktModal = ({isOpen, onClose, task }: TEditTaskModalProps) => {
    const { register, handleSubmit, formState:{ errors } } = useForm<TEditTaskFormValues>({
        resolver: zodResolver(EditTaskSchema),
        defaultValues: {
            title: task.title,
        }
    })
    
    const onSubmit: SubmitHandler<TEditTaskFormValues> = async (formData) => {
        try {
           const response =  await editTaskRequest({
            ...formData,
            id: task.id,
            userId: task.userId
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
            <StyledDialog>
                <StyledPostTitleContainer className="modalTitle_container">
                    <h2 className="modal_title">Editar tarefa</h2>
                    <CloseModalButton onClick={onClose} />
                </StyledPostTitleContainer>
                <StyledModalForm onSubmit={handleSubmit(onSubmit)}>
                    <Input label="Título" placeholder="Escreva o título aqui" {...register("title")} type="text" error={errors?.title?.message}/>
                    <StyledModalButtonsContainer>
                        <StyledButtonPurple onClick={onClose}>Cancelar</StyledButtonPurple>
                        <StyledButtonGreen fluid={false} type="submit">Publicar</StyledButtonGreen>
                    </StyledModalButtonsContainer>
                    
                </StyledModalForm>
            </StyledDialog>
        </>
    )
}