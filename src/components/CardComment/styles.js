import styled from "styled-components";

export const Card = styled.article`
    background-color: var(--bgPrimary);
    margin-bottom: 10px;
    padding: 0px;

    header{
        display: flex;
        align-items: center;
        gap: 5px;        
        padding: 0;

        img{
            width: 32.81px;
            height: 30px;
        }

        div{
            flex-wrap: wrap;
            flex-direction: column;
            p{
                font-family: Montserrat;
                font-weight: bold;
                margin-top: 0px;
                border: none;
                padding-left: 5px;
            }
            span{
                font-size: 12px;
                padding-left: 5px;
            }
        }
    }
    p{
            margin-top: 14px;
            border-left: 3px solid var(--primary);
            padding-left: 10px;
            font-family: Montserrat;
            color: var(--textPrimary);
    }
    
`