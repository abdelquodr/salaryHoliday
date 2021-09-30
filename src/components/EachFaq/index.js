import React from "react";
import arrowSign from '../../assets/icons/Vector(copy).png'

const EachFaq = ({ header, paragraph}) => {
    return (
        <div className='accordion_wrap'>
            <details>  
                <summary style={{display: 'flex', justifyContent: 'space-between'}} className='accordion_h4'>
                     <span>{header}</span>  
                     <img width='20px' height='10px' style={{margin: 'auto 0'}} src={arrowSign} alt='arrow sign' />
                </summary>  
                <p className='paragraph accordion_para align-left'>{paragraph}</p>  
            </details>
        </div>
    )
}


export default EachFaq  