import React from "react";
import {   Text, Header } from './infoFooter.style.';
import Logo from '../../assets/images/salaryHolidayLogo.svg'
import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-bundle'>
                <img src={Logo} alt='logo' />
               <Text className='footer-text'> We make  Insurance with love and passion. No doubt really.</Text>
            </div>    

            <div className='footer-bundle'>
                <Header className='footer-header'> CONTACT</Header>
               <Text className='footer-text'> 62 Opebi Str, Lagos Nigeria </Text>
               <Text className='footer-text'> sales@salaryholiday.com </Text>
               <Text className='footer-text'> +1800726915273 </Text>
            </div> 

            <div className='footer-bundle'>
                <Header className='footer-header'> PRODUCT </Header>    
                <NavLink to='jobloss-insurance'> <Text className='footer-text'>Job Loss Insurance </Text></NavLink>
                <NavLink to='car-insurance'> <Text className='footer-text'>Car Insurance </Text></NavLink>
                <NavLink to='travel-insurance'><Text className='footer-text'> Travel Insurance  </Text></NavLink>
            </div>  

            <div className='footer-bundle'>
                <Header className='footer-header'> OUR COMPANY </Header>
               <NavLink to='about'> <Text className='footer-text'>About Us </Text> </NavLink>
               <NavLink to='contact'> <Text className='footer-text'>Contact Us</Text></NavLink>
               <NavLink to='faq'> <Text className='footer-text'>FAQ </Text></NavLink>
               <NavLink to='#'> <Text className='footer-text'>Blog </Text></NavLink>
            </div>                                                                                                                                                                                                                                                                                                                                                                               
        </div>
    )
} 




export default Footer