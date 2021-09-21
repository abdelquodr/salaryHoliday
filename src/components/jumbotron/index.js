import React from "react";
import { Jumbo, JumboA, JumboB, JumboBTop, JumboBDown } from "./jumbotron.style";


const Jumbotron = ({ children, ...restProps }) => {
        return (
            <Jumbo {...restProps}> { children } </Jumbo>
        )
}


Jumbotron.JumboA = function JumbotronJumboA({ children, ...restProps }){
    return (
        <JumboA {...restProps}> {children } </JumboA>
    )
}


Jumbotron.JumboB = function JumbotronJumboB({ children, ...restProps }){
    return (
        <JumboB {...restProps}> {children } </JumboB>
    )
}

Jumbotron.JumboBTop = function JumbotronJumboBTop({ children, ...restProps }){
    return (
        <JumboBTop {...restProps}> {children } </JumboBTop>
    )
}

Jumbotron.JumboBDown = function JumbotronJumboBDown({ children, ...restProps }){
    return (
        <JumboBDown {...restProps}> {children } </JumboBDown>
    )
}



export default Jumbotron