import { forwardRef } from "react";
import { StyledInputContainer, StyledModalTextarea} from "../ModalFormStyles";

interface ITextareaProps extends React.HTMLAttributes<HTMLTextAreaElement>{
    name?: string;
    label?: string;
    error?: string | undefined;
    rows?: number;
  }  

export const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(({ error, name, label, ...rest }, ref) => {
    return(
        <StyledInputContainer>
            <label htmlFor={name}>{label}</label>
            <StyledModalTextarea name={name} ref={ref} {...rest} />
            {!!error && <p>{error}</p>}
        </StyledInputContainer>
    )
})
