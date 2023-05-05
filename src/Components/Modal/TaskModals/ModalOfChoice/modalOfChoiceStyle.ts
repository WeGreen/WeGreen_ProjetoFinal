import styled from "styled-components"

export const StyledOverlay = styled.div`
    inset: 0;
    background: rgba(18, 18, 20, 0.1);
    position: absolute;
    z-index: 0;
`

export const StyledDialog = styled.div`
    width: 70%;
    max-width: 160px;
    padding: 20px 30px;
    background-color: var(--white);
    border-radius: 10px;
    position: absolute;
    margin: 0 auto;
    top: 200px;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    flex-direction: column;

    p{
        cursor: pointer;

        height: 40px;
        width: 100px;

        border: 1px solid var(--green1);
        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: center;

        margin: 10px 0;
        color: var(--green1);

        :hover{
            color: var(--white);
            border: 1px solid var(--green2);
            background-color: var(--green2);
        }
    }

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
    margin-left: 120px;
    font-size: 1rem;

    &:hover {
        border: 2px solid var(--purple1);
    }

    img.closeButton_img {
        width: 38px;
        height: 38px;
    }

`