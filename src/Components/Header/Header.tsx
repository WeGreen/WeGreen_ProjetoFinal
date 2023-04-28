import { useNavigate } from "react-router-dom"


export const Header = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("@wegreen:userId");
        localStorage.removeItem("@wegreen:token");
        // setUser(null);
        navigate("/login");
    }

    return(
        <header>
            <h1>WeGreen</h1>
            <button onClick={logout}><img src="src/assets/logout.svg" alt="Sair do perfil"/></button>
        </header>
    )
}