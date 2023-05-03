import {SubmitHandler, useForm} from 'react-hook-form';
import FormInput from "../Components/FormInput/forminput"
import { Container , Form, FormButton, FormLink, FormTitle, LogoContainer, RedirectContainer} from "../Styles/AuthForm"
import { LoginSchema, TLoginValues } from './LoginSchema';
import {zodResolver} from "@hookform/resolvers/zod";
import logo from "../assets/logo.svg"
import { useContext } from 'react';
import { UserContext } from '../Providers/UserContext';


export const LoginPage = () => {
    const {register , 
        handleSubmit,
        formState: {errors},
    } = useForm<TLoginValues>({resolver: zodResolver(LoginSchema)})


    const {login , loading } = useContext(UserContext);

    const handleLogin: SubmitHandler<TLoginValues> =(formData) =>{
        login(formData);
    };
    return(
        <Container>
            
            <LogoContainer>
                <img src={logo} alt=""/>
            </LogoContainer>
            <Form onSubmit={handleSubmit(handleLogin)}>
                <FormTitle>
                    Login
                </FormTitle>
            <FormInput id='email' type="text" label="E-mail" placeholder="Digite seu email " 
            register={register} error={errors?.email?.message}/>

            <FormInput id='password' type="password" label="Senha" placeholder="Digite sua senha" 
            register={register} error={errors?.password?.message}/>
           
            <FormButton type='submit' color='PRIMARY'>
                {loading ? 'Carregando...' : 'Login'}
            </FormButton>

            <RedirectContainer type='LOGIN'>
                <p> Ainda não possui conta? </p>
                <span>Clicando no botão abaixo , você pode se cadastrar rapidamente </span>
            <FormLink to='/signup' type='submit' color='SECUNDARY'>
               Cadastrar
            </FormLink>
            </RedirectContainer>
             </Form>
        </Container>
    )
}