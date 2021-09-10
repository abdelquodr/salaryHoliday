import styled from "styled-components/macro";
import { theme } from "../GlobalStyle";

export const Button = styled.button`
    background-color: #FF7139;
    padding: 8px 15px;
    background-color: ${({BgColor}) => BgColor ? BgColor : theme.color.range };
    color:  ${ theme.color.white } ;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 600;
    border: 0 solid transparent;

    @media(min-width: 376px){
        padding: ${({space}) => space ? space : '0px 20px'};    
        color:  ${ theme.color.white } ;
        border-radius: 8px;
        font-size: ${ theme.font.fontXtraSmall };
    }
 ;

`