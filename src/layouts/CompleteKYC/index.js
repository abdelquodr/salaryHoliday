import React from "react";


const CompleteKYC = () => {
    return(
            <div className='kyc-container'>
                <h3 className='preview-header'>You made the right choice, kindly <span style={{color: '#FF7139'}}>provide the personal details</span> below:</h3>
    
                <div className='form-container'>
                    <div className='input-flex'>
                        <div className='preview-input-container'>
                            <small className='small'>What's your full name</small>
                            <input placeholder='Abiola usman' />
                        </div>
                        <div className='preview-input-container'>
                            <small className='small'>Email Address</small>
                            <input placeholder='Abiola@gmail.com' />
                        </div>
                    </div>

                    <div className='input-flex'>
                        <div className='preview-input-container'>
                            <small className='small'>Password</small>
                            <input type='password' />
                        </div>
                        <div className='input-flex'>
                            <div className='preview-input-container'>
                                <small className='small'>Age</small>
                                <input type='number' placeholder='DD' />
                            </div>
                            <div className='preview-input-container'>
                                <small className='small'>Gender</small>
                                <select>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Unknown</option>
                                </select>
                            </div>
                            <div className='preview-input-container'>
                                <small className='small'>Marital Status</small>
                                <select>
                                    <option>Single</option>
                                    <option>Married</option>
                                </select>
                            </div>
                        </div>
                     </div>   
                    <div className='input-flex'>
                        <div className='input-flex'>
                            <div className='preview-input-container'>
                                <small className='small'>Grade Level</small>
                                <input placeholder='eg IT,Telecom' />
                            </div>
                            <div className='preview-input-container'>
                                <small className='small'>Qualification</small>
                                <input placeholder='eg Bachelor Degree' />
                            </div>
                        </div>
                        <div className='preview-input-container'>
                            <small className='small'>Company Industry</small>
                            <input placeholder='' />
                        </div>
                    </div>
                    <div className='input-flex'>
                        <div className='preview-input-container'>
                            <small className='small'>Number of jobs changed in the last five years</small>
                            <input type='number' placeholder='3' />
                        </div>
                        <div className='preview-input-container'>
                            <small className='small'>Inpairment (Any dusability?).if yes; kndly specify</small>
                            <input placeholder='' />
                        </div>
                    </div>

                    <div className='input-flex'>
                        <button className='premium-button' style={{backgroundColor:'#7C7D7E'}}>Back</button>
                        <button className='premium-button'>Complete and Make Payment</button>
                    </div>
                </div>
            </div>    
    )
}


export default CompleteKYC