import React from 'react'
import Navbar from '../layouts/TopBar'
import FagQuestion from '../layouts/faqQuestions'
import Footer from '../components/infoFooter'
// import JobLossImg from '../assets/icons/joblossIn.png'
import JobLossImg from '../assets/icons/Group 1000002073 (1).png'
import shield from '../assets/icons/Icon (2).png'
import person from '../assets/icons/Woman.png'
import approve from '../assets/icons/image.png'
import globe from '../assets/icons/globe.png'
import HowItWorks from '../layouts/HowItWork'
import car from '../assets/icons/Group 1000002073 (2).png'
import smallCar from '../assets/icons/Icon (1).png'

const Car = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='loss-jumbo-container' style={{backgroundColor: '#FFF0E8'}}> 
                <div>
                    <p className='paragraph' style={{color: '#0E1525', fontWeight: 'bold'}}><img className='small-shield-img' src={smallCar} /> Car Insurance</p>
                    <h3 className='loss-header'>Get <span style={{fontWeight: 'bold'}}>Car Insurance </span>that works</h3>
                    <p className='paragraph loss-para'>get paid 75% of your monthly salary for 6months if you lost your jib or primarysource of income</p>
                </div>
                <div className='job-loss-img-div'>
                    <img className='job-loss-img' src={car} alt='car' />
                </div>
            </div>

            {/* ============= JOB Loss Calaculator =================== */}
            <div class='section cal-section'>
                <div className='flex-out'>
                    <div className='calculator-div'>
                        <h4 className='paragraph align-center loss-para' style={{fontWeight: 'bold'}}> Job loss Calculator</h4>
                        <div>
                            <p className='paragraph loss-para' style={{fontSize: '11px'}}>what's your employment status</p>
                            <div className='input-container'>
                                <input placeholder='Self Employed' />
                                <input placeholder='Employed' />
                            </div>
                            <div className='input-container'>
                                <input placeholder='what is your monthly income' />
                            </div>
                            <div className='input-container'>
                                <input placeholder='what is the name your company' />
                            </div>
                            <div className='input-container' >
                                <input placeholder='DD' />
                                <input placeholder='MM' />
                                <input placeholder='YYYY' />
                            </div>    
                            <button className='claim-button'>View Premium Breakdown</button>
                        </div>
                    </div>
                </div>
                <div className='flex-out'>
                    <h4 className='claim-header align-left' >
                        Get a Premium Package that Suit You
                    </h4>
                    <p className='paragraph loss-para'>
                        Get covered minutes. View your document manage your
                        details and chat to us all on your phone. We're here 
                        whenever you need us with 24/7 live chat. and 1 minute response time
                    </p>
                    <div>
                        <p className='paragraph loss-para'>Satisfaction guaranteed</p>
                        <p className='paragraph loss-para'>Fair pricing</p>
                        <p className='paragraph loss-para'>Fast turnaround</p>
                    </div>
                   
                </div>
            </div>

            <HowItWorks />

            <div className='section margin-600' style={{background: '#FFF8F1'}}>
                <h3 className='claim-header align-center'>Job Loss Insurance Coverage</h3>
                <div className='job-section'>
                    <div>    
                        <div className='job-loss-card' style={{display: 'flex'}}>
                            <span className='rounded-num'>1</span>
                            <div>
                                <h4 className='loss-head'> Fill Claim Form</h4>
                                <p className='paragraph loss-para'>This package protect you from loss of employment in the event of the closure of your place of work</p>
                            </div>
                        </div>

                        <div className='job-loss-card' style={{display: 'flex'}}>
                            <span className='rounded-num'>2</span> 
                            <div>
                                <h4 className='loss-head'>Upload Terminate Letter</h4>
                                <p className='paragraph loss-para'>This package also protect from loss of employment in the event of the closure of your place of work</p>
                            </div>
                        </div>

                        <div className='job-loss-card' style={{display: 'flex'}}>
                            <span className='rounded-num'>3</span> 
                            <div>
                                <h4 className='loss-head'>Get Cashback</h4>
                                <p className='paragraph loss-para'>This package also protect from loss of employment in the event of the closure of your place of work</p>
                            </div>
                        </div>

                    </div> 
                    <div className='woman-img-div'>
                        <img src={globe} alt='globe' />
                        <img className='woman-img' src={person} alt='woman' />
                    </div> 
              </div>
            </div>

            <div className='section cal-section'>
                {/* <div> */}
                    <div className='claim-make'>
                        <h4 className='claim-header pad-600'>Make a Claim</h4>
                        <p className='paragraph loss-para'>Accidents happen which is why we are here to help you. our team is available 24/7 to resolve you claim as quickly aspossible</p>
                        <div style={{display:'flex'}}>
                            <span className='circle-num'>1</span> 
                            <div>
                                <h4 className='loss-head'>Fill Claim Form</h4>
                                <p className='paragraph loss-para'>Provide enough details and tell us exactly what happened.  </p>
                            </div>
                        </div>

                        <div style={{display:'flex'}}>
                            <span className='circle-num'>2</span> 
                            <div>
                                <h4 className='loss-head'>Upload Termination Letter</h4> 
                                <p className='paragraph loss-para'>Make sure you upload the proof of job termination  </p>
                            </div>
                        </div>

                        <div style={{display:'flex'}}>
                            <span className='circle-num'>3</span> 
                            <div>
                                <h4 className='loss-head'>Get Cashback</h4>
                                <p className='paragraph loss-para'>As soon as we review your application, you will review your insurance payment </p>
                            </div> 
                        </div>
                        <button className='claim-button reset'>make A Claim</button>
                    </div>
                    <div className='approve-img-div'>
                        <img className='woman-img resize-600 increase-1024' src={approve} alt='approve' />
                    </div>
                {/* </div> */}
            </div>
            <FagQuestion className='lightgreen' />
            <Footer />
        </React.Fragment>    
    )
}


export default Car