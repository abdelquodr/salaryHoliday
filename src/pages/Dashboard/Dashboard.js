import React from 'react'
import '../../dashboard.css'
import salaryHolidayLogo from '../../assets/images/salaryHolidayLogo.svg'
import ActivedashboardIcon from '../../assets/images/dashboard-icon.svg'
import dashboardIcon from '../../assets/icons/Icon(copy 1).png'
import policy from '../../assets/images/policy-icon.svg'
import ActivePolicyIcon from '../../assets/icons/Icon(copy 2).png'
import claim from '../../assets/images/claims-icon.svg'
import ActiveClaimIcon from '../../assets/icons/Icon(copy 3).png'
import document from '../../assets/images/document-icon.svg'
import ActiveDocumentIcon from '../../assets/icons/Icon(copy 4).png'
import payment from '../../assets/images/payment-icon.svg'
import ActivePaymentIcon from '../../assets/icons/Icon(copy 5).png'
import settings from '../../assets/images/settings-icon.svg'
import ActiveSettingsIcon from '../../assets/icons/Icon(copy 6).png'
import JoblossCard from '../../layouts/JobLossCard'
import JobLossDetails from '../../layouts/JobLossDetails'
import JobLossInsurance from '../../layouts/JobLossInsurance'
import { NavLink, useLocation } from 'react-router-dom'
import EmptyState from '../../layouts/EmptyState'
import MakeClaim from './make-claim'
import Document from './documents'
import Payment from './payment'
import Settings from './settings'


function ClaimHistory() {

	const location = useLocation()
	const path = location.pathname.replace('/', '')

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
                    
					<NavLink to='/dashboard' style={{ backgroundColor: path === 'dashboard' && 'rgba(255, 113, 57, 0.05)', borderRadius: '10px'}}>
						<div className="side-nav-icons">
						<img src={ path === 'dashboard' ? ActivedashboardIcon : dashboardIcon } alt="dashboard" className="side-icons" />
						<p
							className="grey-text terms-nav-items subs side-icons-para"
							role="presentation"
							// onClick={scrollTo('dsb')}
						>
							Dashboard
						</p>
						</div>
					</ NavLink>
                    
					<NavLink to='/policy' style={{ backgroundColor: path === 'policy' && 'rgba(255, 113, 57, 0.05)', borderRadius: '10px'}}>
						<div className="side-nav-icons">
						<img src={ path === 'policy' ? ActivePolicyIcon : policy} alt="policy" className="side-icons" />
						<p
							className="grey-text terms-nav-items subs side-icons-para"
							role="presentation"
							// onClick={scrollTo('mps')}
						>
							My Policies
						</p>
						</div>
					</NavLink>	

					<NavLink to='/make-claim' style={{ backgroundColor: path === 'make-claim' && 'rgba(255, 113, 57, 0.05)', borderRadius: '10px'}}>	
						<div className="side-nav-icons">
						<img src={ path === 'make-claim' ? ActiveClaimIcon : claim} alt="claim" className="side-icons" />
						<p
							className="grey-text terms-nav-items subs side-icons-para"
							role="presentation"
							// onClick={scrollTo('clm')}
						>
							Claims
						</p>
						</div>
					</NavLink>

					<NavLink to='/document' style={{ backgroundColor: path === 'document' && 'rgba(255, 113, 57, 0.05)', borderRadius: '10px'}}>		
						<div className="side-nav-icons">
						<img src={ path === 'document' ? ActiveDocumentIcon : document} alt="document" className="side-icons" />
						<p
							className="grey-text terms-nav-items subs side-icons-para"
							role="presentation"
							// onClick={scrollTo('doc')}
						>
							Documents
						</p>
						</div>
					</NavLink>

					<NavLink to='/payment' style={{ backgroundColor: path === 'payment' && 'rgba(255, 113, 57, 0.05)', borderRadius: '10px'}}>	
						<div className="side-nav-icons">
						<img src={ path === 'payment' ? ActivePaymentIcon : payment} alt="payment" className="side-icons" />
						<p
							className="grey-text terms-nav-items subs side-icons-para"
							role="presentation"
							// onClick={scrollTo('pmt')}
						>
							Payments
						</p>
						</div>
					</NavLink>

					<NavLink to='/settings' style={{ backgroundColor:  path === 'settings' && 'rgba(255, 113, 57, 0.05)', borderRadius: '10px'}}>	
						<div className="side-nav-icons">
						<img src={ path === 'settings' ? ActiveSettingsIcon : settings} alt="settings" className="side-icons" />
						<p
							className="grey-text terms-nav-items subs side-icons-para"
							role="presentation"
							// onClick={scrollTo('set')}
						>
							Settings
						</p>
						</div>
					</NavLink>		
				</div>

            
            {/************************CUSTOM BAR SECTION ********************/}
            <div className="terms-content">
                
        		{ path === 'dashboard' && <JobLossDetails />}
            	{ path === 'policy' && <JoblossCard /> }
			   	{ path === 'make-claim' && <MakeClaim /> }
				{ path === 'document' && <Document />	}   
				{ path === 'payment' && <Payment /> }
				{ path === 'settings' && <Settings /> }

                {/* <JobLossInsurance /> */}
				{/* <EmptyState /> */}
            </div>
        </div>
    </div>
    </React.Fragment>
    )
}


export default ClaimHistory