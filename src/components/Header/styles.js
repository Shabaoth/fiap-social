import styled from "styled-components";
import { FaSignOutAlt } from "react-icons/fa"

export const Container = styled.header`
    height: 80px;
    background-color: var(--bgSecondary);
    padding: 0px 14px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;
    width: 100vw;

    box-shadow: 0px 5px 10px #ED145B55;

    div{
        display: flex;
        align-items: center;
        gap: 5px;

        p{
            font-weight: bold;
        }
    }

`
export const IconSignOut = styled (FaSignOutAlt)`
    font-size: 35px;
    color: var(--primary);

    transition: .2s;

    :active{
        transform: scale(0.9) rotate(180deg);
    }
`