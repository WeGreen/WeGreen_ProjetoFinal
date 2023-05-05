import styled from "styled-components"

export const StyledTaskContainer = styled.div`

`

export const StyledUserTask = styled.div`
    margin: 20px 0;


    h3{
        color: var(--green1);
    }

    p{
        color: var(--green2);
    }

`

export const StyledHeaderTask = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    margin-bottom: 30px;

    h2{
        color: var(--green1);
    }

    figure{
        margin: 0;
        cursor: pointer;

        img{
            height: 30px;
            width: 30px;

            color: var(--green1);
        }
    }
`
