import React from "react";
import {Container, Section, SectionB, Text, Header, TinyCard, TinyCardImg} from './section.style'
import TinySpin from '../../assets/icons/tinySpin.svg'

const Sections = ({ children, ...restProps}) => {
    return (
        <Container {...restProps}> {children} </Container>

    )
}


Sections.Section = function ContainerSection ({ children, ...restProps}){
    return (
        <Section {...restProps}> {children} </Section>

    )
}


Sections.SectionB = function ContainerSectionB ({ children, ...restProps}){
    return (
        <SectionB {...restProps}> {children} </SectionB>

    )
}


Sections.Header = function ContainerHeader ({ children, ...restProps}){
    return (
        <Header {...restProps}> {children} </Header>

    )
}


Sections.Text = function ContainerText ({ children, ...restProps}){
    return (
        <Text {...restProps}> {children} </Text>

    )
}


Sections.TinyCard = function ContainerTinyCard({ children, ...restProps}){
    return (
        <TinyCard {...restProps}>
            <TinyCardImg src={TinySpin} />
            {children}
        </TinyCard>
    )
}


export default Sections