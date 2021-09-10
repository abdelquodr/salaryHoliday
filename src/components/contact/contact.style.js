import styled from "styled-components/macro";
import { theme } from "../GlobalStyle";


export const ContactContainer = styled.div`
    font-family: Public Sans;
    display: block;
    padding: 40px 40px;
    background-color: ${theme.color.blue};

    @media(min-width: 376px){
        display: grid;
        font-family: Public Sans;
        grid-template-columns: 48%, 26% 26%;
        grid-template-rows: 55vh ;
        grid-gap: 3em
    }
`

export const HeaderContainer = styled.div`
    grid-area: 1 / 1 / 2 / 2;
`

export const EmailContainer = styled.div`
    margin: 20px 0;

    grid-area: 1 / 2 / 2 / 3;
`

export const SocialContainer = styled.div`
    grid-area: 1 / 3 / 2 / 4;
`

export const Header = styled.h4`
    color: #fff;
    font-family: Public Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    margin: 10px 0;

    @media(min-width: 376px){
        color: ${ theme.color.white };
        font-family: Public Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
    }
`

export const ContactHeader = styled.h5`

    font-family: Public Sans;
    color:  ${ theme.color.white };
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;
    margin: 0;

    @media(min-width: 376px){
        font-size: 24px;
    }
`

export const Text = styled.p`
    font-size: 14px;
    line-height: 20px;
    margin: 0;
    font-weight: normal;    
    color: ${ theme.color.white };
    font-family: Inter;
    font-style: normal;
    font-weight: normal;

    @media(min-width: 376){
        font-size: 20px;
    }
`   


export const ContactText = styled.p`
    color: #EFEDED;
    font-size: small;
    font-family: Inter;
    font-style: normal;
    font-weight: ${({weight}) => weight ? weight : 'normal'};;
    line-height:20px;
    color: ${ ({color}) => color ? color : `rgba(239, 237, 237, 0.68` };
    margin-bottom: 5px;


    @media(min-width: 376){
        color: ${ ({color}) => color ? color : `rgba(239, 237, 237, 0.68` };
        font-size: ${ theme.font.fontXtraSmall };
    }
`
