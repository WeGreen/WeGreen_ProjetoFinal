import FormInput from "../Components/FormInput/forminput"
import { Container , Form, FormButton, FormLink, FormTitle, LogoContainer, RedirectContainer} from "./loginStyle"

export const LoginPage = () => {
    return(
        <Container>
            
            <LogoContainer>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkgXg5ykdjo66CmzbGZY0FqUw4KxtU4Pi6M942IuYaThyyY-Se5MIcAr8dyqfZeo7CjwM&usqp=CAU" alt=""/>
            </LogoContainer>
            <Form>
                <FormTitle>
                    Login
                </FormTitle>
            <FormInput legend="E-mail" placeholder="Digite seu email "/>
            <FormInput legend="Senha" placeholder="Digite sua senha "/>
            <FormButton type='submit' color='PRIMARY'>
                Login
            </FormButton>

            <RedirectContainer>
                <p> Ainda não possui conta? </p>
                <span>Clicando no botão abaixo , você pode se cadastrar rapidamente </span>
            <FormLink to='/register' type='submit' color='SECUNDARY'>
               Cadastrar
            </FormLink>
            </RedirectContainer>
             </Form>
        </Container>
    )
}