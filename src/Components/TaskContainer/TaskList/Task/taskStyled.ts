import styled, { css } from 'styled-components';

interface IStyledTaskProps {
  $buttonStyle: "done" | "notDone";
}

export const StyledTaskCSS = css<IStyledTaskProps>`
    width: 95%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    .setButton__color{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }

    figure{
        height: 25px;
    }

    img{
        height: 25px;
        width: 25px;
    }

    .check__figure{

        min-width: 50px;
        height: 70px;

        border-radius: 10px 0 0 10px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .check__title{
        font-size: 1rem;
        font-weight: 600;

        width: 180px;
        max-height: 70px;
    }

    .check__edit{
        font-size: 2rem;
        font-weight: 600;

        cursor: pointer;

    }

  ${({ $buttonStyle }) => {
    switch ($buttonStyle) {
      case "done":
        return css`
            .check__figure{
                background-color: var(--purple2);
            }
            .check__title{
                color: var(--purple2);
            }
            .check__edit{
                color: var(--purple2);
            }

            img{
                height: 25px;
                width: 25px;
                background-color: var(--white);
                border: 1px solid var(--purple2);
                border-radius: 50%
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

@media (min-width: 700px){
    .setButton__color{
        width: 400px;
    }

    .check__title{
        width: 400px;
    }
}

@media (min-width: 1020px){
    .setButton__color{
        width: 280px;
    }

    .check__title{
        width: 280px;
    }
}
`

export const StyledTask = styled.li<IStyledTaskProps>`

    ${StyledTaskCSS}

`