import React from "react";
import Navbar from "../layouts/TopBar";
import Jumbotron from "../components/jumbotron";
import CustomButton from "../components/button";
import FagQuestion from "../layouts/faqQuestions";
import Contact from "../layouts/contact";
import NewLetter from "../layouts/newsLetter";
import Footer from "../components/infoFooter";

const Claim = () => {
    return (
        <React.Fragment>
            <Navbar />

            <div style={{width: '100%', height: '30em', background: 'pink'}}>
                <Jumbotron>
                    <Jumbotron.JumboA style={{backgroundColor: 'transparent'}}>
                        <h5 className='jumbotron-h5'>Get your<span style={{fontWeight: 'bold'}}> Claims Approved</span> in 5 mins </h5>
                        <p className='jumbotron-para'>The foremost insurance aggregator and a leading fintech player. Customer first and sustanced profitability for entire insurance ecosystem</p>
                        <CustomButton className='jumbotron-button'  children='Make a Claim' />
                    </Jumbotron.JumboA>
                    <Jumbotron.JumboB>
                        <div>
                            image is coming
                        </div>
                    </Jumbotron.JumboB>
                </Jumbotron>
            </div>

            <div className='claim-section' style={{ fontFamily: 'Public sans'}}>
                <h3 className='claim-header align-center'> We make claim hassle-free</h3>
                <div className='claim-card-container'>
                    <div className='claim-card'>
                        <h4>File your claim</h4>
                        <p className='paragraph' style={{ color: '#616E7C'}}>
                            Filling a claim is the fastest way to get paid.
                            You'll answer a few easy questions, snap some pictures, 
                            and we'll start processing your claim instantly.
                        </p>
                    </div>

                    <div className='claim-card'>
                        <h4>Track Claim Progress</h4>
                        <p className='paragraph' style={{ color: '#616E7C'}}> 
                            You'll always know what's going on with yor claim - because
                            you can follow every step of the way.
                        </p>
                    </div>

                    <div className='claim-card added-gap'>
                        <h4>Get a Feedback ASAP</h4>
                        <p className='paragraph' style={{ color: '#616E7C'}}>
                            Most Cliam are paid under a week. the simplest claim are 
                            eligible for same day processing
                        </p>
                    </div>
                </div>
            </div>

            <div className='claim-section claim-card-container'>
                <nav className='padless'>
                    <h3 className='claim-header align-left'>Helpful claim features</h3>
                    <p className='paragraph claim-paragraph' style={{ color: '#616E7C'}}>Our team is avalilable 24/7 to resolve your claim as quick as possible </p>

                    <div className='claim-feature'>
                        <h4 className='claim-head'>Alternate transportation</h4>
                        <p className='paragraph claim-paragraph' style={{ color: '#616E7C'}}>
                            if you're in a covered accident, we'll give you monet to get around
                            you way... rental, rideshare,or however you choose.
                        </p>
                    </div>

                    <div>
                        <h4 className='claim-head'>Call For Assistance</h4>
                        <p className='paragraph claim-paragraph' style={{ color: '#616E7C'}}>
                            To be connected with our roadside assistance service, Honk, just tap
                            the button in the app (or call 1-855-444-1875)
                        </p>
                    </div>
                </nav>

                <div>
                    image is coming here
                </div>
            </div>
    
            <FagQuestion style={{backgroundColor: '#F1FCFF'}} />
            <Contact />
            <NewLetter />
            <Footer />
        </React.Fragment>
    )
}


export default Claim