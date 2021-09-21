import styled from "styled-components/macro";
import { theme } from "../GlobalStyle";


export const Container = styled.div`
    display: block;
    padding: 0 40px;    

    @media(min-width: 415px){
        display: grid;
        grid-template-columns: 50% 50px 50%;
        grid-template-rows: 1fr;
        padding: ${ theme.body.space }
    }

    @media(min-width: 600px){
        display: grid;
        grid-template-columns: 50% 5px 50%;
        grid-template-rows: 1fr;
        padding: 0px 25px 
    }

    @media(min-width: 1024px){
        padding: 60px;
        grid-template-columns: 1fr 100px 1fr;
        height: auto;
    }
` 

export const Section = styled.div`
    grid-area: 1 / 1 / 2 / 2 ;
    margin: auto;    
`

export const SectionB = styled.div`
    grid-area: 1 / 3 / 2 / 4;
    margin: auto
`

export const Header = styled.h2`
    font-style: normal;
    font-weight: bold;
    line-height: 29px;
    font-size: 21px;
    margin: 40px 0 20px 0;

    @media(min-width: 376px){
        font-style: normal;
        font-weight: bold;
        font-size: 29px;
        line-height: 40px;
    }

    @media(min-width: 1024px){
        font-size:48px;
        line-height: 58px; 
        margin: 0px 0 20px 0;

    }
  ;   
`

export const Text = styled.p`
    margin: 0;
    color: ${ ({color}) => color ? color : theme.color.black };
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 18px;
    opacity: 0.7;

    @media(min-width: 1024px){
        font-size: 13px
    }
    
`

export const TinyCard = styled.div`
    display: flex;
    width: 240px;
    padding: 12px;
    margin: 15px 0;
    background: rgba(255, 190, 131, 0.1);
    border-radius: 7.8453px;
`


export const TinyCardImg = styled.img `
    height: 15px;
    width: 15px;
    padding-right: 15px;
`