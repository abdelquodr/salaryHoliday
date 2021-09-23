import React from 'react'
import Button from '../../components/button'


const CustomBar = () => {

    
    return (
            <div style={customNavStyle}>
                <div style={customLossIconStyle}>
                    <i class="fa fa-reply" style={customIconStyle}></i>
                    <h5>Job Loss Insurance Policy Detail</h5>
                </div>
                <div style={customButtonStyle}>
                        <Button style={customButtonColorStyle}>Make a Claim</Button>        

                        <Button style={customButtonOutlineStyle}>Terminate</Button>          
                </div>
            </div>
    )
}

const customNavStyle = {
    // width: '94%',
    width: '100%',
    padding: '5px',
    display: 'flex',
    textAlign: 'center',
    backgroundColor: '#EBF9FF',
    justifyContent: 'space-around',
}

const customLossIconStyle = {
    width: '250px',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
}

const customIconStyle = {
    color: '#ccc',
}

const customButtonStyle = {
    width: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
}

const customButtonColorStyle = {
    backgroundColor: '#214167',
    padding: '18px',
    margin: '20px',
}

const customButtonOutlineStyle = {
    backgroundColor: '#EBF9FF',
    border: '1px solid orange',
    padding: '18px',
    color: 'orange',
}

export default CustomBar