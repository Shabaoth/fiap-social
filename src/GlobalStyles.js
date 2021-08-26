import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

    :root{
        --primary: #ED145B;
        --bgPrimary: #08090B;
        --bgSecondary: #1B1E22;
        --textPrimary: #91A3AD;
        --textSecondary: #616d72;
        --textButton: #ffffff;
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;

        box-sizing: border-box;
    }

    body{
        font-family: sans-serif;
        background-color: var(--bgPrimary);
    }

    input{
        width: 100%;
        height: 30px;
        padding: 5px;
        border: 2px solid var(--primary);
    }

    button{
        color: var(--textButton);
        font-weight: bold;
        padding: 5px;
        background-color: var(--primary);
        border: none;

        transition: transform 0.2s;

        :active{
            transform: scale(0.9);
        }
    }
    p{
        color: var(--textPrimary);
    }
`;