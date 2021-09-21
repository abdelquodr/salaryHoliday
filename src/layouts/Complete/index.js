import React from "react";
import Lock from '../../assets/icons/Lock.png'


const Complete = () => {
    return (
        <div className='complete-div'>
            <div className='align-center'>
                <img src={Lock} alt='lock' className='lock-img' />
            </div>
            <h3 className='preview-header'>Congratulations!</h3>
            <p className='make-para'>We sent an email to <span>theUserEmail@gmail.com</span></p>
            <p className='make-para'>Click confirmation link in the email to verify your account</p>
            <p className='make-para'>Your policy document will be sent in less than 24 hours</p>
            <div className='complete-button'>
                <button className='premium-button'>Sign in to your account</button>
            </div>
        </div>
    )
}


export default Complete