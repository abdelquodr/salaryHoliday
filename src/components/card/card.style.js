import styled from "styled-components/macro";
import { theme } from "../GlobalStyle";


export const Container = styled.div`
    display: flex;
    padding: 20px;
    margin: 30px 0px;

    @media(min-width: 376px){
        display: flex;
        margin: 70px 0;
        padding: ${ theme.body.space }
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
    
    @media( min-width: 376px){
        /* display: flex;  */
       justify-content: space-between;
    }
`

export const Icon = styled.img`
    Width: 60px;
    Height: 60px;
    margin-right: 20px;
    Top: 1008px;
    Left: 125px;
    Opacity: 40%;

    @media(min-width: 376){
        display: flex
    }
` 

export const Header = styled.h6`
    margin: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 32px;

    @media(min-width){
        font-style: normal;
        font-weight: 600;
        font-size: ${ theme.font.fontSmall };
        line-height: 32px;
    }
`

export const Text = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    opacity: 0.7;

    @media(min-width: 376px){
        color: ${ theme.color.black };
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        opacity: 0.7;
    }
`
    
 
   