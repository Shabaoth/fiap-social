import styled from "styled-components";

export const CardPost = styled.article`
    margin: 14px 14px;
    background-color: var(--bgSecondary);

    header {
        padding: 18px;

        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--textPrimary);
        div {
         p{
                font-size: 18px;
                font-weight: bold;
            }

         span {
                font-size: 14px;
            }
        }
    }
    main{
        color: var(--textPrimary);
        div {
            padding: 0px 18px;
            h1 {
                font-size: 22px;
                font-weight: bold;
            }

            p {
                padding-left: 20px;
                margin-top: 10px;
                border-left: 3px solid var(--primary);
            }
        }

        img {
            margin-top: 18px;
            width: 100%;
            height: auto;
        }

        footer {
            display: flex;
            padding: 18px;
            gap: 5px;

            p {
                background-color: var(--bgPrimary);
                padding: 4px 8px;
            }
        }
    }
    footer{        
        padding: 0px 18px 18px 18px;

        h3{
            font-size: 18px;
            margin-bottom: 6px;
            color: var(--textPrimary);
            

        }

        div{
            display: flex;
        }
    }
`