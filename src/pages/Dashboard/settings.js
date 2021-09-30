import React, { useState } from "react";



const Settings = () => {

    // state 
    const [ profile, setProfile ] = useState(true)
    const [ password, setPassword ] = useState(false)
    const [ bank, setBank ] = useState(false)
 

    // handlers
    const changeTab = () => {

    }

    const handleData = () => {

    }


    const handleSubmit = () => {}


    return (
        <>
            <div className='view-background'>
                <div className='cover-card'>
                    <div className='overflow-purchase'>
                        <ul className='purchase-list '>
                            <li onClick={ changeTab}> <span  style={{ color: profile && '#FF7139'}}>Profile Detail</span></li> 
                            <li onClick={ changeTab}> <span  style={{ color: password && '#FF7139'}}>Password</span> </li> 
                            <li onClick={ changeTab}> <span  style={{ color: bank && '#FF7139'}}>Bank Detail</span></li> 
                        </ul>
                    </div>

                    {/* <form onSubmit={handleSubmit} className='form-container'>
                        <div className='input-flex'>
                            <div className='preview-input-container'>
                                <small className='small'>What's your full name</small>
                                <input onChange={handleData} name='first_name' type='text' required placeholder='Abiola usman' />
                            </div>
                            <div className='preview-input-container'>
                                <small className='small'>Email Address</small>
                                <input onChange={handleData} name='email' type='email' required placeholder='abiola@gmail.com' />
                            </div>
                        </div>

                        <div className='input-flex'>
                            <div className='preview-input-container'>
                                <small className='small'></small>
                                <input onChange={handleData} name='phone' required type='text' placeholder='Phone Number' />
                            </div>

                            <div className='input-flex' style={{ flex: '2'}}>
                                <div className='preview-input-container'>
                                    <small className='small'>Age</small>
                                    <input onChange={handleData} name='age' type='text' required placeholder='DD' />
                                </div>
                                <div className='preview-input-container'>
                                    <small className='small'>Gender</small>
                                    <input onChange={handleData} name='gender' type='text' required placeholder='male' />
                                </div>
                                <div className='preview-input-container'>
                                    <small className='small'>Marital status</small>
                                    <input onChange={handleData} name='marital_status' required placeholder='Single' />
                                </div>
                            </div>
                        </div>    

                        <button className='premium-button' >Save changes</button>
                    </form> */}




                    {/* ============== passsword =============== */}
{/* 
                    <form onSubmit={handleSubmit} className='form-container'>
                        <div className='input-flex'>
                            <div className='preview-input-container'>
                                <small className='small'>current password</small>
                                <input onChange={handleData} name='current_password' type='text' required placeholder='**********' />
                            </div>
                            <div className='preview-input-container'>
                                <small className='small'>New Password</small>
                                <input onChange={handleData} name='email' type='email' required placeholder='abiola@gmail.com' />
                            </div>
                        </div>
                        <div className='input-flex'>
                            <div className='preview-input-container'>
                                <small className='small'>Confirm New Password</small>
                                <input onChange={handleData} name='first_name' type='text' required placeholder='Abiola usman' />
                            </div>
                        </div>    
                        <button className='premium-button' >Save changes</button>
                    </form> */}


                    {/*  ====================    Bank Details  ====================== */}


                    <form onSubmit={handleSubmit} className='form-container'>
                        <div className='input-flex'>
                            <div className='preview-input-container'>
                                <small className='small'>Bank Name</small>
                                <input onChange={handleData} name='current_password' type='text' required placeholder='UBA' />
                            </div>
                            <div className='preview-input-container'>
                                <small className='small'>Account Number</small>
                                <input onChange={handleData} name='email' type='email' required placeholder='3467990034982' />
                            </div>
                        </div>
                        <div className='input-flex'>
                            <div className='preview-input-container'>
                                <small className='small'>Account Name</small>
                                <input onChange={handleData} name='first_name' type='text' required placeholder='Yakeen Habeeb' />
                            </div>
                        </div>    
                        <button className='premium-button' >Save changes</button>
                    </form>

                </div>
            </div>        
        </>
    )
}


export default Settings 