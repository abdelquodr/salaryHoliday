import React, {useEffect, useState, useRef} from 'react'
import { theme } from '../components/GlobalStyle'
import Header from '../layouts/Header'
import Navbar from '../layouts/TopBar'
import Card from '../layouts/card'
import Sections from '../components/Section'
import CustomButton from "../components/button";
import { Link } from 'react-router-dom'
import Arrow from '../assets/icons/Arrow.svg'
import Footer from '../components/infoFooter'
import ContactSection from '../layouts/contact'
import NewLetter from '../layouts/newsLetter'
import employment from '../assets/icons/Group 1000002073 (1)(copy).png'
import car from '../assets/icons/Group 1000002073 (2).png'
import travel from '../assets/icons/Group 1000002068 (1).png'
import play from '../assets/icons/Play.png'
import 'animate.css'
import { Waypoint } from 'react-waypoint';

const Home = () => {

    const sectionRef = useRef()
    const sectionBRef = useRef()
    const sectionCRef = useRef()

    const popInFromDown = (props) => {
                sectionRef.current.classList.add('animate__backInUp')           
        }
    const popInFromDownB = (props) => {
        sectionBRef.current.classList.add('animate__backInUp')              
    }
    const popInFromDownC = (props) => {
        sectionCRef.current.classList.add('animate__backInUp')              
    }



    return (
        <React.Fragment style={{ width: '100vw' }}>
        <Navbar />
            <Header />
            <div className='under-header' style={{ backgroundColor: theme.color.lightBlue }}>
                <img className='play' src={play} alt='play' />
                <small style={{ display: 'inline-block' }} > you can save over N3m per year in damages. Watch our video to see how you can do this </small>
            </div>
            <Card />
            <div style={{
                textAlign: 'center'
            }}  >
                <p className='insurance'>
                    <span style={{ color: '#E48952' }}>Explore</span> Insurance products in minutes.
                </p>
            </div>

            {/* ========== SECTION EMPLOYMENT INSURANCE ============================ */}
            <Sections>
                <Waypoint onEnter={popInFromDown}>
                <div as={Sections.Section} className='animate__animated' ref={sectionRef} >
                    <Sections.Header>
                        Employment Insurance <br />
                        Made for you
                    </Sections.Header>
                    <Sections.Text>
                        Get up to 6 months salary if you lose your job or have an accident. Sign up in minutes!.
                    </Sections.Text>

                    <Sections.TinyCard>
                        <Sections.Text color={theme.color.BlackDarker}>Coverage for Involutary Job Loss</Sections.Text>
                    </Sections.TinyCard>
                    <Sections.TinyCard>
                        <Sections.Text>Covers against business closure</Sections.Text>
                    </Sections.TinyCard>
                    <Sections.TinyCard>
                        <Sections.Text>Coverage for Accidental damage</Sections.Text>
                    </Sections.TinyCard>

                    <CustomButton space="12px 40px" children="Buy Now" />
                    <Link style={{ fontSize: '14px', color: theme.color.lightOrange, textDecoration: 'none' }}><small style={{ padding: '0 10px 5px 20px' }}>Learn More </small> <img style={{ width: '12px', height: '12px', verticalAlign: 'center' }} alt='arrowlink' src={Arrow} /> </Link>
                </div>
                </Waypoint>

                <Sections.SectionB>
                    <img className='insurance-img' src={employment} alt='employment' />
                </Sections.SectionB>
            </Sections>


            {/* ========== SECTION CAR INSURANCE ============================ */}
            <Sections className='reverse-mobile'>
                <Sections.Section>
                    <img className='insurance-img add-padding' src={car} alt='car' />
                </Sections.Section>

                
                <Waypoint onEnter={popInFromDownB}>
                    <div as={Sections.SectionB} className='animate__animated' ref={sectionBRef} >
                    <Sections.Header>
                        Get Car Insurance <br />
                        that  works
                    </Sections.Header>
                    <Sections.Text>
                        Get up to 6 months salary if you lose your job or have an accident. Sign up in minutes!.
                    </Sections.Text>

                    <Sections.TinyCard>
                        <Sections.Text color={theme.color.BlackDarker}>flexible Payment on Plans</Sections.Text>
                    </Sections.TinyCard>
                    <Sections.TinyCard>
                        <Sections.Text>24/7 Customer Support</Sections.Text>
                    </Sections.TinyCard>
                    <Sections.TinyCard>
                        <Sections.Text>Coverage up to N60m in damages </Sections.Text>
                    </Sections.TinyCard>
                    <CustomButton space="12px 40px" children="Buy Now" />
                    <Link style={{ fontSize: '14px', color: theme.color.lightOrange, textDecoration: 'none' }}><small style={{ padding: '0 10px 5px 20px' }}>Learn More </small> <img style={{ width: '12px', height: '12px', verticalAlign: 'center' }} alt='arrowlink' src={Arrow} /> </Link>
                </div>
                </Waypoint>
            </Sections>


            {/* ========== SECTION TRAVELINSURANCE ======================== */}
            <Sections>
            <Waypoint onEnter={popInFromDownC}>
                <div as={Sections.Section} className='animate__animated' ref={sectionCRef} >
                    <Sections.Header>
                        Travel Insurance That <br className='break' />
                        Meet Your Needs
                    </Sections.Header>
                    <Sections.Text>
                        Get up to 6 months salary if you lose your job or have an accident. Sign up in minutes!.
                    </Sections.Text>

                    <Sections.TinyCard>
                        <Sections.Text color={theme.color.BlackDarker}>Coverage for Involutary Job Loss</Sections.Text>
                    </Sections.TinyCard>
                    <Sections.TinyCard>
                        <Sections.Text>Covers against business closure</Sections.Text>
                    </Sections.TinyCard>
                    <Sections.TinyCard>
                        <Sections.Text>Coverage for Accidental damage</Sections.Text>
                    </Sections.TinyCard>

                    <CustomButton space="12px 40px" children="Buy Now" />
                    <Link style={{ fontSize: '14px', color: theme.color.lightOrange, textDecoration: 'none' }}><small style={{ padding: '0 10px 5px 20px' }}>Learn More </small> <img style={{ width: '12px', height: '12px', verticalAlign: 'center' }} alt='arrowlink' src={Arrow} /> </Link>
                </div>
                </Waypoint>


                <Sections.SectionB>
                    <img className='insurance-img' src={travel} alt='travel' />
                </Sections.SectionB>
            </Sections>


            {/* =============== CONATCT SECTION ================== */}
            <ContactSection />

            <NewLetter />

            {/* ==============  FOOTER SETION ==============================  */}
            <Footer />
        </React.Fragment>
    )
}




export default Home