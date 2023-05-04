import styled from "styled-components"

export const StyledOverlay = styled.div`
    inset: 0;
    background: rgba(18, 18, 20, 0.1);
    position: absolute;
    z-index: 0;
`

export const StyledDialog = styled.div`
    width: 70%;
    max-width: 200px;
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