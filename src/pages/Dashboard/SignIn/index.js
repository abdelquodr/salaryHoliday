import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from "../../../api";
import TopBar from "../../../layouts/TopBar";

  

const SignIn = () => {

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
        Api.post('/auth/login', form_data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
            }).then((res) => {
                console.log('succeess', res)
            toast.success( res?.data?.message, {
              position: toast.POSITION.TOP_CENTER,
              theme: "colored"
            });
        }).catch((err) => {
            const error = err?.response?.data?.message
            toast.error( error, {
                position: toast.POSITION.TOP_CENTER,
                theme: 'colored'
            });

           
        })
    }


    return(
        <>
        <TopBar />
        <div className='view-background'>
            <div className='cover-card'>
                <div className='kyc-container signin-container'>
                    <h3 className='preview-header'>Welcome back, </h3>
                    <h3 className='preview-header' style={{color: '#FF7139'}}><i>Sign in to your account</i></h3>
        
                    <form onSubmit={handleSubmit} className='form-container'>
                        <div className=''>
                            <div className='preview-input-container'>
                                <small className='small'>What's your email address?</small>
                                <input onChange={handleData} name='email' type='email' placeholder='Abiola@gmail.com' />
                            </div>
                            <div className='preview-input-container'>
                                <small className='small'>password</small>
                                <input onChange={handleData} name='password' type='password' placeholder='' />
                            </div>
                        </div>

                        <div className='input-flex'>
                            <button type='submit' className='premium-button'>Sign in</button>
                        </div>
                    </form>
                    <ToastContainer />
                </div>   
            </div>
        </div>
        </>    
    )
}


export default SignIn

