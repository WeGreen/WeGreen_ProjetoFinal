import { StyledCloseModalButton } from "../../ModalStyles"
import Close_img from "../../../../assets/close_button.svg"

export const CloseModalButton = (props: React.HTMLAttributes<HTMLButtonElement>) => {
    return(
        <StyledCloseModalButton {...props}><img className="closeButton_img" src={Close_img} alt="Fechar" /></StyledCloseModalButton>
    )
}