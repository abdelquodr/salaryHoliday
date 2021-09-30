import React, { useState } from "react";
import Api from "../../../api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopBar from "../../../layouts/TopBar";

const SignUp = () => {

    // state
    const [formData, setFormData] = useState({})


    // handlers
    const handleData = ({target}) => {
        const { name, type, value } = target
        setFormData((data) => ({ ...data, [name]: value}))
    }  

    const handleSubmit = (e) => {
        e.preventDefault()

        let form_data = new FormData();

        for ( var key in formData ) {
            form_data.append(key, formData[key]);
        }

        console.log(toast)
        Api.post('/auth/register', form_data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
            }).then((res) => {
                console.log('suuceess', res)
            toast.success( res?.data?.message, {
              position: toast.POSITION.TOP_CENTER,
              theme: "colored"
            });
        }).catch((err) => {
            const error = err?.response?.data?.errors;
            for(let e in error){
                toast.error( error[e][0], {
                    position: toast.POSITION.TOP_CENTER,
                    theme: 'colored'
                });
            } 
           
        })
    }



    console.log(formData)

    return(
        <>
        <TopBar />
        <div className='view-background'>
            <div className='cover-card'>
            <div className='kyc-container'>
                <h3 className='preview-header'>Get started on <span style={{color: '#FF7139'}}>Salary Holiday</span></h3>
                <p className='make-para'>Create an account to continue</p>
    
                <form onSubmit={handleSubmit} className='form-container'>
                    <div className='input-flex'>
                        <div className='preview-input-container'>
                            <small className='small'>What's your first name</small>
                            <input onChange={handleData} name='first_name' type='text' required placeholder='Abiola usman' />
                        </div>
                        <div className='preview-input-container'>
                            <small className='small'>Last name</small>
                            <input onChange={handleData} name='last_name' type='text' required placeholder='Olawale' />
                        </div>
                    </div>

                    <div className='input-flex'>
                        <div className='preview-input-container'>
                            <small className='small'>Date of Birth</small>
                            <input onChange={handleData} name='date_of_birth' required type='date' placeholder='' />
                        </div>
                        <div className='preview-input-container'>
                            <small className='small'>Email</small>
                            <input onChange={handleData} name='email' type='email' required placeholder='Abiola@gmail.com' />
                        </div>
                    </div>

                    <div className='input-flex'>
                        <div className='preview-input-container'>
                            <small className='small'>Gender</small>
                            <input onChange={handleData} name='gender' type='text' required placeholder='' />
                        </div>
                        <div className='preview-input-container'>
                            <small className='small'>Marital status</small>
                            <input onChange={handleData} name='marital_status' required placeholder='' />
                        </div>
                    </div>


                    <div className='input-flex'>
                        <div className='preview-input-container'>
                            <small className='small'>Phone</small>
                            <input onChange={handleData} name='phone' type='text' required placeholder='' />
                        </div>
             
                        <div className='preview-input-container'>
                            <small className='small'>Place of Work</small>
                            <input onChange={handleData} name='place_of_work' type='text' required placeholder='' />
                        </div>
                    </div>

                    <div className='input-flex'>
                        <div className='preview-input-container'>
                            <small className='small'>Password</small>
                            <input onChange={handleData} name='password' type='password' required placeholder='' />
                        </div>
                        <div className='preview-input-container'>
                            <small className='small'>Refferral code (optional)</small>
                            <input onChange={handleData} name='referral-code' type='text' placeholder='' />
                        </div>
                    </div>

                    <div className='input-flex'>
                        <div className='preview-input-container'>
                            <small className='small'>Address</small>
                            <input onChange={handleData} name='address' type='text' required placeholder='1, alaba str, shogunle lagos' />
                        </div>
                    </div>

                    
                    <div className='input-flex'>
                        <button type='submit' className='premium-button'>Create an account</button>
                    </div>
                </form>
                <ToastContainer />
            </div>  
            </div>
            </div>
            </>  
    )
}


export default SignUp