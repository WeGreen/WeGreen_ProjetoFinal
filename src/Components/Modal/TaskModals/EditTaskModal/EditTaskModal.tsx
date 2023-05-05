import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledDialog, StyledModalButtonsContainer, StyledOverlay, StyledPostTitleContainer } from "../../ModalStyles";
import { CloseModalButton } from "../../ModalFragments/CloseModalButton/CloseModalButton";
import { StyledModalForm } from "../../ModalFormStyles";
import { Input } from "../../ModalInputs/ModalInput";
import { StyledButtonGreen, StyledButtonPurple } from "../../../../Styles/StyledButtons";
import { EditTaskSchema, TEditTaskFormValues } from "./EditTaskSchema";
import { editTaskRequest } from "../../../../Utilities/api";
import { useContext, useEffect } from "react";
import { TaskContext } from "../../../../Providers/TaskProviders/taskContext";
import { toast } from "react-toastify";

type TEditTaskModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

interface IEditTask extends TEditTaskFormValues { 
    id: number | string,
    userId: number | string,
}

export const EditTaskModal = ({isOpen, onClose }: TEditTaskModalProps) => {
    const { setSelectTaskModalIsOpen, loadingTask, selectTask } = useContext( TaskContext )

    const { register, handleSubmit, formState:{ errors }, reset } = useForm<IEditTask>({
        resolver: zodResolver(EditTaskSchema),
    })

    const closeModal = () => {
        onClose();
        loadingTask();
        setSelectTaskModalIsOpen(false);
    }

    useEffect(() => {
        if(selectTask) reset(selectTask)
    }, [selectTask, reset])
    
    const onSubmit: SubmitHandler<IEditTask> = async (formData) => {
        if (!selectTask) return null

        try {
           await editTaskRequest({
            ...formData,
            id: selectTask.id,
            userId: selectTask.userId,
        });
           closeModal()
           reset()
           toast.success("Tarefa editada com sucesso.");
        } catch (error) {
            toast.error("Falha ao editar a tarefa.");
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