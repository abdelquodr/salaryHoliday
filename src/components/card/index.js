import React from "react";
import { Card, Text, Header, Container,  Icon} from "./card.style";


const CardContainer = ({children, ...restProps}) => {
    return(
        <Container {...restProps}> {children} </Container>
    )

}

CardContainer.Card = function ContainerCard({children, ...restProps}) {
    return(
        <Card {...restProps}> {children} </Card>
    )
}


CardContainer.Icon = function ContainerIcon({children, ...restProps}) {
    return(
        <Icon {...restProps} />
    )
}

CardContainer.Header = function ContainerHeader({children, ...restProps}) {
    return(
        <Header {...restProps}> {children} </Header>
    )
}

CardContainer.Text = function ContainerText({children, ...restProps}) {
    return(
        <Text {...restProps}> {children} </Text>
    )
}


export default CardContainer