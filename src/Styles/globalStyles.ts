import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --green1: #45710F;
        --green2: #61844AE5;
        --purple1: #9449AE;
        --purple2: #AF98B6;
        --black: #202120;
        --grey1: #90948F;
        --grey2: #F5F5F5;
        --white: #FFFFFF;
    }

    button {
        outline: none;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    h1 {
        font-weight: 700;
        font-size: 2.25rem;
        color: var(--black);
    }

    h2 {
        font-weight: 400;
        font-size: 2.25rem;
        color: var(--black);
    }

    
    p, span {
        font-family: Poppins;
        font-size: 1rem;
        font-weight: 400;
        color: var(--black);
    }






  

`