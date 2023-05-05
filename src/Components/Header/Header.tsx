import { StyledHeaderContainer } from "./HeaderStyle";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";
import Logo_img from "../../assets/logo.svg"
import Logout_img from "../../assets/logout.svg"
 
export const Header = () => {
    const { logout } = useContext(UserContext);

    return(
        <StyledHeaderContainer>
            <div className="header_innerContainer">
                <div className="title_container">
                    <img className="logo_img" src={Logo_img} alt="WeGreen logo" />
                    <h1 className="header_title">WeGreen</h1>
                </div>
                <button className="button_logout" onClick={logout}>
                    <img className="img_logout" src={Logout_img} alt="Sair do perfil"/>
                </button>
            </div>  
        </StyledHeaderContainer>
    )
}