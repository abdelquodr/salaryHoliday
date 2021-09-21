import React from "react";
import Complete from "../layouts/Complete";
import CompleteKYC from "../layouts/CompleteKYC";
import MakePayment from "../layouts/MakePayment";
import PreviewPlan from "../layouts/PreviewPlan";
import TopBar from "../layouts/TopBar";

const ProductPurchase = () => {
    return (
        <React.Fragment>
            <TopBar />
            <div>
                <div>
                    <div className='overflow-purchase'>
                        <ul className='purchase-list'>
                            <li>Preview Plan</li>
                            <li>Complete KYC</li>
                            <li>Make Payment</li>
                            <li>Complete</li>
                        </ul>
                    </div>

                   <PreviewPlan />
                   <CompleteKYC />
                   <MakePayment />
                   <Complete />
                </div>
            </div>
        </React.Fragment>

    )
}


export default ProductPurchase