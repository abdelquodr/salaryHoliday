import React from "react";
  

const SignIn = () => {
    return(
            <div className='kyc-container signin-container'>
                <h3 className='preview-header'>Welcome back, </h3>
                <h3 className='preview-header' style={{color: '#FF7139'}}><i>Sign in to your account</i></h3>
    
                <form className='form-container'>
                    <div className=''>
                        <div className='preview-input-container'>
                            <small className='small'>What's your email address?</small>
                            <input placeholder='Abiola@gmail.com' />
                        </div>
                        <div className='preview-input-container'>
                            <small className='small'>password</small>
                            <input placeholder='' />
                        </div>
                    </div>

                    <div className='input-flex'>
                        <button className='premium-button'>Sign in</button>
                    </div>
                </form>
            </div>   
    )
}


export default SignIn

