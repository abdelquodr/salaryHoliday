import React, { useRef } from "react";
import { Waypoint } from "react-waypoint";
import approve from '../../assets/icons/image.png'


const MakeAClaim = () => {

    // state
    const leftRef = useRef()
    const rightRef = useRef()


    // animate
    const animateLeft = () => {
        leftRef.current.classList.add('animate__backInLeft')
    }

    const animateRight = () => {
        rightRef.current.classList.add('animate__backInRight')
    }

    return (
        <div className='section cal-section'>
        <Waypoint onEnter={animateLeft}>
            <div className='animate__animated claim-make' ref={leftRef}>
                <h4 className='claim-header pad-600'>Make a Claim</h4>
                <p className='paragraph loss-para'>Accidents happen which is why we are here to help you. our team is available 24/7 to resolve you claim as quickly aspossible</p>
                <div style={{display:'flex'}}>
                    <span className='circle-num'>1</span> 
                    <div className='set-1024'>
                        <h4 className='loss-head'>Fill Claim Form</h4>
                        <p className='paragraph loss-para'>Provide enough details and tell us exactly what happened.  </p>
                    </div>
                </div>

                <div style={{display:'flex'}}>
                    <span className='circle-num'>2</span> 
                    <div className='set-1024'>
                        <h4 className='loss-head'>Upload Termination Letter</h4> 
                        <p className='paragraph loss-para'>Make sure you upload the proof of job termination  </p>
                    </div>
                </div>

                <div style={{display:'flex'}}>
                    <span className='circle-num'>3</span> 
                    <div className='set-1024'>
                        <h4 className='loss-head'>Get Cashback</h4>
                        <p className='paragraph loss-para'>As soon as we review your application, you will review your insurance payment </p>
                    </div> 
                </div>
                <button className='claim-button reset'>make A Claim</button>
            </div>
            </Waypoint>
            <Waypoint onEnter={animateRight}>
                <div className='animate__animated approve-img-div' ref={rightRef}>
                    <img className='woman-img resize-600 increase-1024' src={approve} alt='approve' />
                </div>
            </Waypoint>
    </div>
    )
}


export default MakeAClaim