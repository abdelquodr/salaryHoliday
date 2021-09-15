import React from 'react'
import { Container, ListItem, Item, Logo, Url, NavbarIcon } from './navbar.style'

const Navbar = ({ children, ...restProps}) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}


Navbar.ListItem = function NavbarListItem({ children, ...restProps}) {
    return (
        <ListItem {...restProps}>
            {children}
        </ListItem>
    )
}

Navbar.NavbarIcon = function NavbarNavbarIcon({ children, ...restProps}) {
    return (
        <NavbarIcon{...restProps}>
            {children}
        </NavbarIcon>
    )
}

Navbar.Item = function NavbarItem({ children, ...restProps}) {
    return (
        <Item {...restProps}>
            {children}
        </Item>
    )
}

Navbar.Logo = function NavbarLogo({ children, ...restProps}) {
    return (
        <Logo {...restProps} />
    )
}

Navbar.Url = function NavbarUrl({ children, ...restProps}) {
    return (
        <Url {...restProps} />
    )
}

export default Navbar