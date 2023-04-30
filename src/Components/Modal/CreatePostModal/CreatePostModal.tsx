import { SubmitHandler, useForm } from "react-hook-form";
import { StyledButtonGreen, StyledButtonPurple } from "../../../Styles/StyledButtons"
import { CloseModalButton } from "../ModalFragments/CloseModalButton/CloseModalButton";
import { createPostRequest } from "../../../Utilities/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreatePostSchema, TCreatePostFormValues } from "./CreatePostSchema";

// props:
// onCreate: fn
export const CreatePostModal = () => {
    const userId = 4 // @TODO Pegar do provider
    
    // const closeModal = () => {
    //     setCreateModalIsOpen(false);
    //     //clear fields
    // }//@TODO pegar setCreateModalIsOpen do contexto


    const { register, handleSubmit, formState:{errors}} = useForm<TCreatePostFormValues>({
        resolver: zodResolver(CreatePostSchema),
    })

    const onSubmit: SubmitHandler<TCreatePostFormValues> = async (formData) => {
        try {
           const response =  await createPostRequest({...formData, userId });
           console.log(response)
        } catch (error) {
            console.log(errors)
        }
    }
    
    return(
        <div role="dialog">
            <h2 className="modal_title">Novo Post</h2>
            <CloseModalButton/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input_container">
                    <label htmlFor="createPost_title">Título</label>
                    <input type="text" id="createPost_title" placeholder="Escreva o título aqui" {...register("title")}/>
                </div>
                <div className="input_container">
                    <label htmlFor="createPost_content">Título</label>
                    <textarea id="createPost_content" placeholder="Escreva seu texto aqui" {...register("content")}/>
                </div>
                <StyledButtonPurple>Cancelar</StyledButtonPurple>
                <StyledButtonGreen type="submit">Publicar</StyledButtonGreen>
            </form>
        </div>
    )
}