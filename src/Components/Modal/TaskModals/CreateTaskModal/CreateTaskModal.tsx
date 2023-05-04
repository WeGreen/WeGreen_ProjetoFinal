import { SubmitHandler, useForm } from "react-hook-form";
import { StyledButtonGreen, StyledButtonPurple } from "../../../../Styles/StyledButtons"
import { CloseModalButton } from "../../ModalFragments/CloseModalButton/CloseModalButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledDialog, StyledModalButtonsContainer, StyledOverlay, StyledPostTitleContainer } from "../../ModalStyles";
import { StyledModalForm} from "../../ModalFormStyles";
import { Input } from "../../ModalInputs/ModalInput";
import { CreateTaskSchema, TCreateTaskFormValues } from "./CreateTaskSchema";
import { createTaskRequest } from "../../../../Utilities/api";
import { useContext } from "react";
import { UserContext } from "../../../../Providers/UserContext";
import { toast } from "react-toastify";
import { TaskContext } from "../../../../Providers/TaskProviders/taskContext";

type TCreateTaskModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

export const CreateTaskModal = ({isOpen, onClose }: TCreateTaskModalProps) => {
    const { user } = useContext(UserContext);
    const { loadingTask } = useContext(TaskContext);
    const userId = user?.id; 

    const { register, handleSubmit, formState:{errors}, reset} = useForm<TCreateTaskFormValues>({
        resolver: zodResolver(CreateTaskSchema),
    })

    const onSubmit: SubmitHandler<TCreateTaskFormValues> = async (formData) => {
        try {
           await createTaskRequest(formData, userId);
           onClose();
           reset();
           loadingTask();
           toast.success("Tarefa criada com sucesso.");
        } catch (error) {
            toast.error("Falha ao criar tarefa");
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