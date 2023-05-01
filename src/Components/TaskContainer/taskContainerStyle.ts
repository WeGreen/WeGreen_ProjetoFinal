import styled from "styled-components"

export const StyledTaskContainer = styled.div`
height: 100vw;
width: 400px;

`

export const StyledUserTask = styled.div`

    padding: 0 50px;

    h3{
        color: var(--green1);
    }

    p{
        color: #A0A3A0;
    }

`

export const StyledHeaderTask = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 40px 0 50px;
    

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
