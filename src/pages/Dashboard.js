import React from 'react'
import './ClaimHistory.css'
import salaryHolidayLogo from '../assets/images/salaryHolidayLogo.svg'
import dashboard from '../assets/images/dashboard-icon.svg'
import policy from '../assets/images/policy-icon.svg'
import claim from '../assets/images/claims-icon.svg'
import document from '../assets/images/document-icon.svg'
import payment from '../assets/images/payment-icon.svg'
import settings from '../assets/images/settings-icon.svg'
import JoblossCard from '../layouts/JobLossCard'
import JobLossDetails from '../layouts/JobLossDetails'


function ClaimHistory() {
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
                    <div className="side-nav-icons">
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
				</div>

            
            {/************************CUSTOM BAR SECTION ********************/}
            <div className="terms-content">
                
                {/* <JobLossDetails /> */}
                <JoblossCard />

            </div>
        </div>
    </div>
    </React.Fragment>
    )
}


export default ClaimHistory