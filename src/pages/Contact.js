import React from "react";
import { theme } from "../components/GlobalStyle";
import Footer from "../components/infoFooter";
import FagQuestion from "../layouts/faqQuestions";
import Navbar from '../layouts/TopBar'  
import contactImg1 from '../assets/icons/Group 287.png'
import contactImg2 from '../assets/icons/Group 288.png'
import contactImg3 from '../assets/icons/Group 289.png'

const Contact = () => {
    return (
       <React.Fragment>
           <Navbar />
            <div className='contact-us' >
                <div  className='contact__container'>
                    <h3>Contact Us</h3>
                    <p className='paragraph accordion_para' style={{color: theme.color.black, textAlign: 'center'}}>we are industry leading company that values honesty, integrity, and efficiency, Building quality products amd caring</p>
                </div>
                
                <div className='contact-us-details'>
                    <div>
                        <div  style={{textAlign: 'center'}}>
                            <img src={contactImg1} alt='contact-img-1' />
                        </div>
                        <div>
                            <h6 className='visit'>Visit us</h6>
                            <p className='paragraph accordion_para' style={{color: theme.color.black, margin: '5px 0'}}>34, Madison Street,</p>
                            <p className='paragraph accordion_para' style={{color: theme.color.black, margin: '5px 0'}}>NY,USA 10005</p>
                        </div>
                    </div>
                    <div>
                        <div style={{textAlign: 'center'}}>
                            <img src={contactImg2} alt='contact-img-2' />
                        </div> 
                        <div>
                            <h6 className='visit'>Call us</h6>
                            <p className='paragraph accordion_para' style={{color: theme.color.black, margin: '5px 0'}}>+1-492-4918-395</p>
                            <p className='paragraph accordion_para' style={{color: theme.color.black, margin: '5px 0'}}>+4-394-409-591</p>
                        </div>
                    </div>
                    <div>
                        <div  style={{textAlign: 'center'}}>
                            <img src={contactImg3} alt='contact-img-3' />
                        </div>
                        <div>
                            <h6 className='visit'>Email us</h6>
                            <p className='paragraph accordion_para' style={{color: theme.color.black, margin: '5px 0'}}>info@mail.com</p>
                            <p className='paragraph accordion_para' style={{color: theme.color.black, margin: '5px 0'}}>support@mail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <FagQuestion background='#fff' />
            <Footer />  
            
       </React.Fragment>
    )
}

export default Contact