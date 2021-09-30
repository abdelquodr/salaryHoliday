import React, { useState } from "react";
import Complete from "../layouts/Complete";
import CompleteKYC from "../layouts/CompleteKYC";
import MakePayment from "../layouts/MakePayment";
import PreviewPlan from "../layouts/PreviewPlan";
import TopBar from "../layouts/TopBar";
import SorryCard from '../layouts/SorryCard'
import EmptyState from "../layouts/EmptyState";
import smallShield from '../assets/icons/Group 1000002124(copy).svg';
import ActiveShield from '../assets/icons/Group 1000002124.svg';
import { Link } from "react-router-dom";
;


const ProductPurchase = () => {

    const [ previewPlan, setPreviewPlan ] = useState(true)
    const [ completeKYC, setCompleteKYC ] = useState(false)
    const [ makePayment, setMakePayment ] = useState(false)
    const [ complete, setComplete ] = useState(false)

    
    const changeTab = (e) => {
      const innerWord = e.target.innerHTML
        if(innerWord === 'Preview Plan'){
            setPreviewPlan(true)
            setCompleteKYC(false)
            setMakePayment(false)
            setComplete(false)
        }else if(innerWord === 'Complete KYC'){
            setPreviewPlan(false)
            setCompleteKYC(true)
            setMakePayment(false)
            setComplete(false)
        }else if(innerWord === 'Make Payment'){
            setPreviewPlan(false)
            setCompleteKYC(false)
            setMakePayment(true)
            setComplete(false)
        }else if(innerWord === 'Complete'){
            setPreviewPlan(false)
            setCompleteKYC(false)
            setMakePayment(false)
            setComplete(true)
        }else{
            setPreviewPlan(true)
        }
    }

    return (
        <>
            <TopBar />
            <div className='view-background'>
                <div className='cover-card'>
                    <div className='overflow-purchase'>
                        <ul className='purchase-list'>
                            <li onClick={ changeTab}><img className='sm-shield' src={ previewPlan ? ActiveShield : smallShield } alt='small shield' /> <span  style={{ color: previewPlan && '#FF7139'}}>Preview Plan</span></li> /
                            <li onClick={ changeTab}><img className='sm-shield' src={ completeKYC ? ActiveShield : smallShield } alt='small shield' /> <span  style={{ color: completeKYC && '#FF7139'}}>Complete KYC</span> </li> /
                            <li onClick={ changeTab}><img className='sm-shield' src={ makePayment ? ActiveShield : smallShield } alt='small shield' /> <span  style={{ color: makePayment && '#FF7139'}}>Make Payment</span></li> /
                            <li onClick={ changeTab}><img className='sm-shield' src={ complete ? ActiveShield : smallShield } alt='small shield' /> <span  style={{ color: complete && '#FF7139'}}>Complete</span> </li>
                        </ul>
                    </div>

                    { previewPlan && <PreviewPlan /> }
                    { completeKYC && <CompleteKYC /> }
                    { makePayment && <MakePayment /> }
                    { complete && <Complete />}
                    {/* <SorryCard /> */}
                   
                </div>
            </div>
        </>

    )
}

 
export default ProductPurchase