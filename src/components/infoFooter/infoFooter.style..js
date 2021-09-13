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

// export const Container = styled.div`
//     display: block;
//     padding: 40px 40px;
//     background-color: ${ theme.color.deepBlue }; 


//     @media(min-width: 376px){
//         display: flex;
//         padding: ${ theme.body.space }
//     }
// `




export const Header = styled.h6`
      color: #BBBCC0
`

export const Text = styled.p`
    color: #BBBCC0;
    font-size: 12px;
    line-height: 10px;
`




