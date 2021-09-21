import React from "react";
import './preview.css'
import anchorImg from '../../assets/icons/image 2453.png'

const PreviewPlan = () => {
    return(
        <div className='preview-plan-container'>
            <h3 className='preview-header'>Based on your answers, here's the <i style={{color: '#FF7139', textDecoration: ''}}>personalized premium package</i> for you </h3>

            <div className='benefit'>
                <div>
                    <p className='benefit-P'>Benefits</p>
                    <small className='small'>Here's how much you will paid</small>            
                </div>
                <div>
                    <h4 className='plan-head'>N10,750,000</h4>
                    <small className='small'>paid over six month</small>
                </div>
            </div>

            <div className='premium-cover-div'>
                <div className='premium-flex'>
                    <p>Premium Cover</p>
                    <div className='align-right'>
                        <small className='small'>You will be paying</small>
                        <p className='premium-value'>N15,000/ <span>Month</span></p>
                    </div>
                </div>
                <div className='premium-flex'>
                    <p>Start Date</p>
                    <div className='align-right'>
                        <small className='small'>Your first payment starts</small>
                        <p className='premium-value'>10th September 2021</p>
                    </div>
                </div>
                <div className='premium-flex'>
                    <p>Duration</p>
                    <div className='align-rigt'>                              
                        <p className='premium-value'>6 Months</p>
                    </div>
                </div>
                <div className='premium-flex'>
                    <p>Product Name</p>
                    <div className='premium-value'>                              
                        <p className='premium-value'>Job Loss Insurance</p>
                    </div>
                </div>
                <div className='premium-flex'>
                    <p>Provider</p>
                    <div className='premium-value'>                              
                        <img src={anchorImg} alt='anchor' />
                    </div>
                </div>  
                <button className='premium-button' >Complete sign up to start your plan</button>
            </div>
            
        </div>
    )
}

export default PreviewPlan