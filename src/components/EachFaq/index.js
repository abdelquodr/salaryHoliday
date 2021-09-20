import React from "react";

const EachFaq = ({ header, paragraph}) => {
    return (
        <div className='accordion_wrap'>
            <details>  
                <summary className='accordion_h4'>{header}</summary>  
                <p className='paragraph accordion_para align-left'>{paragraph}</p>  
            </details>
        </div>
    )
}


export default EachFaq