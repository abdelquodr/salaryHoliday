import React from "react";
import sorry from '../../assets/icons/Group 756.png'

const SorryCard = () => {
    return (
        <div className='complete-div'>
            <h3 className='preview-header'>Sorry</h3>
            <div className='align-center'>
                <img src={sorry} alt='lock' className='lock-img' />
            </div>
            <p className='make-para'>Thank you for your interest in Salary Holiday.</p>
            <p className='make-para'>
                Unfortunately base on the information you'vs provided to us, 
                <span style={{color: '#FF7139'}}> we are unable to offer an insurance policy </span>
                as you don't meet the underwrititng criteria.
            </p>
            <div className='complete-button'>
                <button className='premium-button'>Go to Homepage</button>
            </div>
        </div>
    )
}


export default SorryCard