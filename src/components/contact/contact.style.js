import styled from "styled-components/macro";
import { theme } from "../GlobalStyle";


export const ContactContainer = styled.div`
    display: grid;
    grid-template-columns: 48%, 26% 26%;
    grid-template-rows: 55vh ;
    background-color: ${theme.color.blue};
    grid-gap: 3em
`

export const HeaderContainer = styled.div`
    grid-area: 1 / 1 / 2 / 2;
`

export const EmailContainer = styled.div`
    grid-area: 1 / 2 / 2 / 3;
`

export const SocialContainer = styled.div`
    grid-area: 1 / 3 / 2 / 4;
`

export const Header = styled.h4`
    color: ${ theme.color.white };
    font-family: Public Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
`

export const ContactHeader = styled.h5`
    font-family: Public Sans;
    color:  ${ theme.color.white };
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
`

export const Text = styled.p`
    font-weight: normal;
    font-size: 20px;
    color: ${ theme.color.white };
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
`   


export const ContactText = styled.p`
    color: ${ ({color}) => color ? color : `rgba(239, 237, 237, 0.68` };
    font-size: ${ theme.font.fontXtraSmall };
    font-family: Inter;
    font-style: normal;
    font-weight: ${({weight}) => weight ? weight : 'normal'};
`