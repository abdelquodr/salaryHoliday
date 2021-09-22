import React from "react";
import {   Text, Header } from './infoFooter.style.';
import Logo from '../../assets/images/salaryHolidayLogo.svg'


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
               <Text className='footer-text'>Job Loss Insurance </Text>
               <Text className='footer-text'>Car Insurance </Text>
               <Text className='footer-text'> Travel Insurance  </Text>
            </div>  

            <div className='footer-bundle'>
                <Header className='footer-header'> OUR COMPANY </Header>
               <Text className='footer-text'>About Us </Text>
               <Text className='footer-text'>Contact Us</Text>
               <Text className='footer-text'>FAQ </Text>
               <Text className='footer-text'>Blog </Text>
            </div>                                                                                                                                                                                                                                                                                                                                                                               
        </div>
    )
} 




export default Footer