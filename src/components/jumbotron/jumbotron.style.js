import styled from "styled-components/macro";
import { theme } from "../GlobalStyle";

export const Jumbo = styled.div`
    display: grid;
<<<<<<< HEAD
    height: 68vh;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr;
=======
    height: 30rem;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr;
    font-family: Public
>>>>>>> quodr/responsiveness

    @media(min-width: 376px){
        height: 87vh;
    }
<<<<<<< HEAD
=======

    @media(min-width: 414px){
        height: 30rem;
    }

    @media(min-width: 1024px){
        height: 34rem;
        position: relative;
    }
>>>>>>> quodr/responsiveness
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
<<<<<<< HEAD
=======

    @media(min-width: 414px){
        height: 30rem;
        box-sizing: border-box
    } 

    @media(min-width: 768px){
        padding: 40px ;
    }

    @media(min-width: 1024px){
        height: 34rem;
        padding: 60px;
    }
>>>>>>> quodr/responsiveness
`

export const JumboB = styled.div`
    height: 100%;
    grid-area: 1 / 2 / 2 / 3;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    box-sizing: border-box;
`

export const JumboBTop = styled.div`
<<<<<<< HEAD
    height: 50% ;
    grid-area: 1 / 1 / 2 / 2;
    background-color:  ${ theme.color.lightOrange };
    padding: 4.5rem 0;
    box-sizing: border-box;
    text-align: center;

    @media(min-width: 376px){
        height:43.5vh 
=======
    height: 15rem ;
    grid-area: 1 / 1 / 2 / 2;
    background-color:  ${ theme.color.lightOrange };
    padding: 6.5rem 0;
    box-sizing: border-box;
    text-align: center;
    vertical-align: middle

    @media(min-width: 414px){
        height: 15rem;
        padding: 6.5rem 0;
    }

    @media(min-width: 1024px){
        height: 17rem
>>>>>>> quodr/responsiveness
    }
`

export const JumboBDown = styled.div`
<<<<<<< HEAD
    height: 50% ;
    grid-area: 1 / 2 / 2 / 3;
    background-color: #EDB548;
    padding: 4.5rem 0;
    box-sizing: border-box;
    text-align: center;

    @media(min-width: 376px){
        height:43.5vh 
=======
    height: 15rem ;
    grid-area: 1 / 2 / 2 / 3;
    background-color: #EDB548;
    padding: 6.5rem 0;
    box-sizing: border-box;
    text-align: center;

    @media(min-width: 414px){
        height:15rem;
        padding: 6.5rem 0;
    }

    @media(min-width: 1024px){
        height: 17rem
>>>>>>> quodr/responsiveness
    }
;
`