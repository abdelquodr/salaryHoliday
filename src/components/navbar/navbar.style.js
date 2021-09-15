import styled from "styled-components/macro";
import { theme } from "../GlobalStyle";

export const Container = styled.div` 
    background: #fff;
<<<<<<< HEAD
    display: -webkit-box;
    margin: 10px 20px -5px 20px;

    @media (min-width: 376px){
        padding: '20px 50px';
=======
    display: flex;
    display: block ruby;
    margin: 10px 20px 0px 20px;
    justify-content: space-between; 

    @media (min-width: 376px){
        padding: 20px 50px;
>>>>>>> quodr/responsiveness
        background: #fff;
        display: flex; 
        padding: 15px 30px;
        justify-content: space-around;
    }
<<<<<<< HEAD
`;

export const ListItem = styled.ul`
    /* flex-direction: row; */
    display: none;
    list-style: none;

    @media (min-width: 376px){
        display: flex;
=======

    @media (min-width: 414px){
        display: flex;
        margin: 10px 10px 0px 10px;
        padding: 5px 15px 3px 10px;
    }

    @media(min-width: 768px){
        margin: 10px 10px 0px 10px;
        padding: 5px 0px 0px 5px;
    }
`;

export const ListItem = styled.ul`
    flex-direction: row;
    display: none;
    list-style: none;
    padding: 0 15px;

    @media (min-width: 376px){
        display: none;
>>>>>>> quodr/responsiveness
        flex-direction: column;
        list-style: none; 
    }

<<<<<<< HEAD
    @media (max-width: 1920px){
=======
    @media (max-width: 414px){
        
    }

    @media(min-width: 678px){
       flex-direction: row
    }

    @media(min-width: 1024px){
        display: flex;
        gap: 20px;
>>>>>>> quodr/responsiveness
        flex-direction: row;
    }
 
`;

export const Item = styled.li`
    font-family:  ${({ font }) => font };
    font-style: normal;
    font-weight: 500;
<<<<<<< HEAD
    padding: 0 20px;
    font-size: 14px;
    line-height: 17px;
=======
    font-size: 14px;
    line-height: 17px;
    display: flex;
    margin: 0;
    padding: 0;
    cursor: pointer
>>>>>>> quodr/responsiveness
    color: ${ theme.color.black };
`

export const NavbarIcon = styled.div`
    width: 15px;
    height: 15px;
    background-color: ${ theme.color.lightOrange };
<<<<<<< HEAD

    @media (min-width: 376px){
=======
    margin: auto;

    @media (min-width: 376px){
        display: block
    }

    @media(min-width: 678px){
        display: block
    }

    @media(min-width:1024px){
>>>>>>> quodr/responsiveness
        display: none
    }
`

export const Logo = styled.img`
    width: 129px;
    height: 36px;
<<<<<<< HEAD
    letter-spacing: 10px;   
`
export const Url = styled.a`
    width: 20px;
    color: #fff;
    src: '';
    background-color: skyblue;
    text-decoration: none; 
`
=======
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
>>>>>>> quodr/responsiveness
