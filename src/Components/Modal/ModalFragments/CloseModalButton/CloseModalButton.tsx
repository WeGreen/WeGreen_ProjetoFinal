import { StyledCloseModalButton } from "../../ModalStyles"

export const CloseModalButton = (props: React.HTMLAttributes<HTMLButtonElement>) => {
    return(
        <StyledCloseModalButton {...props}><img className="closeButton_img" src="src/assets/close_button.svg" alt="Fechar" /></StyledCloseModalButton>
    )
}