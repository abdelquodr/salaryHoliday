import React from 'react'
import { theme } from '../components/GlobalStyle'
import Header from '../layouts/Header'
import Navbar from '../layouts/TopBar'
import Card from '../layouts/card'
import Sections from '../components/Section'
import CustomButton from "../components/button";
import { Link } from 'react-router-dom'
import Arrow from '../assets/icons/Arrow.svg'
import Contact from '../components/contact'
import Footer from '../components/infoFooter'
import ContactSection from '../layouts/contact'
import NewLetter from '../layouts/newsLetter'

const Home = () => {
    return (
        <React.Fragment style={{width: '100vw'}}>
            <Navbar />
            <Header />
            <div className='under-header' style={{ backgroundColor: theme.color.lightBlue}}>
                you can save over N3m per year in damages. Watch our video to see how you can do this
            </div>
            <Card />
            <div style={{
                textAlign: 'center'
            }}  >
                <p className='insurance'>
                    <span style={{color:'#E48952'}}>Explore</span> Insurance products in minutes.
                </p>
            </div>

            {/* ========== SECTION EMPLOYMENT INSURANCE ============================ */}
            <Sections>
                <Sections.Section>
                   <Sections.Header>
                        Employment Insurance <br />
                        Made for you
                   </Sections.Header> 
                   <Sections.Text>
                       Get up to 6 months salary if you lose your job or have an accident. Sign up in minutes!.
                   </Sections.Text>

                   <Sections.TinyCard> 
                       <Sections.Text color={ theme.color.BlackDarker }>Coverage for Involutary Job Loss</Sections.Text>
                   </Sections.TinyCard>
                   <Sections.TinyCard> 
                        <Sections.Text>Covers against business closure</Sections.Text>
                   </Sections.TinyCard>
                   <Sections.TinyCard> 
                       <Sections.Text>Coverage for Accidental damage</Sections.Text>
                   </Sections.TinyCard>

                   <CustomButton space="12px 40px" children="Buy Now" />
                   <Link style={{ fontSize: '14px', color: theme.color.lightOrange, textDecoration: 'none' }}><small style={{ padding : '0 10px 5px 20px' }}>Learn More </small> <img style={{ width: '12px', height: '12px', verticalAlign: 'center'}} alt='arrowlink' src={Arrow} /> </Link>
                </Sections.Section>


                <Sections.SectionB>
                    picture is coming here
                </Sections.SectionB>
            </Sections>


            {/* ========== SECTION CAR INSURANCE ============================ */}
            <Sections>
                <Sections.Section>
                   picture dey come soon
                </Sections.Section>


                <Sections.SectionB>
                    <Sections.Header>
                        Get Car Insurance <br />
                            that  works
                    </Sections.Header> 
                    <Sections.Text>
                        Get up to 6 months salary if you lose your job or have an accident. Sign up in minutes!.
                    </Sections.Text>

                    <Sections.TinyCard> 
                        <Sections.Text color={ theme.color.BlackDarker }>flexible Payment on Plans</Sections.Text>
                    </Sections.TinyCard>
                    <Sections.TinyCard> 
                            <Sections.Text>24/7 Customer Support</Sections.Text>
                    </Sections.TinyCard>
                    <Sections.TinyCard> 
                        <Sections.Text>Coverage up to N60m in damages </Sections.Text>
                    </Sections.TinyCard>
                        <CustomButton space="12px 40px" children="Buy Now" />
                        <Link style={{ fontSize: '14px', color: theme.color.lightOrange, textDecoration: 'none' }}><small style={{ padding : '0 10px 5px 20px' }}>Learn More </small> <img style={{ width: '12px', height: '12px', verticalAlign: 'center'}} alt='arrowlink' src={Arrow} /> </Link>
                    </Sections.SectionB>
            </Sections>


             {/* ========== SECTION TRAVELINSURANCE ======================== */}
             <Sections>
                <Sections.Section>
                   <Sections.Header>
                        Travel Insurance That <br className='break' />
                        Meet Your Needs 
                   </Sections.Header> 
                   <Sections.Text>
                       Get up to 6 months salary if you lose your job or have an accident. Sign up in minutes!.
                   </Sections.Text>

                   <Sections.TinyCard> 
                       <Sections.Text color={ theme.color.BlackDarker }>Coverage for Involutary Job Loss</Sections.Text>
                   </Sections.TinyCard>
                   <Sections.TinyCard> 
                        <Sections.Text>Covers against business closure</Sections.Text>
                   </Sections.TinyCard>
                   <Sections.TinyCard> 
                       <Sections.Text>Coverage for Accidental damage</Sections.Text>
                   </Sections.TinyCard>

                   <CustomButton space="12px 40px" children="Buy Now" />
                   <Link style={{ fontSize: '14px', color: theme.color.lightOrange, textDecoration: 'none' }}><small style={{ padding : '0 10px 5px 20px' }}>Learn More </small> <img style={{ width: '12px', height: '12px', verticalAlign: 'center'}} alt='arrowlink' src={Arrow} /> </Link>
                </Sections.Section>


                <Sections.SectionB>
                    picture is coming here
                </Sections.SectionB>
            </Sections>


            {/* =============== CONATCT SECTION ================== */}
            <ContactSection />


            {/*  ============= SUBSCRIBE SECTION ========================= */}
            {/* <div>
                <h3 style={{textAlign: 'center', fontSize: '15px', margin: '40px 0 0 0' }}>Subscribe to our newsletter to get updated</h3>
                <Contact.ContactText style={{ textAlign: 'center', fontSize: '12px', padding: '0 60px', color: theme.color.black }}> Get our latest update on your inbox. with lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</Contact.ContactText>
            </div>
            <div>
                <div style={{textAlign: 'center'}}>
                    <input placeholder='Enter email address' style={inputStyle} />
                    <CustomButton space="12px 40px" style={{borderRadius:'0 5px 5px 0'}} children="Buy Now" />
                    <p><small> We don't spam at all, our promise!</small></p>
                </div>          
            </div> */}
            <NewLetter />

            {/* ==============  FOOTER SETION ==============================  */}
            <Footer />
        </React.Fragment>     
    )
}


 const inputStyle = {
    borderRadius: '5px 0px 0px 5px',
    border: '1px solid gray',
    padding: '8px',
    fontSize: '10px'
 }    



export default Home