import styled from "styled-components/macro";
import { theme } from "../GlobalStyle";


export const Container = styled.div`
    display: block;
    padding: 0 40px;    

    @media(min-width: 376px){
        display: grid;
        grid-template-columns: 50% 50px 50%;
        grid-template-rows: 1fr;
        height: 600px;
        padding: ${ theme.body.space }
    }
` 

export const Section = styled.div`
    grid-area: 1 / 1 / 2 / 2 ;
`

export const SectionB = styled.div`
    grid-area: 1 / 3 / 2 / 4;
`

export const Header = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 23px;
    line-height: 33px;

    @media(min-width: 376px){
        font-style: normal;
        font-weight: bold;
        font-size: ${ theme.font.fontLarge };
        line-height: 58px
    }
  ;   
`

export const Text = styled.p`
    margin: 0;
    color: ${ ({color}) => color ? color : theme.color.black };
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    opacity: 0.7;
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