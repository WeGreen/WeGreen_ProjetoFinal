import styled from "styled-components";

export const StyledHeaderContainer = styled.header`
    height: 100px;
    width: 100%;
    background-color: var(--green1);
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.15);

    div.header_innerContainer{
        height: 100%;
        width: 80%;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div.title_container{

            display: flex;
            align-items: center;

            h1.header_title{
            color: var(--white);
            font-weight: 500;
            }
            .logo_img{
                height: 0px;
                width: 0px;
                margin-right: 20px;
            }
        }

        @media (min-width:425px){
            div.title_container{
                .logo_img{
                    height: 70px;
                    width: 70px;
                }
            }
        }
       
        button.button_logout{
            background-color: transparent;
            display: flex;
            align-items: center;
            padding: 0;
            border: none;
            width: 38px;
            height: 38px;
        }

        img.img_logout{
            width: 30px;
            height: 30px;
        }

    }

`

