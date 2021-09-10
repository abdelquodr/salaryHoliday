import styled from "styled-components/macro";
import { theme } from "../GlobalStyle";

export const Jumbo = styled.div`
    display: grid;
    height: 68vh;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr;

    @media(min-width: 376px){
        height: 87vh;
    }
`

export const JumboA = styled.div`
    box-sizing: border-box;
    padding: 40px 20px;
    width: 50%;
    grid-area: 1 / 1 / 2 / 3;
    background-color: #F1F7FD;
    height: 100%;

    @media(min-width: 376px){
        grid-area: 1 / 1 / 2 / 3;
        background-color: #F1F7FD;
        height: 100%;
    }   
`

export const JumboB = styled.div`
    height: 100%;
    grid-area: 1 / 2 / 2 / 3;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    box-sizing: border-box;
`

export const JumboBTop = styled.div`
    height: 50% ;
    grid-area: 1 / 1 / 2 / 2;
    background-color:  ${ theme.color.lightOrange };
    padding: 4.5rem 0;
    box-sizing: border-box;
    text-align: center;

    @media(min-width: 376px){
        height:43.5vh 
    }
`

export const JumboBDown = styled.div`
    height: 50% ;
    grid-area: 1 / 2 / 2 / 3;
    background-color: #EDB548;
    padding: 4.5rem 0;
    box-sizing: border-box;
    text-align: center;

    @media(min-width: 376px){
        height:43.5vh 
    }
;
`