import styled from "styled-components/macro";
import { theme } from "../GlobalStyle";

export const Button = styled.button`
    background-color: ${({BgColor}) => BgColor ? BgColor : theme.color.orange };
    padding: ${({space}) => space ? space : '0px 20px'};    
    color:  ${ theme.color.white } ;
    border-radius: 8px;
    font-size: ${ theme.font.fontXtraSmall };
    font-weight: 600;
    border: 0 solid transparent;

`