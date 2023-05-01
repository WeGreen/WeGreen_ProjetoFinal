import styled, { css } from 'styled-components';

interface IStyledTaskProps {
  $buttonStyle: "done" | "notDone";
}

export const StyledTaskCSS = css<IStyledTaskProps>`
    width: 300px;
    height: 40px;

    list-style: none;

    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    .check__figure{

        width: 50px;
        height: 40px;

        border-radius: 10px 0 0 10px;

        display: flex;
        justify-content: center;
        align-items: center;

    }

    .check__title{
        font-size: 16px;
        font-weight: 600;

    }

    .check__edit{
        font-size: 20px;
        font-weight: 600;

    }

  ${({ $buttonStyle }) => {
    switch ($buttonStyle) {
      case "done":
        return css`
            .check__figure{
                background-color: #AF98B6;
            }
            .check__title{
                color: #AF98B6;
            }
            .check__edit{
                color: #AF98B6;
            }
          
        `;
      case "notDone":
        return css`
            .check__figure{
                background-color: var(--green1);
            }
            .check__title{
                color: var(--green1);
            }
            .check__edit{
                color: var(--green1);
            }
        `;
    }
  }}
`;

export const StyledTask = styled.li<IStyledTaskProps>`

    ${StyledTaskCSS}

`