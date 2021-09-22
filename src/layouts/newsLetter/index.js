
import React from 'react'
import CustomButton from '../../components/button'


const NewLetter = () => {
    return (
        <div className="newsletter-container">
            <div>
                <h3 className="newsletter-head" >Subscribe to our newsletter to get updated</h3>
                <p className='newsletter-text' style={{color: '#0E1525'}}> 
                     Get our latest update on your inbox. with lots of unique blocks,
                     you can easily build a page without coding. Build your next consultancy 
                     website within few minutes.
                </p>
            </div>
            <div className='mail'>
                <div style={{textAlign: 'center'}}>
                    <input placeholder='Enter email address' className='newsletter-input' />
                    <CustomButton className='newsletter-button' style={{borderRadius: '0 5px 5px 0'}} space="12px 40px" children="SUBSCRIBE" />
                    <p className='newsletter-small'><small  className='newsletter-small'> We don't spam at all, our promise!</small></p>
                </div>         
            </div>
        </div>
      
    )
}




export default NewLetter