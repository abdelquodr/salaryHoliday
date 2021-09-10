
import React from 'react'
import CustomButton from '../../components/button'
import Contact from '../../components/contact'
import { theme } from '../../components/GlobalStyle'

const NewLetter = () => {
    return (
        <React.Fragment>
              <div>
             <h3 style={{textAlign: 'center', fontSize: '15px', margin: '40px 0 0 0' }}>Subscribe to our newsletter to get updated</h3>
             <Contact.ContactText style={{ textAlign: 'center', fontSize: '11px', padding: '0 60px', color: theme.color.black }}> Get our latest update on your inbox. with lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</Contact.ContactText>
         </div>
         <div>
             <div style={{textAlign: 'center'}}>
                 <input placeholder='Enter email address' style={inputStyle} />
                 <CustomButton space="12px 40px" style={{borderRadius:'0 5px 5px 0'}} children="Buy Now" />
                 <p><small> We don't spam at all, our promise!</small></p>
             </div>          
         </div>
        </React.Fragment>
      
    )
}


const inputStyle = {
    borderRadius: '5px 0px 0px 5px',
    border: '1px solid gray',
    padding: '8px',
    fontSize: '10px'
 } 


export default NewLetter