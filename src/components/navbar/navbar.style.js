import styled from "styled-components/macro";
import { theme } from "../GlobalStyle";

export const Container = styled.div` 
    background: #fff;
    display: -webkit-box;
    margin: 10px 20px -5px 20px;

    @media (min-width: 376px){
        padding: '20px 50px';
        background: #fff;
        display: flex; 
        padding: 15px 30px;
        justify-content: space-around;
    }
`;

export const ListItem = styled.ul`
    /* flex-direction: row; */
    display: none;
    list-style: none;

    @media (min-width: 376px){
        display: flex;
        flex-direction: column;
        list-style: none; 
    }

    @media (max-width: 1920px){
        flex-direction: row;
    }
 
`;

export const Item = styled.li`
    font-family:  ${({ font }) => font };
    font-style: normal;
    font-weight: 500;
    padding: 0 20px;
    font-size: 14px;
    line-height: 17px;
    color: ${ theme.color.black };
`

export const NavbarIcon = styled.div`
    width: 15px;
    height: 15px;
    background-color: ${ theme.color.lightOrange };

    @media (min-width: 376px){
        display: none
    }
`

export const Logo = styled.img`
    width: 129px;
    height: 36px;
    letter-spacing: 10px;   
`