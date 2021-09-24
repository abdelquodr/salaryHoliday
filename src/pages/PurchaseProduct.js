import React from "react";
import Complete from "../layouts/Complete";
import CompleteKYC from "../layouts/CompleteKYC";
import MakePayment from "../layouts/MakePayment";
import PreviewPlan from "../layouts/PreviewPlan";
import SignIn from "../layouts/SignIn";
import TopBar from "../layouts/TopBar";
import SorryCard from '../layouts/SorryCard'
import EmptyState from "../layouts/EmptyState";
import SignUp from "../layouts/SignUp";

const ProductPurchase = () => {
    return (
        <>
            <TopBar />
            <div className='view-background'>
                <div className='cover-card'>
                    <div className='overflow-purchase'>
                        <ul className='purchase-list'>
                            <li>Preview Plan</li>
                            <li>Complete KYC</li>
                            <li>Make Payment</li>
                            <li>Complete</li>
                        </ul>
                    </div>

                   {/* <PreviewPlan /> */}
                   {/* <CompleteKYC /> */}
                   {/* <MakePayment /> */}
                   {/* <Complete /> */}
                    {/* <SignIn /> */}
                    {/* <SorryCard /> */}
                    {/* <EmptyState /> */}
                    <SignUp />
                </div>
            </div>
        </>

    )
}


export default ProductPurchase