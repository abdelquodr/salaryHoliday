import React from 'react'
import Button from '../../components/button'
import verified from '../../assets/icons/Icon (2)(copy).png'
import copy from '../../assets/icons/Vector.png'
import file from '../../assets/icons/35.svg'


const JobLossDetails = () => {
    return(
            <>
                <div className="custom-nav">
                    <div className="custom-loss-icon">
                        <i class="fa fa-reply custom-icon"></i>
                        <h5>Job Loss Insurance Policy Detail</h5>
                    </div>
                    <div className="custom-button-container">
                            <Button style={customButton}>Make a Claim</Button>        
                            <Button style={customButtonOutline}>Terminate</Button>          
                    </div>
                </div>  

                <div className="flex-div">
                        <div className="client-profile">
                            <h5 className='profile-name'>Amusat Usman Abiola </h5>
                            <div className="client-details">
                                <p>Email: Hamzinating@gmail.com</p>
                                <div className="icon-para">
                                    <p className="custom-icon-margin">Policy Number: 1038293772  <img src={ copy } alt='copy' /></p>             
                                </div>
                            </div>
                        </div>

                        <div className="icon-style">
                            <img src={verified} alt='verified' />
                        </div>
                </div>

                {/********************************* FIRST TABLE SECTION ****************************/}

                <div className="table-overall">
                    <table className="table-one">
                        <tr>
                            <th className="table-header">Cover Amount</th>
                            <th className="table-header">Benefit</th>
                            <th className="table-header">Amount Paid So far</th>
                            <th className="table-header">Expires on</th>
                        </tr>
                        <tr className='table-row'>
                            <td className="table-data">N20,000</td>
                            <td className="table-data">N1,740,000</td>
                            <td className="table-data">N40,000</td>
                            <td className="table-data">25, November 2021</td>
                        </tr>

                        <tr>
                            <th className="table-header">Next Payment</th>
                            <th className="table-header">Duration</th>
                            <th className="table-header">Grade level</th>
                            <th className="table-header">Qualification</th>
                        </tr>
                        <tr>
                            <td className="table-data">27, November 2021</td>
                            <td className="table-data">6 months</td>
                            <td className="table-data">First class</td>
                            <td className="table-data">Bachelors Degree</td>
                        </tr>

                        <tr>
                            <th className="table-header"> Age</th>
                            <th className="table-header">Gender</th>
                            <th className="table-header">Marital Status</th>
                            <th className="table-header">Company Industry</th>
                        </tr>
                        <tr>
                            <td className="table-data">49</td>
                            <td className="table-data">Male</td>
                            <td className="table-data">Single</td>
                            <td className="table-data">Technology and ICT</td>
                        </tr>

                        <tr>
                            <th className="table-header">Name of Company</th>
                            <th className="table-header">Impairment</th>
                            <th className="table-header">Number of Jobs Changed</th>
                            <th className="table-header"></th>
                        </tr>
                        <tr>
                            <td className="table-data">Adekunle Silver and Co.</td>
                            <td className="table-data">None</td>
                            <td className="table-data">0</td>
                            <td className="table-data"></td>
                        </tr>
                    </table>
                </div>

                {/*************************** DOWNLOAD BAR SECTION *************************/}

                {/* <DownloadBar /> */}

                <div className="download-nav">
                    <div className="download-icon-style">
                        <img src={ file } alt='file' />
                        <h4>Download Job Loss Policy Document</h4>
                    </div>
                    <div className="download-button">
                            <Button className="download-button-color">Download</Button>        
                    </div>
                </div>

                {/***************************** SECOND TABLE SECTION ***************************/}

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



const customButton = {
    backgroundColor: '#214167', 
    padding: '18px', 
    margin: '20px',
  
  }
  
  const customButtonOutline = {
    backgroundColor: '#EBF9FF', 
    border: '1px solid orange', 
    padding: '18px', 
    color: 'orange',
  }


export default JobLossDetails