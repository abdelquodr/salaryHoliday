import styled from "styled-components/macro";
import { theme } from "../GlobalStyle";


export const ContactContainer = styled.div`
    font-family: Public Sans;
    display: block;
    padding: 40px 40px;
    background-color: ${theme.color.blue};

    @media(min-width: 415px){
        display: grid;
        font-family: Public Sans;
        grid-template-columns: 48%, 26% 26%;
        grid-template-rows: 55vh ;
        grid-gap: 3em
    }

    @media(min-width: 600px){
        grid-template-rows: 30vh;
        padding: 40px 26px;
        grid-gap: 2.3em;
  
    }

    @media(min-width: 768px){
        grid-template-rows: 20vh;
    }


    @media(min-width: 1024px){
        display: flex;
        padding: 60px 80PX; 
        grid-template-rows: 25vh;
    }

    @media(min-width: 1200px){
        grid-template-rows: 30vh;
    }
`

export const HeaderContainer = styled.div`
    grid-area: 1 / 1 / 2 / 2;

    @media(min-width: 1024px){
     flex: 1 1 0px;
     margin: auto
    }
`

export const EmailContainer = styled.div`
    margin: 20px 0;
    grid-area: 1 / 2 / 2 / 3;

    @media(min-width: 600px){
        margin: 0;
    }

    @media(min-width: 1024px){
        flex: 1 1 0px;
        margin: auto
       }
`

export const SocialContainer = styled.div`
    grid-area: 1 / 3 / 2 / 4;

    @media(min-width: 1024px){
        flex: 1 1 0px;
        margin: auto
    }
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
        font-size: 28px;
    }

    @media(min-width: 600px){
        margin: 0;
        font-size: 24px;
        padding-bottom: 20px;
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
        font-size: 16px;
        
    }
`

export const Text = styled.p`
    font-size: 12px;
    line-height: 20px;
    margin: 0;
    font-weight: normal;    
    color: ${ theme.color.white };
    font-style: normal;
    font-weight: normal;

    @media(min-width: 376){
        font-size: 13px;
    }
`   


export const ContactText = styled.p`
    color: #EFEDED;
    font-size: small;
    font-style: normal;
    font-weight: ${({weight}) => weight ? weight : 'normal'};;
    line-height:20px;
    color: ${ ({color}) => color ? color : `rgba(239, 237, 237, 0.68` };
    margin-bottom: 5px;


    @media(min-width: 376){
        color: ${ ({color}) => color ? color : `rgba(239, 237, 237, 0.68` };
        font-size: 12px;
    }

    @media(min-width: 600px){
        font-size: 13px;
        color: white;
    }
`
