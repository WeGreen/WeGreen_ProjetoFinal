import styled from "styled-components";

export const StyledPostContainer = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px 0;
    gap: 20px;
`
export const StyledPostList = styled.div`
    border: 1px solid var(--grey1);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 30px;

    h2{
        font-size: 28px;
        font-weight: 600;
    }

    p{
        font-size: 18px;
        font-weight: 400;
    }
`