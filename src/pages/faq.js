import React from "react";
import Footer from "../components/infoFooter";
import NewLetter from "../layouts/newsLetter";
import Navbar from '../components/navbar'
import ContactSection from "../layouts/contact";
import { theme } from "../components/GlobalStyle";

const Faq = ( ) => {
    return (
        <React.Fragment>
            <Navbar />
            <div style={{backgroundColor: '#F1FCFF', padding: '20px'}}>
                <div>
                    <div  className='contact__container'>
                        <h3 style={{
                            textAlign: 'center',
                            fontSize: '25px',
                            margin: '0'
                        }}>Frequently asked questions</h3>
                        <p className='paragraph accordion_para' style={{color: theme.color.black, textAlign: 'center'}}>Get the best service at the lowest price</p>
                    </div> 
                </div>

                <div className='section'>
                    {/* <div>
                        <h4 style={{textAlign: 'center'}}>Frequently asked question</h4>
                        <p className='paragraph' style={{color: theme.color.black, margin: '5px 0', textAlign: 'center'}}>Get the best service at the lowest price</p>
                    </div> */}
                    
                    <div>
                        <div className='accordion_wrap'>
                            <details>  
                                <summary className='accordion_h4'>How does website version control works?</summary>  
                                <p className='paragraph accordion_para'>This is section 1</p>  
                            </details>
                        </div>

                        <div className="accordion_wrap">
                            <details>  
                                <summary className='accordion_h4'>Can I use this without an extension?</summary>  
                                <p className='paragraph accordion_para' >This is section 1</p>  
                            </details>
                        </div>

                        <div className='accordion_wrap'>
                            <details>  
                                <summary className='accordion_h4'>Why is this better than usepastel?</summary>  
                                <p className='paragraph accordion_para'>This is section 1</p>  
                            </details>
                        </div>

                        <div className="accordion_wrap">
                            <details>  
                                <summary className='accordion_h4'>How can integrate this with github?</summary>  
                                <h3 className='paragraph accordion_para'>This is section 1</h3>  
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