import React from "react";
import { Footer } from "./footer.style";
import Logo from '../../assets/images/salaryHolidayLogo.svg'
import { theme } from "../GlobalStyle";

const FooterSection = ({ children, ...restProps}) => {
    return (
        <Footer {...restProps}
            style={{ 
                backgroundColor: `${ theme.color.deepBlue }`,
                display: 'flex',
                justifyContent: 'space-between',
                padding: `${ theme.body.space }`
             }}
        >
            <div>
                <img src={Logo} />
               <p> We make  Insurance with love and passion. No doubt really.</p>
            </div>    

            <div>
                <h6> CONTACT</h6>
               <p> 62 Opebi Str, Lagos Nigeria </p>
               <p> sales@salaryholiday.com </p>
               <p> +1800726915273 </p>
            </div> 

            <div>
                <h6> PRODUCT </h6>
               <p> Job LOss Insurance </p>
               <p> Car Insurance </p>
               <p> Travel Insurance  </p>
            </div>  

            <div>
                <h6> OUR COMPANY </h6>
               <p> About Us </p>
               <p> COntact Us</p>
               <p> FAQ </p>
               <p> Blog </p>
            </div>                                                                                                                                                                                                                                                                                                                                                                               
        </Footer>
    )
} 


export default FooterSection