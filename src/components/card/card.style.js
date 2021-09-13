import styled from "styled-components/macro";
import { theme } from "../GlobalStyle";


export const Container = styled.div`
    display: flex;
    padding: 5px;
    margin: 30px 0px;

    @media(min-width: 376px){
        display: flex;
        margin: 40px 0;   
    }

    @media(min-width: 414){
        display: flex;
        margin: 40px 0;
        padding: 0 20px;
    }

    @media(min-width: 1024px){
        justify-content: center;
    }
`


export const Card = styled.div`
    display: block;
    margin: 0 10px;
    margin-top: 0px;
    margin-right: 10px;
    margin-bottom: 0px;
    margin-left: 10px;
    text-align: center;
    
    @media( min-width: 414px){
        /* display: flex;  */
       justify-content: space-between;
    }

    @media(min-width: 1024px){
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        padding: 30px;
    }
`

export const Icon = styled.img`
    Width: 60px;
    Height: 60px;
    margin-right: 20px;
    Top: 1008px;
    Left: 125px;
    Opacity: 40%;
    margin: auto;

    @media(min-width: 414){
        display: flex
    }
` 

export const Header = styled.h6`
    margin: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    font-family: Public sans;
    padding-top: 12px;

    @media(min-width: 376px){
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
    }

    @media(min-width){
        argin: 0;
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        font-family: Public sans;
        padding-top: 12px;
    }

    @media(min-width: 1024px){
        font-size: 15px;
    }
`

export const Text = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 12px;
    opacity: 0.7;

    @media(min-width: 376px){
        color: ${ theme.color.black };
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 20px;
        opacity: 0.7;
    }

    @media(min-width: 414){
        font-size: 12px
    }
`
    
 
   