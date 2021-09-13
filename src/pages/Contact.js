import React from "react";
import { theme } from "../components/GlobalStyle";
import Footer from "../components/infoFooter";
import Navbar from '../layouts/TopBar'  

const Contact = () => {
    return (
       <React.Fragment style={{fontFamily: 'Public sans' }}>
           <Navbar />
            <div className='contact-us' >
                <div  className='contact__container'>
                    <h3>Contact Us</h3>
                    <p className='paragraph accordion_para' style={{color: theme.color.black, textAlign: 'center'}}>we are industry leading company that values honesty, integrity, and efficiency, Building quality products amd caring</p>
                </div>
                
                <div className='contact-us-details'>
                    <div>
                        <div  style={{textAlign: 'center'}}>
                            icon
                        </div>
                        <div>
                            <h6 className='visit'>Visit us</h6>
                            <p className='paragraph accordion_para' style={{color: theme.color.black, margin: '5px 0'}}>34, Madison Street,</p>
                            <p className='paragraph accordion_para' style={{color: theme.color.black, margin: '5px 0'}}>NY,USA 10005</p>
                        </div>
                    </div>
                    <div>
                        <div style={{textAlign: 'center'}}>
                            icon
                        </div> 
                        <div>
                            <h6 className='visit'>Call us</h6>
                            <p className='paragraph accordion_para' style={{color: theme.color.black, margin: '5px 0'}}>+1-492-4918-395</p>
                            <p className='paragraph accordion_para' style={{color: theme.color.black, margin: '5px 0'}}>+4-394-409-591</p>
                        </div>
                    </div>
                    <div>
                        <div  style={{textAlign: 'center'}}>
                            icon
                        </div>
                        <div>
                            <h6 className='visit'>Email us</h6>
                            <p className='paragraph accordion_para' style={{color: theme.color.black, margin: '5px 0'}}>info@mail.com</p>
                            <p className='paragraph accordion_para' style={{color: theme.color.black, margin: '5px 0'}}>support@mail.com</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='section'>
                <div className='freq-container'>
                    <h4 className='frequently'>Frequently asked question</h4>
                    <p className='freq-paragraph'>Get the best service at the lowest price</p>
                </div>

                <div>
                    <div className='accordion_wrap'>
                        <details>  
                            <summary className='accordion_h4'>Is there age limit for signing up for this policy?</summary>  
                            <p className='paragraph accordion_para'>You must be 18 years and above to apply for this scheme</p>  
                        </details>
                    </div>

                    <div className="accordion_wrap">
                        <details>  
                            <summary className='accordion_h4'>If the loss of job occur before initial period of 6 month, what am i entitled to?</summary>  
                            <p className='paragraph accordion_para'>A subscriber is only entitled to 90% of his tota premium contributed but not the benefit</p>  
                        </details>
                    </div>

                    <div className='accordion_wrap'>
                        <details>  
                            <summary className='accordion_h4'>Is there salary limit for enrollee of loss fo employment insurance policy scheme?</summary>  
                            <p className='paragraph accordion_para'>Yes. The minimum salary that can be insured is N75,000 monthly salary</p>  
                        </details>
                    </div>

                    <div className="accordion_wrap">
                        <details>  
                            <summary className='accordion_h4'>I am self-employed; can I sign up for loss of employment insurance?</summary>  
                            <h3 className='paragraph accordion_para'>No, the scheme covers only permanent employees in a paid employment</h3>  
                        </details>
                    </div>
                </div>
            </div>

            <Footer />  
     
       </React.Fragment>
    )
}

export default Contact