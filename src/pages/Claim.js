import React from "react";
import Navbar from "../layouts/TopBar";
import Jumbotron from "../components/jumbotron";
import CustomButton from "../components/button";
import FagQuestion from "../layouts/faqQuestions";
import Contact from "../layouts/contact";
import NewLetter from "../layouts/newsLetter";
import Footer from "../components/infoFooter";
import successful from '../assets/icons/Successful.png'
import personPhone from '../assets/icons/image(copy).png'
import shield from '../assets/icons/Icon (2).png'
import customer from '../assets/icons/Icon.png'
import computer from '../assets/icons/Icon (3).png'

const Claim = () => {
    return (
        <React.Fragment>
            <Navbar />

            <div className='loss-jumbo-container loss-jare claim-bcg'>
                {/* <Jumbotron>
                    <Jumbotron.JumboA style={{backgroundColor: 'transparent'}}>
                        <h5 className='jumbotron-h5'>Get your<span style={{fontWeight: 'bold'}}> Claims Approved</span> in 5 mins </h5>
                        <p className='jumbotron-para'>The foremost insurance aggregator and a leading fintech player. Customer first and sustanced profitability for entire insurance ecosystem </p>
                        <CustomButton className='jumbotron-button'  children='Make a Claim' />
                    </Jumbotron.JumboA>
                    <Jumbotron.JumboB>
                        <div>
                            <img src={successful} alt='successful' />
                        </div>
                    </Jumbotron.JumboB>
                </Jumbotron> */}
                 <div>
                    <h3 className='loss-header correct'>Get your<span style={{fontWeight: 'bold'}}> Claims Approved</span> in 5 mins</h3>
                    <p className='paragraph loss-para'>The foremost insurance aggregator and a leading fintech player. Customer
                         first and sustanced profitability for entire insurance ecosystem
                    </p>
                    <CustomButton children='Make A Claim' />
                </div>
                <div className='job-loss-img-div'>
                    <img className='job-loss-img claim-img' src={successful} alt='succesful' />
                </div>
            </div>

            <div className='claim-section' style={{ fontFamily: 'Public sans'}}>
                <h3 className='claim-header align-center hassle-free'> We make claim hassle-free</h3>
                <div className='claim-card-container'>
                    <div className='claim-card'>
                        <div>
                            <img className='how-it-work-icon' src={shield} alt='shield' />
                        </div>
                        <h4>File your claim</h4>
                        <p className='paragraph' style={{ color: '#616E7C'}}>
                            Filling a claim is the fastest way to get paid.
                            You'll answer a few easy questions, snap some pictures, 
                            and we'll start processing your claim instantly.
                        </p>
                    </div>

                    <div className='claim-card'>
                        <div>
                            <img className='how-it-work-icon' src={customer} alt='customer' />
                        </div>
                        <h4>Track Claim Progress</h4>
                        <p className='paragraph' style={{ color: '#616E7C'}}> 
                            You'll always know what's going on with yor claim - because
                            you can follow every step of the way.
                        </p>
                    </div>

                    <div className='claim-card added-gap'>
                        <div>
                            <img className='how-it-work-icon' src={computer} alt='customer' />
                        </div>
                        <h4>Get a Feedback ASAP</h4>
                        <p className='paragraph' style={{ color: '#616E7C'}}>
                            Most Cliam are paid under a week. the simplest claim are 
                            eligible for same day processing
                        </p>
                    </div>
                </div>
            </div>

            <div className='section cal-section'>
                <div className='claim-make'>
                    <h4 className='claim-header align-left pad-600'>Helpful claim features</h4>
                    <p className='paragraph loss-para'>Our team is avalilable 24/7 to resolve your claim as quick as possible </p>

                    <div className='claim-feature' style={{display: 'flex'}}>
                        <span className='circle-num'>1</span> 
                        <div>
                            <h4 className='claim-head'>Alternate transportation</h4>
                            <p className='paragraph loss-para'>
                                if you're in a covered accident, we'll give you monet to get around
                                you way... rental, rideshare,or however you choose.
                            </p>
                        </div>    
                    </div>

                    <div className='' style={{display: 'flex'}}>
                        <span className='circle-num'>2</span> 
                        <div>
                            <h4 className='claim-head'>Call For Assistance</h4>
                            <p className='paragraph loss-para' >
                                To be connected with our roadside assistance service, Honk, just tap
                                the button in the app (or call 1-855-444-1875)
                            </p>
                        </div>    
                    </div>
                </div>

                <div className='approve-img-div'>
                    <img className='woman-img resize-600 increse-1024 one-of-equal' src={personPhone} alt='person phone' />
                </div>
            </div>
    
            <FagQuestion />
            <Contact />
            <NewLetter />
            <Footer />
        </React.Fragment>
    )
}


export default Claim