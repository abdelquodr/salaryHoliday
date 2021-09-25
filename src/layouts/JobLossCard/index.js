import React from "react";
import Shield from '../../assets/icons/Icon (2).png'
import CustomButton from "../../components/button";


const JoblossCard = () => {
    return(

        <div className='policy-card'>
        <div className='card-policy'>
            
            <img src={ Shield } className='img-policy-card' alt='shield' />
            <div className='word-card'>
                <div className='flex-card-policy'>
                    <div className='flex-card-policy'>
                        <h4 className='policy-card-h4'>Job Loss Insurance</h4>
                    </div>
                    <div className='flex-card-policy'>
                        <p className='policy-card-p'>Policy Number: <b>11344367</b></p>
                        <button className='active-button'>Active</button>
                    </div>
                </div>

                <div className='flex-card-policy cover-marg'>
                    <div>
                        <small className='small cover-marg'>Cover Amount</small>
                        <p className='policy-card-p'>N20,000</p>
                        <small className='small'>per month</small>
                    </div>

                    <div>
                        <small className='small'>Benefit</small>
                        <p className='policy-card-p'>N1,740,000</p>
                        <small className='small'>paid over 6 month</small>
                    </div>

                    <div>
                        <small className='small'>Amount Paid so far</small>
                        <p className='policy-card-p'>N40,000</p>
                        <small className='small'>in 2 month</small>
                    </div>

                    <div>
                        <small className='small'>Next Payment</small>
                        <p className='policy-card-p'>25, November 2021</p>
                        
                    </div>

                    <div>
                        <small className='small'>Expires on</small>
                        <p className='policy-card-p'>25, November 2021</p>
                        <small className='small'>in 14 days time</small>
                    </div>
                </div>

                <hr style={{order: '1px solid #EEEAEA'}} />
                <div className='flex-card-policy'>
                    <CustomButton children='Download Policy Document' style={{ width: '49%'}} />
                    <CustomButton children='View policy' BgColor='#214167' style={{ width: '49%'}} />
                </div>
            </div>    
        </div>    
    </div> 
    )
}


export default JoblossCard