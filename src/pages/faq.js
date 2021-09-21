import React from "react";
import Footer from "../components/infoFooter";
import NewLetter from "../layouts/newsLetter";
import Navbar from '../layouts/TopBar'
import ContactSection from "../layouts/contact";

const Faq = ( ) => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='contact-us' style={{backgroundColor: '#F1FCFF'}}>
                <div className='freq-container'>
                        <h4 className='frequently'>Frequently asked question</h4>
                        <p className='freq-paragraph'>Get the best service at the lowest price</p>
                </div>
                    

                <div className='section'>
                    
                    <div>
                        <ul className='select-insurance'>
                            <li>General</li>
                            <li>Car Insurance</li>
                            <li>Job loss Insurance</li>
                            <li>Travel Insurance</li>
                            <li>Claim</li>
                        </ul>
                    </div>

                    <div class='faq'>
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
            </div>
            <ContactSection />
            <NewLetter />
            <Footer />
        </React.Fragment>
    )
}

export default Faq