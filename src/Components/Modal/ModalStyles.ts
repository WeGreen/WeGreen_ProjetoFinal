import styled from "styled-components";

export const StyledOverlay = styled.div`
    inset: 0;
    background: rgba(18, 18, 20, 0.5);
    position: absolute;
`

export const StyledDialog = styled.div`
    width: 70%;
    max-width: 800px;
    padding: 20px 30px;
    background-color: var(--white);
    /* gap: 20px; */
    border-radius: 10px;
    position: absolute;
    margin: 0 auto;
    top: 200px;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    flex-direction: column;

    @media (max-width: 420px){
        width: 90%;
    }
`

export const StyledCloseModalButton = styled.button`
    background-color: var(--grey2);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    width: 38px;
    height: 38px;
    border-radius: 4px;

    &:hover {
        border: 2px solid var(--purple1);
    }

    img.closeButton_img {
        width: 38px;
        height: 38px;
    }

`

export const StyledPostTitleContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    p.confirmation_title{
        margin-left: 15px;
        font-weight: 300;
    }
`

export const StyledDeteleConfirmationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top: 25px;
`

export const StyledConfirmationSpan = styled.span`
    font-weight: 300;
    font-size: 0.875rem;
    color: var(--grey1);
    margin-bottom: 10px;
`

export const StyledModalButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
    gap: 15px;

    @media (max-width: 420px){
        justify-content: space-between;
        gap: 5px;
    }
    /* @TODO está quebrando na menor tela: faixa branca em baixo */
`
