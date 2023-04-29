import styled from "styled-components";

export const StyledButtonGreen = styled.button`
    
    color: var(--white);
    font-size: 1rem;
    font-weight: 600;
    background-color: var(--green1);
    height: 24px;
    line-height: 24px;
    padding: 0 20px;
    border-radius: 8px;
    border: 2px solid var(--green1);

    &:hover{
        background-color: var(--green2);
        border: 2px solid var(--green2);
    }
`
export const StyledButtonPurple = styled.button`
    color: var(--purple1);
    font-size: 1rem;
    font-weight: 600;
    background-color: var(--white);
    height: 24px;
    line-height: 24px;
    padding: 0 20px;
    border-radius: 8px;
    border: 2px solid var(--purple1);

    &:hover{
        background-color: var(--purple1);
        color: var(--white);
    }
`