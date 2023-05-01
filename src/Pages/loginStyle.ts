
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";


interface ButtonProps{
    color:'PRIMARY' | 'SECUNDARY'
}

export const Container = styled.div`

display: flex;
min-height: 100vh;
padding: 16px;
justify-content: center;
align-items: center;
gap: 32px;

@media (min-width:1024px){
  max-width: 1280px;
  margin: 0 auto;
  justify-content: center;
  padding: 48px;

}
`

export const LogoContainer = styled.div`
display: none;
@media (min-width:1024px){
   padding-right: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

}
`

export const FormTitle = styled.h1`
font-size: 28px;
color: var(--green1);
`

export const Form = styled.form`
border-radius: 10px;
padding: 32px;
width: 100%;
max-width: 500px;
display: flex;
flex-direction: column;
justify-content: center;
gap: 40px;
align-items: center;
box-shadow: 0 0 5px rgba(0, 0 , 0, 0.3);

`

export const FormButton = styled.button<ButtonProps>`
width: 100%;
 border-radius: 50px;
 padding: 12px;
 display: flex;
 flex-direction: column;
 font-weight: 600;
 cursor: pointer;


 ${({color}) => css`
 color: ${color === 'PRIMARY' ? 'var(--white)' : 'var(--purple1)'};
 background-color: ${color === 'PRIMARY' ? 'var(--green1)' : 'var(--white)'};
 border: 2px solid  ${color === 'PRIMARY' ? 'var(--green1)' : 'var(--purple1)'};

 :hover{
color: ${color === 'PRIMARY' ? 'var(--white)' : 'var(--white)'};
 background-color: ${color === 'PRIMARY' ? 'var(--green2)' : 'var(--purple1)'};
 border: 2px solid  ${color === 'PRIMARY' ? 'var(--green2)' : 'var(--purple1)'};
 }
 `}
`

export const RedirectContainer = styled.div`
 width: 100%;
 text-align: center;
 padding: 32px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 24px;

 p{
    font-weight: 500;
    font-size: 18px;
    color: #212529;

 }

 span{
    font-weight: 400;
    font-size: 18px;
    color: #495057;
 }

`


export const FormLink = styled(Link)<ButtonProps>`
display: block;
text-align: center;
width: 100%;
 border-radius: 50px;
 padding: 12px;
 display: flex;
 flex-direction: column;
 font-weight: 600;
 cursor: pointer;
text-decoration: none;

 ${({color}) => css`
 color: ${color === 'PRIMARY' ? 'var(--white)' : 'var(--purple1)'};
 background-color: ${color === 'PRIMARY' ? 'var(--green1)' : 'var(--white)'};
 border: 2px solid  ${color === 'PRIMARY' ? 'var(--green1)' : 'var(--purple1)'};

 :hover{
color: ${color === 'PRIMARY' ? 'var(--white)' : 'var(--white)'};
 background-color: ${color === 'PRIMARY' ? 'var(--green2)' : 'var(--purple1)'};
 border: 2px solid  ${color === 'PRIMARY' ? 'var(--green2)' : 'var(--purple1)'};
 }
 `}
`