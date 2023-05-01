import { InputHTMLAttributes, forwardRef } from "react";
import { StyledInputContainer, StyledModalInput} from "../ModalFormStyles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    label?: string;
    error?: string | undefined;
  }  

export const Input = forwardRef<HTMLInputElement, IInputProps>(({ error, name, label, ...rest }, ref) => {
    return(
        <StyledInputContainer>
            <label htmlFor={name}>{label}</label>
            <StyledModalInput name={name} ref={ref} {...rest} />
            {!!error && <p>{error}</p>}
        </StyledInputContainer>
    )
})
