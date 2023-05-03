import { useNavigate } from "react-router-dom"
import { StyledHeaderContainer } from "./HeaderStyle";
import { UserContext } from "../../Providers/UserContext";
import { useContext } from "react";

export const Header = () => {

    const navigate = useNavigate();

    const {logout} = useContext (UserContext)

    return(
        <StyledHeaderContainer>
            <div className="header_innerContainer">
                <div className="title_container">
                    <img className="logo_img" src="src/assets/logo.svg" alt="WeGreen logo" />
                    <h1 className="header_title">WeGreen</h1>
                </div>
                <button className="button_logout" onClick={logout}>
                    <img className="img_logout" src="src/assets/logout.svg" alt="Sair do perfil"/>
                </button>
            </div>  
        </StyledHeaderContainer>
    )
}