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
import FooterSection from '../components/footer'

const Home = () => {
    return (
        <React.Fragment style={{width: '100vw'}}>
            <Navbar />
            <Header />
            <div style={{backgroundColor: theme.color.lightBlue }}>
                you can save over N3m per year in damages. Watch our video to see how you can do this
            </div>
            <Card />
            <div>
                <p>
                    <span>Explore</span>
                    Insurance products in minutes.
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
                       Get up to 6 months salary if you lose your job or have an <br /> accident. Sign up in minutes!.
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
                   <Link><small style={{ padding : '0 10px 0 20px' }}>Learn More </small> <img style={{ width: '12px', height: '12px'}} src={Arrow} />  </Link>
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
                        Get up to 6 months salary if you lose your job or have an <br /> accident. Sign up in minutes!.
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
                    <Link><small style={{ padding : '0 10px 0 20px' }}>Learn More </small> <img style={{ width: '12px', height: '12px'}} src={Arrow} />  </Link>
                    </Sections.SectionB>
            </Sections>


             {/* ========== SECTION TRAVELINSURANCE ======================== */}
             <Sections>
                <Sections.Section>
                   <Sections.Header>
                        Travel Insurance That <br />
                        Meet Your Needs 
                   </Sections.Header> 
                   <Sections.Text>
                       Get up to 6 months salary if you lose your job or have an <br /> accident. Sign up in minutes!.
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
                   <Link><small style={{ padding : '0 10px 0 20px' }}>Learn More </small> <img style={{ width: '12px', height: '12px'}} src={Arrow} /> </Link>
                </Sections.Section>


                <Sections.SectionB>
                    picture is coming here
                </Sections.SectionB>
            </Sections>


            {/* =============== CONATCT SECTION ================== */}
            <Contact>
                <Contact.HeaderContainer>
                    <Contact.Header> Have a Question?</Contact.Header>
                    <Contact.Text>we're hew to help you with your queries.</Contact.Text>
                    <Contact.Text>please check our online channel</Contact.Text>
                </Contact.HeaderContainer>
                <Contact.EmailContainer>
                    <Contact.ContactHeader>Email</Contact.ContactHeader>
                    <Contact.ContactText>Support@salaryholiday.com</Contact.ContactText>
                    <Contact.ContactText>+2348037362672</Contact.ContactText>
                </Contact.EmailContainer>
                <Contact.SocialContainer>
                    <Contact.ContactHeader>Socials</Contact.ContactHeader>
                    <Contact.ContactText>if you have other questions, our social account are message away</Contact.ContactText>
                    <Contact.ContactText>+2348037362672</Contact.ContactText>
                </Contact.SocialContainer>    
            </Contact>


            {/*  ============= SUBSCRIBE SECTION ========================= */}
            <div>
                <h3>SUbscribe to our newsletter to get updated</h3>
                <Contact.ContactText> Get our latest update on your inbox. with lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</Contact.ContactText>
            </div>
            <div>
                <div>
                    <input placeholder='Enter email address' />
                    <CustomButton space="12px 40px" children="Buy Now" />
                    <p><small> We don't spam at all, our promise!</small></p>
                </div>          
            </div>


            {/* ==============  FOOTER SETION ==============================  */}
            <FooterSection />
        </React.Fragment>     
    )
}

export default Home