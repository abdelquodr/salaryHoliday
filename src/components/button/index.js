import React from "react";
import { Button } from "./button.style";

const CustomButton = ({children, ...restProps}) => {
    return (
        <Button {...restProps}> {children} </Button>
    )
}


export default CustomButton