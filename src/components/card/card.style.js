import styled from "styled-components/macro";
import { theme } from "../GlobalStyle";


export const Container = styled.div`
    display: flex;
    margin: 70px 0;
    /* justify-content: center; */
    padding: ${ theme.body.space }
`


export const Card = styled.div`
    display: flex; 
    justify-content: space-between;
`

export const Icon = styled.img`
    Width: 60px;
    Height: 60px;
    margin-right: 20px;
    Top: 1008px;
    Left: 125px;
    Opacity: 40%;
` 

export const Header = styled.h6`
    /* position: absolute;
    width: 133px;
    height: 32px;
    left: 242px;
    top: 1001px; */
    margin: 0;
    /* font-family: Public Sans; */
    font-style: normal;
    font-weight: 600;
    font-size: ${ theme.font.fontSmall };
    line-height: 32px;
`

export const Text = styled.p`
    /* position: absolute;
    width: 220px;
    height: 56px;
    left: 669px;
    top: 1048px; */
    margin: 0;
    color: ${ theme.color.black };
    /* font-family: Public Sans; */
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    opacity: 0.7;
`