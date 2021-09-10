import React from "react";
import {   Text, Header } from './infoFooter.style.';
import Logo from '../../assets/images/salaryHolidayLogo.svg'
import { theme } from "../GlobalStyle";
import { ContactContainer } from "../contact/contact.style";


const Footer = () => {
    return (
        <ContactContainer
            style={{ 
                backgroundColor: `${ theme.color.deepBlue }`,
            //     display: 'flex',
            //     justifyContent: 'space-between',
            //     padding: `${ theme.body.space }`
             }}
        >
            <div>
                <img src={Logo} alt='logo' />
               <Text style={text}> We make  Insurance with love and passion. No doubt really.</Text>
            </div>    

            <div>
                <Header style={footerHeader}> CONTACT</Header>
               <Text style={text}> 62 Opebi Str, Lagos Nigeria </Text>
               <Text style={text}> sales@salaryholiday.com </Text>
               <Text style={text}> +1800726915273 </Text>
            </div> 

            <div>
                <Header style={footerHeader}> PRODUCT </Header>
               <Text style={text}>Job Loss Insurance </Text>
               <Text style={text}>Car Insurance </Text>
               <Text style={text}> Travel Insurance  </Text>
            </div>  

            <div>
                <Header style={footerHeader}> OUR COMPANY </Header>
               <Text style={text}>About Us </Text>
               <Text style={text}>Contact Us</Text>
               <Text style={text}>FAQ </Text>
               <Text style={text}>Blog </Text>
            </div>                                                                                                                                                                                                                                                                                                                                                                               
        </ContactContainer>
    )
} 



const footerHeader = {
    color: '#BBBCC0',
    marginBottom: '10px',
}

const text = {
    color: '#BBBCC0',
    fontSize: '12px',
    lineHeight: '15px'
}


export default Footer