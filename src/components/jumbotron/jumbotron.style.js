import styled from "styled-components/macro";
import { theme } from "../GlobalStyle";

export const Jumbo = styled.div`
    display: grid;
    /* height: 80vh;
    width: 100vw; */
    height: 87vh;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr;
`

export const JumboA = styled.div`
    grid-area: 1 / 1 / 2 / 3;
    background-color: #F1F7FD;
    height: 100%;
`

export const JumboB = styled.div`
    height: 100%;
    grid-area: 1 / 2 / 2 / 3;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
`

export const JumboBTop = styled.div`
    height: 43.5vh ;
    grid-area: 1 / 1 / 2 / 2;
    background-color:  ${ theme.color.lightOrange };
`

export const JumboBDown = styled.div`
    height: 43.5vh ;
    grid-area: 1 / 2 / 2 / 3;
    background-color: #EDB548
;
`