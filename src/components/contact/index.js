import React from 'react'
import { ContactContainer, HeaderContainer, EmailContainer, SocialContainer, Header, ContactHeader, Text, ContactText } from './contact.style'


const Contact = ({children, ...restProps}) => {
    return(
        <ContactContainer {...restProps}> {children} </ContactContainer>
    )  
}
 
Contact.HeaderContainer = ({children, ...restProps}) => (
    <HeaderContainer {...restProps}> {children} </HeaderContainer>
)

Contact.EmailContainer = ({children, ...restProps}) => (
    <EmailContainer {...restProps}> {children} </EmailContainer>
)

Contact.SocialContainer = ({children, ...restProps}) => (
    <SocialContainer {...restProps}> {children} </SocialContainer>
)

Contact.Header = ({children, ...restProps}) => (
    <Header{...restProps}> {children} </Header>
)

Contact.ContactHeader = ({children, ...restProps}) => (
    <ContactHeader {...restProps}> {children} </ContactHeader>
)


Contact.Text = ({children, ...restProps}) => (
    <Text {...restProps}> {children} </Text>
)

Contact.ContactText = ({children, ...restProps}) => (
    <ContactText {...restProps}> {children} </ContactText>
)



export default Contact