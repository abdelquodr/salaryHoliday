import React from "react";


const SignUp = () => {
    return(
            <div className='kyc-container'>
                <h3 className='preview-header'>Get started on <span style={{color: '#FF7139'}}>Salary Holiday</span></h3>
                <p className='make-para'>Create an account to continue</p>
    
                <div className='form-container'>
                    <div className='input-flex'>
                        <div className='preview-input-container'>
                            <small className='small'>What's your first name</small>
                            <input placeholder='Abiola usman' />
                        </div>
                        <div className='preview-input-container'>
                            <small className='small'>Last name</small>
                            <input placeholder='Abiola@gmail.com' />
                        </div>
                    </div>

                    <div className='input-flex'>
                        <div className='preview-input-container'>
                            <small className='small'>Date of Birth</small>
                            <input placeholder='Abiola usman' />
                        </div>
                        <div className='preview-input-container'>
                            <small className='small'>Phone number</small>
                            <input placeholder='Abiola@gmail.com' />
                        </div>
                    </div>

                    <div className='input-flex'>
                        <div className='preview-input-container'>
                            <small className='small'>Password</small>
                            <input placeholder='Abiola usman' />
                        </div>
                        <div className='preview-input-container'>
                            <small className='small'>Refferral code (optional)</small>
                            <input placeholder='Abiola@gmail.com' />
                        </div>
                    </div>

                    <div className='input-flex'>
                        <div className='preview-input-container'>
                            <small className='small'>Address</small>
                            <input placeholder='Abiola usman' />
                        </div>
                    </div>

                    
                    <div className='input-flex'>
                        <button className='premium-button'>Create an account</button>
                    </div>
                </div>
            </div>    
    )
}


export default SignUp