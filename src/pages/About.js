import React from "react"
import  Footer from '../components/infoFooter'
import Navbar from "../layouts/TopBar"
import NewLetter from "../layouts/newsLetter"
import { theme } from "../components/GlobalStyle"
import Shield from '../assets/images/shield.png'
import letTalk from '../assets/images/let_talk.png'
import secure from '../assets/images/secure.png'
import Values from '../assets/images/our-values.png'
import solid from '../assets/icons/solid.png'
import group from '../assets/icons/Group 281.svg'
import group1 from '../assets/icons/Group.svg'
import group2 from '../assets/icons/Group (1).svg'
import group3 from '../assets/icons/Group 280.svg'

const About = ( ) => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='about_header'>
                <div>
                    <h4 className='about_header__header'>We're on mission on making insurance products that works for you</h4> 
                    <p className='paragraph aboutheader-para' >We're a team of Insurance expert and technologists building supplemental health solutions to enhance your health coverage </p>
                </div>
                <div>
                    <img className='solid-img' src={solid} alt='solid' />
                </div>
            </div>
         
            <div className='about-contain'>
                <div  className='sect about-section added-pad' style={{ backgroundColor: theme.color.deepBlue }}>
                    <div>
                        <img src={Shield} alt='shield' />
                    </div>
                    <h4 className='provide_header'>
                        We provide products that cater for your today, while also <span style={{color: '#FF7139', opacity: '0.7', fontWeight: 'bold'}}>securing your tomorrow</span> 
                    </h4>
                    <p className='paragraph'> 
                        you can constantly access a range of innovative insurance products to protect your lived ones 
                        in case of life eventualities. Life insurance is no longer tedious and mundane with our simple and easy-to-use solutions.
                    </p>
                </div>
                <div className='about-section'>
                   <img className='about-img' src={Values} alt='values' />
                </div>
            </div>


            <div className='about-contain reverse'>
                <div className='sect about-section added-pad' style={{ backgroundColor: theme.color.orange }}>
                    <h6 className='about-values' >
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
                <div className='about-section'>
                    <img className='about-img' src={secure} alt='secure' />
                </div>
            </div>


            <div className='section'>
                <h5 className='trusted'> Trusted by <span style={{fontWeight: 'bold'}}>Over 1000 brands</span> worldwide </h5>
                <div className='trustees-div'>
                    <div className='trustees-img'>
                        <img src={group} alt='group' />
                    </div>
                    <div className='trustees-img'>
                        <img src={group1} alt='group2' />
                    </div>
                    <div className='trustees-img'>
                        <img src={group2} alt='group2' />
                    </div>
                    <div className='trustees-img'>
                        <img src={group3} alt='group3' />
                    </div>
                </div>
            </div>

            <div className='section-img'>
                <div className='section about-section'>
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
                <div className='section about-section let-talk-img img-small'>
                    <img className='about-img img' src={letTalk} alt='let-talk' />
                </div>
            </div>

            <NewLetter />
            <Footer />
        </React.Fragment>
        
    )
}


export default About