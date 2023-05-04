import {SubmitHandler, useForm} from 'react-hook-form';
import FormInput from "../Components/FormInput/forminput"
import { Container, Form, FormButton, FormLink, FormTitle, LogoContainer, RedirectContainer } from "../Styles/AuthForm"
import { SignupSchema , TSignupValues } from './SignupSchema';
import {zodResolver} from "@hookform/resolvers/zod";
import logo from "../assets/logo.svg"
import { useContext } from 'react';
import { UserContext } from '../Providers/UserContext';
export const SignupPage = () => {
    
        const {register , 
            handleSubmit,
            formState:{errors},
        } = useForm<TSignupValues>({resolver: zodResolver(SignupSchema)})


        const { register: signup } = useContext(UserContext);
    
        const handleRegister: SubmitHandler<TSignupValues> =(formData)=>{

          signup(formData)
        
        }

    return(
        <Container>

            <LogoContainer>
                <img src={logo} alt=""/>
            </LogoContainer>
            
        <Form onSubmit={handleSubmit(handleRegister)}>
          <RedirectContainer type='REGISTER'>
          <FormTitle>Cadastro</FormTitle>

          <FormLink to='/login' type='submit' color='SECUNDARY' style={{maxWidth:160}}>
            Voltar ao login
          </FormLink>
            </RedirectContainer>
            <FormInput id='name' type="text" label="Nome" placeholder="Digite seu nome " 
            register={register} error={errors?.name?.message}/>

            <FormInput id='email' type="text" label="E-mail" placeholder="Digite seu email " 
            register={register} error={errors?.email?.message}/>

           <FormInput id='password' type="password" label="Senha" placeholder="Digite sua senha" 
            register={register} error={errors?.password?.message}/>

           <FormInput id='confirmPassword' type="password" label="Confirmação de senha" placeholder="Digite sua senha novamente " 
            register={register} error={errors?.confirmPassword?.message}/>

          <FormButton type='submit' color='PRIMARY'>
           Cadastrar
          </FormButton>
        </Form>
    </Container>
    )
}