import React from "react";
import { theme } from "../components/GlobalStyle";
import Footer from "../components/infoFooter";
import Navbar from '../components/navbar'


const Contact = () => {
    return (
       <React.Fragment style={{fontFamily: 'Public sans' }}>
           <Navbar />
            <div style={{backgroundColor: '#F9FAFB', padding: '20px'}}>
                <div  className='contact__container'>
                    <h3 style={{
                        textAlign: 'center',
                        fontSize: '25px',
                        margin: '0'
                    }}>Contact Us</h3>
                    <p className='paragraph accordion_para' style={{color: theme.color.black, textAlign: 'center'}}>we are industry leading company that values honesty, integrity, and efficiency, Building quality products amd caring</p>
                </div>
                
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
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
                <div>
                    <h4 style={{textAlign: 'center'}}>Frequently asked question</h4>
                    <p className='paragraph' style={{color: theme.color.black, margin: '5px 0', textAlign: 'center'}}>Get the best service at the lowest price</p>
                </div>

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

            <Footer />  
     
       </React.Fragment>
    )
}

export default Contact