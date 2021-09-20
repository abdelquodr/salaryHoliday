import React from 'react';
import shield from '../../assets/icons/Icon (2).png'
import customer from '../../assets/icons/Icon.png'
import computer from '../../assets/icons/Icon (3).png'


const HowItWorks = () => {
    return (
        <div className='claim-section' style={{ fontFamily: 'Public sans'}}>
        <h3 className='claim-header align-center'> How it Works</h3>
        <div className='claim-card-container'>
            <div className='claim-card'>
                <div>
                    <img className='how-it-work-icon' src={shield} alt='shield' />
                </div>
                <h4>Purchase Premium</h4>
                <p className='paragraph loss-para' style={{ color: '#616E7C'}}>
                    Sign up in 90 seconds and receive your policy document
                    with which you can claim after the wailing period.
                </p>
            </div>

            <div className='claim-card '>
                <div>
                    <img className='how-it-work-icon' src={customer} alt='customer' />
                </div>
                <h4>Make a claim</h4>
                <p className='paragraph loss-para' style={{ color: '#616E7C'}}> 
                    if you lose your job or are unable to work, you make a claim
                    and your salaryis paid monthly for 6 months.
                </p>
            </div>

            <div className='claim-card added-gap'>
            <div>
                    <img className='how-it-work-icon' src={customer} alt='customer' />
                </div>
                <h4>Get Cashback</h4>
                <p className='paragraph loss-para' style={{ color: '#616E7C'}}>
                    if you never have to make a claim, we return upto 15%
                    of your money
                </p>
            </div>
        </div>
    </div>
    )
}


export default HowItWorks