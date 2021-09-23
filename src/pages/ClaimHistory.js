import React from 'react'

import './ClaimHistory.css'
import salaryHolidayLogo from '../assets/images/salaryHolidayLogo.svg'
import dashboard from '../assets/images/dashboard-icon.svg'
import policy from '../assets/images/policy-icon.svg'
import claim from '../assets/images/claims-icon.svg'
import document from '../assets/images/document-icon.svg'
import payment from '../assets/images/payment-icon.svg'
import settings from '../assets/images/settings-icon.svg'

import Button from '../components/button'


function claimHistory() {
    const scrollTo = (id) => () => {
		const scrollToSection = document.getElementById(id);
		if (scrollToSection) {
			scrollToSection.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
				inline: 'center',
			});
		}
	};
    
    return (
        <React.Fragment>
            <div className="page-div">
                    {/*********************AVATAR SECTION *************************/}
        <div className="avatar-nav-section">
            <img src={salaryHolidayLogo} alt="claim history logo" />

            <div className="avatar-button">
                    <i class="fa fa-bell avatarbell"></i>      

                    <i class="fa fa-user-circle avataruser"></i>
            </div>
        </div>


            {/*********************** SIDE BAR SECTION ***********************/}
            <div className="terms-container">
					<div className="terms-nav-content">
                    <div className="side-nav-icons">
                    <img src={dashboard} alt="dashboard" className="side-icons" />
					<p
						className="grey-text terms-nav-items subs side-icons-para"
						role="presentation"
						onClick={scrollTo('dsb')}
					>
						Dashboard
					</p>
                    </div>
                    <div className="side-nav-icons">
                    <img src={policy} alt="policy" className="side-icons" />
					<p
						className="grey-text terms-nav-items subs side-icons-para"
						role="presentation"
						onClick={scrollTo('mps')}
					>
						My Policies
					</p>
                    </div>
                    <div className="side-nav-icons clm">
                    <img src={claim} alt="claim" className="side-icons" />
					<p
						className="grey-text terms-nav-items subs side-icons-para"
						role="presentation"
						onClick={scrollTo('clm')}
					>
						Claims
					</p>
                    </div>
                    <div className="side-nav-icons">
                    <img src={document} alt="document" className="side-icons" />
					<p
						className="grey-text terms-nav-items subs side-icons-para"
						role="presentation"
						onClick={scrollTo('doc')}
					>
						Documents
					</p>
                    </div>
                    <div className="side-nav-icons">
                    <img src={payment} alt="payment" className="side-icons" />
					<p
						className="grey-text terms-nav-items subs side-icons-para"
						role="presentation"
						onClick={scrollTo('pmt')}
					>
						Payments
					</p>
                    </div>
                    <div className="side-nav-icons">
                    <img src={settings} alt="settings" className="side-icons" />
					<p
						className="grey-text terms-nav-items subs side-icons-para"
						role="presentation"
						onClick={scrollTo('set')}
					>
						Settings
					</p>
                    </div>
                    <button class="icon">
                        <i class="fa fa-bars"></i>
                    </button>
				</div>

            
            {/************************CUSTOM BAR SECTION ********************/}
            <div className="terms-content">
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
                            <h5>Amusat Usman Abiola </h5>
                            <div className="client-details">
                                <p>Email: Hamzinating@gmail.com</p>
                                <div className="icon-para">
                                    <p className="custom-icon-margin">Policy Number: 1038293772</p>
                                    <i class="fa fa-comment-o"></i>
                                </div>
                            </div>
                        </div>

                        <div className="icon-style">
                            <i class="fa fa-check-circle"></i>
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
                    <tr>
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
                    <i class="fa fa-file-text-o download-icons-style"></i>
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
                    <tr>
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
                        <td><button className="yellow-button">Awaiting Offer</button></td>
                        <td className="table-data">10/20/2021   10:10pm</td>
                        <td className="table-data">N/A</td>
                    </tr>
                    <tr>
                        <td className="table-data-color">#18368213</td>
                        <td className="table-data">#JBL18368213</td>
                        <td className="table-data">139837282GHW</td>
                        <td><button className="blue-button">Offer Sent</button></td>
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
            </div>
            </div>
        </div>
        </React.Fragment>
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

export default claimHistory