import styled from "styled-components/macro";
import { theme } from "../GlobalStyle";

export const Button = styled.button`
    background-color: #FF7139;
    padding: 8px 15px;
    background-color: ${({BgColor}) => BgColor ? BgColor : theme.color.orange };
    color:  ${ theme.color.white } ;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 600;
    border: 0 solid transparent;

    @media(min-width: 376px){  
        color:  ${ theme.color.white } ;
        border-radius: 8px;
        font-size: 12px;
        margin-top: 10px;
        padding: 12px 15px;
    }

    @media(min-width: 414){
        font-size: 12px;
        padding: 14px 14px;
        margin-top: 12px;
    }

    @media(min-width: 1024px){
        padding: 15px 60px;
    }
 ;

`