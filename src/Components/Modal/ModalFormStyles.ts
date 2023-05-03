import styled from "styled-components";

export const StyledModalForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
`

export const StyledModalInput = styled.input`
    background: #FFFCFC;
    border: 1px solid #45710F;
    border-radius: 4px;
    height: 40px;
    


    &::placeholder {
        font-size: 1rem;
        color: var(--grey1);
        line-height: 40px;
    }
    &:focus{
        outline: 2px solid #45710F;
    }
`

export const StyledModalTextarea = styled.textarea`
    background: #FFFCFC;
    border: 1px solid #45710F;
    border-radius: 4px;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    color: var(--grey1);
    line-height: 150%;
    padding: 5px 5px;

    &::placeholder {
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
        color: var(--grey1);
        line-height: 150%;
    }
    &:focus{
        outline: 2px solid #45710F;
    }
`