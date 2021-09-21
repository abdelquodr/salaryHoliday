import React from "react";
import visa from '../../assets/icons/Oval.png';
import mastercard from '../../assets/icons/Mastercard.png';
import shape from '../../assets/icons/Shape.png';
import paymentTo from '../../assets/icons/payment to.png'


const MakePayment = () => {
    return (
        <div className='make-payment-div'>
            <h3 className='preview-header'>You made the right choice, kindly <span style={{color: '#FF7139'}}>provide the personal details</span> below:</h3>
            <p className='make-para'>Your premium payment will be debited from this bank or bank account.   Make sure it has enoun funds at all times to cover your payments</p>

            <div className='payment-card'>
                <div className='payment-header-card'>
                    <div>
                        <img src={mastercard} alt='mastercard' />
                        <img className='visa-img' src={visa} alt='visa' />
                    </div>
                    <p>N3520.45</p>
                </div>

                <div className='payment-card-main'>
                    <img src={shape} alt='shape' />
                    <h3>N12,000</h3>
                    <p className='small'>Insurance Payment</p>
                    <div>
                        <img src={paymentTo} alt='payment to' />
                    </div>
                </div>            
            </div>
            <div className='payment-button-div'>
                <button className='premium-button payment-button'>Make Payment</button> 
            </div>
   
        </div>
    )
}


export default MakePayment