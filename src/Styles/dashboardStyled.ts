import styled from "styled-components";

export const StyledDashboard = styled.div`
        width: 80%;
        margin: 0 auto; 
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
        gap: 30px; 



    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
    }
`