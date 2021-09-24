import React from "react";
import emptyPic from '../../assets/icons/solid_II 0.png'

const EmptyState = () => {
    return (
        <div className='complete-div'>
            <div className='align-center'>
                <img src={emptyPic} alt='lock' className='lock-img' />
            </div>
            <p className='make-para'>Ooops. you don't have any policy at the moment</p>
            <div className='complete-button'>
                <button className='premium-button'>Buy Cover</button>
            </div>
        </div>
    )
}


export default EmptyState