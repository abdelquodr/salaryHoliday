import React from "react"
import  Footer from '../components/infoFooter'
import Navbar from "../layouts/TopBar"
import NewLetter from "../layouts/newsLetter"
import { theme } from "../components/GlobalStyle"


const About = ( ) => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='about_header'>
                <div>
                    <h4 className='about_header__header'>We're on mission on making insurance products that works for you</h4> 
                    <p className='paragraph' style={{color: theme.color.black }}>We're a team of Insurance expert and technologists building supplemental health solutions to enhance your health coverage </p>
                </div>
                <div>
                    images is coming here
                </div>
            </div>
         
            <div>
                <div  className='section' style={{ backgroundColor: theme.color.deepBlue }}>
                    <h4 className='provide_header'>
                        We provide products that cater for your today, while also securing your tomorrow 
                    </h4>
                    <p className='paragraph'> 
                        you can constantly access a range of innovative insurance products to protect your lived ones 
                        in case of life eventualities. Life insurance is no longer tedious and mundane with our simple and easy-to-use solutions.
                    </p>
                </div>
                <div>
                    image is coming here
                </div>
            </div>


            <div>
                <div className='section' style={{ backgroundColor: theme.color.orange }}>
                    <h6 style={{fontSize: '18px', color: '#fff'}}>
                        Our values take the lead
                    </h6>

                    <div>
                        <h6 className='bold_header'>Be bold</h6>
                        <p className='paragraph'> we challenge the reimagine the status quo</p>      
                    </div>

                    <div>
                        <h6 className='bold_header'>Be Curious</h6>
                        <p className='paragraph'> we use data and insight to continuously improve</p>      
                    </div>

                    <div>
                        <h6 className='bold_header'>Build to delight </h6>
                        <p className='paragraph'> we never settle and strive to go beyond the expected</p>      
                    </div>
                   
                </div>
                <div>
                    image is coming here
                </div>
            </div>


            <div className='section'>
                <h5 className='trusted'> Trusted by <span>Over 1000 brands worldwide</span> </h5>
                <div>
                    <div>
                        image
                    </div>
                    <div>
                        image
                    </div>
                    <div>
                        image
                    </div>
                    <div>
                        image
                    </div>
                </div>
            </div>

            <div>
                <div className='section'>
                    <h4 className='let_talk'>Let's talk.</h4>
                    <p className='paragraph' style={{ color: theme.color.black}}>tell us about yourself and your group, and someone from our team will be in touch, usually withn 24 hours</p>
                    <div className='let_talk__info'>
                        <ul style={{ listStyle: 'none', padding:'0' }}>
                            <li>
                                <p style={{fontWeight: '400'}}>info@salaryholiday@gmail.com</p>
                                <p><small>support Email - Reach out to us</small></p>
                            </li>
                            <li>
                                <p style={{fontWeight: '400'}}>0803726616251, 090261535141</p>
                                <p> <small>contact phone number - Let's talk</small></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    image
                </div>
            </div>

            <NewLetter />
            <Footer />
        </React.Fragment>
        
    )
}


export default About