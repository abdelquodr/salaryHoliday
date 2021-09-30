import React from 'react'
import JobLossImg from '../../assets/icons/Group 1000002073.png'
import shield from '../../assets/icons/Icon (2).png'
import CustomButton from '../../components/button'
import pressSystem from '../../assets/icons/Home Office.png'

const JobLossInsurance = () => {
    return (
        <>
            <div className='loss-jumbo-dashb'>
                <div>
                    <p className='paragraph' style={{color: '#0E1525', fontWeight: 'bold'}}> Job Loss Insurance</p>
                    <h3 className='loss-header-dash'> <span style={{fontWeight: 'bold'}}>Secure </span> your Income salary</h3>
                    <p className='paragraph loss-para'>get paid 75% of your monthly salary for 6months if you lost your jib or primarysource of income</p>
                </div>
                <div className='job-loss-img-div'>
                    <img className='job-loss-img-dashb' src={JobLossImg} alt='job-loss-img' />
                </div>
            </div>
            <div className='secure-dash'>
                <div >
                    <h3>Description</h3>
                    <p>
                        It's no secret that Nigeria has seen a few rocky years, with 
                        the unemployment rate hitting 23% in 2018. Even now expertlike 
                        Sen. Chris Ngige that this will only increase by 33.5% by 2020,
                        which means that more Nigerians stand a  chance to lose their jobs
                        as the new year progresses. When you have a family that depend on you,
                        the last thing you'd ever want is to lose your job through no
                        fault of your own!
                    </p>

                    <div>
                        <div className='flex-dash'>
                            <p>Who is this for ?</p>
                            <p> <b>Employed Individual</b></p>
                        </div>
                        <div className='flex-dash'> 
                            <p>Minimum Monthly Insured Salary ?</p>
                            <p> <b>N75,000</b></p>
                        </div>
                        <div className='flex-dash'>
                            <p>Maximum Monthly Insured Salary ?</p>
                            <p> <b>Not more than N500,000</b></p>
                        </div>
                        <div className='flex-dash'>
                            <p>Age Requirement</p>
                            <p> <b>Over 18years old</b></p>
                        </div>
                    </div>

                    <div className='dash-button'>
                        <CustomButton children="Buy Job Loss Cover" style={{ width: '100%', padding: '15px', fontSize: '14px' }} />
                    </div>
                </div>

                <div className=''>
                    <img src={pressSystem} alt='press system' />
                </div>
            </div>
        </>
    )
}



export default JobLossInsurance