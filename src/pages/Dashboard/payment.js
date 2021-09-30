import React from "react";


const Payment = () => {
    return (
        <>
        <div className="table-overall">
        <table className="table-two">
            <tr>
                <th className="table-link"><a className="table-links" href="/not-working">All Transactions</a></th>
                <th className="table-link"><a className="table-links" href="/not-working">Claims History</a></th>
            </tr>
            <tr className='tr-underline'>
                <th className="table-header">ID</th>
                <th className="table-header">Claim ID</th>
                <th className="table-header">Policy Number</th>
                <th className="table-header">Status</th>
                <th className="table-header">Date</th>
                <th className="table-header">Amount</th>
            </tr>
            <tr>
                <td className="table-data-color">#18368213</td>
                <td className="table-data">#JBL18368213</td>
                <td className="table-data">139837282GHW</td>
                <td className='status-data'><button className="yellow-button">Awaiting Offer</button></td>
                <td className="table-data">10/20/2021   10:10pm</td>
                <td className="table-data">N/A</td>
            </tr>
            <tr>
                <td className="table-data-color">#18368213</td>
                <td className="table-data">#JBL18368213</td>
                <td className="table-data">139837282GHW</td>
                <td className='status-data'><button className="blue-button">Offer Sent</button></td>
                <td className="table-data">10/20/2021   10:10pm</td>
                <td className="table-data">N20,000.00</td>
            </tr>
            <tr>
                <td className="table-data-color">#18368213</td>
                <td className="table-data">#JBL18368213</td>
                <td className="table-data">139837282GHW</td>
                <td className='status-data'><button className="success-button">Success</button></td>
                <td className="table-data">10/20/2021   10:10pm</td>
                <td className="table-data">N20,000.00</td>
            </tr>
            <tr>
                <td className="table-data-color">#18368213</td>
                <td className="table-data">#JBL18368213</td>
                <td className="table-data">139837282GHW</td>
                <td className='status-data'><button className="success-button">Success</button></td>
                <td className="table-data">10/20/2021   10:10pm</td>
                <td className="table-data">N20,000.00</td>
            </tr>
            <tr>
                <td className="table-data-color">#18368213</td>
                <td className="table-data">#JBL18368213</td>
                <td className="table-data">139837282GHW</td>
                <td className='status-data'><button className="success-button">Success</button></td>
                <td className="table-data">10/20/2021   10:10pm</td>
                <td className="table-data">N20,000.00</td>
            </tr>
            <tr>
                <td className="table-data-color">#18368213</td>
                <td className="table-data">#JBL18368213</td>
                <td className="table-data">139837282GHW</td>
                <td><button className="success-button">Success</button></td>
                <td className="table-data">10/20/2021   10:10pm</td>
                <td className="table-data">N20,000.00</td>
            </tr>
            <tr>
                <td className="table-data-color">#18368213</td>
                <td className="table-data">#JBL18368213</td>
                <td className="table-data">139837282GHW</td>
                <td><button className="success-button">Success</button></td>
                <td className="table-data">10/20/2021   10:10pm</td>
                <td className="table-data">N20,000.00</td>
            </tr>
            <tr>
                <td className="table-data-color">#18368213</td>
                <td className="table-data">#JBL18368213</td>
                <td className="table-data">139837282GHW</td>
                <td><button className="success-button">Success</button></td>
                <td className="table-data">10/20/2021   10:10pm</td>
                <td className="table-data">N20,000.00</td>
            </tr>
        </table>
    </div>

    {/*********************************PAGINATION SECTION *********************************/}
    
    {/* <Pagination /> */}

    <div className="pagination-nav">
        <div className="pagination-item">
            <p className="pagination-item-color">Show</p>
            <p className="pagination-items">11</p>
            <p className="pagination-item-color">from</p>
            <p className="pagination-items">36</p>
            <p className="pagination-item-color">Items</p>
        </div>
        <div className="pagination-button">
            <i class="fa fa-angle-left"></i>
            <button className="pagination-button-active">1</button>
            <button className="pagination-button-others">2</button>
            <button className="pagination-button-others">3</button>
            <i class="fa fa-angle-right"></i>
        </div>
    </div>
    </>
    )
}


export default Payment