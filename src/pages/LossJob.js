import React from 'react'
import Navbar from '../layouts/TopBar'
import FagQuestion from '../layouts/faqQuestions'
import Footer from '../components/infoFooter'
// import JobLossImg from '../assets/icons/joblossIn.png'
import JobLossImg from '../assets/icons/Group 1000002073 (1).png'
import shield from '../assets/icons/Icon (2).png'
import person from '../assets/icons/Woman.png'
import globe from '../assets/icons/globe.png'
import HowItWorks from '../layouts/HowItWork'
import checked from '../assets/icons/Icon (1)(copy 1).png'
import MakeAClaim from '../layouts/MakeAClaim'

const LossJob = (props) => {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, [props.location]);


    //   handler
    const handleData = () => {}

    const handleSubmit = () => {}

    return (
        <React.Fragment>
            <Navbar />
            <div className='loss-jumbo-container jobloss-bcg'>
                <div>
                    <p className='paragraph' style={{color: '#0E1525', fontWeight: 'bold'}}><img className='small-shield-img' src={shield} /> Job Loss Insurance</p>
                    <h3 className='loss-header'> <span style={{fontWeight: 'bold'}}>Secure </span> your Income salary</h3>
                    <p className='paragraph loss-para'>get paid 75% of your monthly salary for 6months if you lost your jib or primarysource of income</p>
                </div>
                <div className='job-loss-img-div'>
                    <img className='job-loss-img' src={JobLossImg} alt='job-loss-img' />
                </div>
            </div>

            {/* ============= JOB Loss Calaculator =================== */}
            <div class='section cal-section'>
                <div className='flex-out'>
                    <div className='calculator-div'>
                        <h4 className='paragraph align-center loss-para text-bold' style={{fontWeight: 'bold'}}> Job loss Calculator</h4>
                        <div>
                            {/* <p className='paragraph loss-para' style={{fontSize: '11px'}}>what's your employment status</p> */}
                        
                             <form onSubmit={handleSubmit} className=''>
                                <small className='small'>what's your employment status </small>
                                <div className='input-flex'>
                                    <div className='preview-input-container calculator-div-small-margin'>
                                        <small style={{color: 'transparent'}} className='small'>nothing is here </small>
                                        <input onChange={handleData} name='' value='Self Employed' type='text' required placeholder='' />
                                    </div>
                                    <div className='preview-input-container calculator-div-small-margin'>
                                        <small style={{color: 'transparent'}} className='small'>nothing is here</small>
                                        <input onChange={handleData} name='' value='Employed' type='text' required placeholder='' />
                                    </div>
                                </div>

                                <div className='input-flex'>
                                    <div className='preview-input-container calculator-div-small-margin'>
                                        <small className='small'>what's your monthly income?</small>
                                        <input onChange={handleData} name='' required type='text' placeholder='NGN' />
                                    </div>
                                </div>

                                <div className='input-flex'>
                                    <div className='preview-input-container calculator-div-small-margin'>
                                        <small className='small'>what's the name of your company?</small>
                                        <input onChange={handleData} name='gender' type='text' required placeholder='' />
                                    </div>
                                </div>

                                <small className='small'>Tell us your date of birth</small>
                                <div className='input-flex'>
                               
                                    <div className='preview-input-container calculator-div-small-margin'>
                                        <small style={{color: 'transparent'}} className='small'>nothing</small>
                                        <input onChange={handleData} name='' type='text' required placeholder='DD' />
                                    </div>
                        
                                    <div className='preview-input-container calculator-div-small-margin'>
                                        <small style={{color: 'transparent'}} className='small'>nothing</small>
                                        <input onChange={handleData} name='place_of_work' type='text' required placeholder='MM' />
                                    </div>

                                    <div className='preview-input-container calculator-div-small-margin'>
                                        <small style={{color: 'transparent'}} className='small'>nothing</small>
                                        <input onChange={handleData} name='place_of_work' type='text' required placeholder='YYYY' />
                                    </div>
                                </div>

                                <button className='claim-button'>View Premium Breakdown</button>
                            </form>
                            
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
                        <p className='paragraph loss-para'><img src={checked} alt='checked' style={{ verticalAlign: 'top'}} /> Satisfaction guaranteed</p>
                        <p className='paragraph loss-para'><img src={checked} alt='checked' style={{ verticalAlign: 'top'}} /> Fair pricing</p>
                        <p className='paragraph loss-para'><img src={checked} alt='checked' style={{ verticalAlign: 'top'}} /> Fast turnaround</p>
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
            <MakeAClaim />
          
            <FagQuestion className='lightgreen' />
            <Footer />
        </React.Fragment>    
    )
}


export default LossJob