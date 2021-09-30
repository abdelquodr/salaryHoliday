import styled from "styled-components/macro";
import { theme } from "../GlobalStyle";

export const Container = styled.div` 
    background: #fff;
    display: flex;
    display: block ruby;
    margin: 10px 20px 0px 20px;
    justify-content: space-between; 
    backround-color: #fff;

    @media (min-width: 376px){
        padding: 20px 50px;
        background: #fff;
        display: flex; 
        padding: 15px 30px;
        justify-content: space-around;
    }

    @media (min-width: 414px){
        display: flex;
        margin: 10px 10px 0px 10px;
        padding: 5px 15px 3px 10px;
    }

    @media(min-width: 768px){
        margin: 0px;
        padding: 15px 0px 0px 35px;
    }
        
`;

export const ListItem = styled.ul`
    padding: 0;
    

    @media (min-width: 376px){
        // display: none;
        flex-direction: column;
        list-style: none; 
    }

    @media (max-width: 414px){
        
    }

    @media(min-width: 678px){
       flex-direction: row
    }

    @media(min-width: 1024px){
        display: flex;
        gap: 20px;
        flex-direction: row;
        position: inherit;
        border: 0;
        box-shadow: transparent;
        // padding-top: 8px;
    }
 
`;

export const Item = styled.li`
    font-family:  ${({ font }) => font };
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 17px;
    display: flex;
    margin: 0;
    // padding: 8px 20px;
    cursor: pointer;
    color: ${ theme.color.black };

    @media(min-width: 1024px){

    }
`

export const NavbarIcon = styled.div`
    width: 15px;
    height: 15px;
    background-color: #E48952;
    margin: auto;
    text-align: center;
    color: #fff;
    font-size: 12px;
    font-weight: bold;


    @media (min-width: 376px){
        display: block
    }

    @media(min-width: 678px){
        display: block
    }

    @media(min-width:1024px){
        display: none
    }
`

export const Logo = styled.img`
    width: 129px;
    height: 36px;
    letter-spacing: 10px; 
    
    @media(min-width:600px){
        display: block;
        margin-right: 10rem;
    }

    @media(min-width: 768px){
        display: block;
        margin-right: 20rem;
    }

    @media(min-width: 1024px){
        margin-right: 0rem
    }
`
