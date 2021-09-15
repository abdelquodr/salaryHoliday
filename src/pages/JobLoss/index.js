import React from 'react'
import Navbar from '../../layouts/TopBar'
import { Button } from '../../components/button/button.style'
import { Card } from '../../components/card/card.style'
import Logo from '../../assets/images/salaryHolidayLogo.svg'

const JobLoss = ( ) => {
    return (
        <React.Fragment style={{width: '100vw'}}>
        <Navbar />

        {/************************** SECURE YOUR INCOME SALARY SECTION ***************************/}

        <div style={{borderRadius: '15px'}}>
            <div style={{ backgroundColor: '#E2EFFF', padding: '20px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', margin: 'auto', width: '60%', padding: '10px', height: '37vh', color: '#000'}}>
                    
                    <div style={{width: '45vw', color: '#000', padding: '25px'}}>
                        <div style={{display:'flex', textAlign: 'center', alignItems: 'center'}}>
                        <i class="fa fa-check" style={{marginRight: '10px'}}></i>
                        <h6>Job Loss Insurance</h6>
                        </div>

                        <h2><strong>Secure</strong> your <br></br> 
                            Income Salary
                        </h2>
                        <h6 style={{lineHeight: '16px'}}>
                            Get paid 75% of your monthly salary for 6 <br></br>
                        months if you lose your job or primary source <br></br>
                        of income.
                        </h6>
                    </div>

                    <div style={{width: '48vw', height: '34vh', backgroundColor: 'powderblue', padding: '25px', color: '#45BED9', borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}}>
                    
                    <div style={{width: '21vw', height: '33vh', padding: '20px', marginLeft: '20px', backgroundColor: '#fff', color: '#000', borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}}>
                        <h3 style={{margin: '15px'}}>Job Loss Insurance</h3>
                        <form style={{width: '20vw', height: '10vw', margin: '15px', color: '#000', borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}}>
                            <div style={{display: 'flex', height: '8vh'}}>
                                <div style={{width: '200px', display: 'flex', flexDirection: 'column'}}>
                                    <label style={{marginBottom: '8px'}}>Policy Number</label>
                                    <input style={{width: '90px', backgroundColor: '#eee',  height: '10px', borderRadius: '10px'}} />
                                </div>

                                <div style={{width: '200px', display: 'flex', flexDirection: 'column'}}>
                                    <label style={{marginBottom: '8px'}}>Actve Since</label>
                                    <input style={{width: '90px', backgroundColor: '#eee',  height: '10px', borderRadius: '10px'}} />
                                </div>
                            </div>

                            <div style={{display: 'flex'}}>
                            <div style={{width: '200px', display: 'flex', flexDirection: 'column'}}>
                                <label style={{marginBottom: '8px'}}>Amount Due</label>
                                    <input style={{width: '90px', backgroundColor: '#eee',  height: '10px', borderRadius: '10px'}} />
                            </div>
                            
                            <div style={{width: '200px', display: 'flex', flexDirection: 'column'}}>
                                <label style={{marginBottom: '8px'}}>Expires</label>
                                <input style={{width: '90px', backgroundColor: '#eee',  height: '10px', borderRadius: '10px'}} />
                            </div>
                            </div>
                        </form>
                    </div>
                    </div>
                  </div>   
                </div>
                
                      {/******************* JOB LOSS CALCULATOR SECTION ********************/}

                        <div style={{display: 'flex', justifyContent: 'space-around', margin: 'auto', width: '80%'}}>
                            <Card style={{padding: '30px'}}>
                                <form id="card-form" style={{padding: '10px', borderRadius: '15px'}}>
                                    <h4>Job loss Calculator</h4>
                                    <p style={{fontSize: '12px', color: 'grey'}}>What's your employment status?</p>
                                    <div>
                                        <Button style={{backgroundColor: 'transparent', border: '1px solid lightgreen', cursor: 'pointer', marginRight: '10px', textAlign: 'center', padding: '15px', width: '15vw'}}>
                                        Self Employed
                                        <i class="fa fa-check-circle" style={{fontSize: '24px', color: 'lightgreen', marginLeft: '10px', marginRight: '10px'}}></i>
                                        </Button>
                                        <Button style={{backgroundColor: 'transparent', border: '1px solid grey', cursor: 'pointer', textAlign: 'center', padding: '15px', width: '15vw'}}>
                                        Employed
                                        <i class="fa fa-circle" style={{fontSize: '24px', color: 'grey', marginLeft: '10px', marginRight: '10px'}}></i>
                                        </Button>
                                    </div>

                                    <input style={{backgroundColor: 'transparent', padding: '20px', marginTop: '10px', width: '27vw', borderRadius: '10px', color: 'grey', placeholder: "What's your monthly income?"}} />
                                    <p style={{fontSize: '8px'}}><strong>NGN</strong></p>
                                    <input style={{backgroundColor: 'transparent', padding: '20px', marginTop: '10px', width: '27vw', borderRadius: '10px', color: 'grey', placeholder: "What’s the name of your company?"}} />
                                    <p style={{fontSize: '8px'}}>Tell us your date of birth</p>

                                    <div>
                                    <select style={{width: '120px', padding: '15px', marginRight: '10px'}} name="day" id="day">
                                    <option style={{marginRight: '10px'}} value="DD">DD</option>
                                    </select>

                                    <select style={{width: '120px', padding: '15px', marginRight: '10px'}} name="month" id="month">
                                    <option style={{marginRight: '10px'}} value="MM">MM</option>
                                    </select>

                                    <select style={{width: '120px', padding: '15px', marginRight: '10px'}} name="year" id="year">
                                    <option value="YYYY">YYYY</option>
                                    </select>
                                    </div>

                                    <Button style={{fontSize: '15px', padding: '20px', width: '30vw', marginTop: '10px'}}>View Premium Breakdown</Button>
                                </form>
                            </Card>

                            <Card style={{textAlign: 'justify', marginTop: '30px', padding: '40px', lineHeight: '32px'}}>
                                <h2>Get a Premium <br></br> 
                                Package that Suit You
                                </h2>
                                <p style={{fontSize: '12px', color: 'grey'}}>
                                Get covered in minutes. View your documents, manage <br></br>
                                your details and chat to us - all on your phone. <br></br>
                                We're here whenever you need us with 24/7 live chat, <br></br>
                                and a 1 minute response time.
                                </p>
                                <p style={{fontSize: '12px', color: 'grey'}}>
                                <i class="fa fa-check-circle" style={{fontSize: '12px', color: 'lightgreen', marginRight: '10px'}}></i>
                                    Satisfaction guranteed
                                </p>
                                <p style={{fontSize: '12px', color: 'grey'}}>
                                <i class="fa fa-check-circle" style={{fontSize: '12px', color: 'lightgreen', marginRight: '10px'}}></i>
                                    Fair pricing
                                </p>
                                <p style={{fontSize: '12px', color: 'grey'}}>
                                <i class="fa fa-check-circle" style={{fontSize: '12px', color: 'lightgreen', marginRight: '10px'}}></i>
                                    Fast turnaround
                                </p>
                            </Card>
                        </div>

                            {/********************** How it Works SECTION *********************/}

                        <div style={{margin: 'auto', width: '90%'}}>
                            <h2 style={{textAlign: 'center', margin: '20px'}}>How it Works</h2>
                            <div style={{margin: '30px', padding: '30px', display: 'flex', justifyContent: 'space-between'}}>

                            <Card style={{textAlign: 'justify', width: '16vw', marginTop: '10px', padding: '10px', borderRadius: '10px',
                            boxShadow: '1px 23px 41px 26px rgba(157,164,164,0.49)',
                            webkitBoxShadow: '1px 23px 41px 26px rgba(157,164,164,0.49)',
                            mozBoxShadow: '1px 23px 41px 26px rgba(157,164,164,0.49)',
                        }}>
                                <i className="fa fa-check-circle" style={{fontSize: '12px', color: 'lightgreen', marginRight: '10px'}}></i>
                                 <h4>Purchase Premium</h4>
                                 <p style={{fontSize: '12px', color: 'grey'}}>
                                 Sign up in 90 seconds and <br></br>
                                 receive your policy document <br></br>
                                 with which you can claim after <br></br>
                                 the waiting period.
                                 </p>
                            </Card>

                            <Card style={{textAlign: 'justify', marginTop: '10px', padding: '10px', borderRadius: '10px',
                            boxShadow: '1px 23px 41px 26px rgba(157,164,164,0.49)',
                            webkitBoxShadow: '1px 23px 41px 26px rgba(157,164,164,0.49)',
                            mozBoxShadow: '1px 23px 41px 26px rgba(157,164,164,0.49)',
                        }}>
                                <i className="fa fa-check-circle" style={{fontSize: '12px', color: 'lightgreen', marginRight: '10px'}}></i>
                                 <h4>Make a Claim</h4>
                                 <p style={{fontSize: '12px', color: 'grey'}}>
                                 If you lose your job or are unable to <br></br>
                                 work, you make a claim and your <br></br>
                                 salary is paid monthly for 6 months .
                                 </p>
                            </Card>

                            <Card style={{textAlign: 'justify', marginTop: '10px', padding: '10px', borderRadius: '10px',
                            boxShadow: '1px 23px 41px 26px rgba(157,164,164,0.49)',
                            webkitBoxShadow: '1px 23px 41px 26px rgba(157,164,164,0.49)',
                            mozBoxShadow: '1px 23px 41px 26px rgba(157,164,164,0.49)',
                        }}>
                                <i className="fa fa-check-circle" style={{fontSize: '12px', color: 'lightgreen', marginRight: '10px'}}></i>
                                 <h4>Get Cashback</h4>
                                 <p style={{fontSize: '12px', color: 'grey'}}>
                                 If you never have to make a claim, <br></br>
                                 we return up to 15% of your <br></br>
                                 money.
                                 </p>
                            </Card>
                            </div>
                        </div>
                        
                        
                        {/********************** JOB LOSS INSURANCE COVERAGE SECTION ***********************/}

                        <div style={{ backgroundColor: '#FFF8F1', padding: '30px'}}>
                        <h2 style={{textAlign: 'center'}}>Job Loss Insurance Coverage</h2>
                        <div style={{display: 'flex', justifyContent: 'space-around', margin: 'auto', width: '90%', padding: '30px'}}>

                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <Card style={{width: '25vw', height: '15vh', borderRadius: '20px', textAlign: 'justify', marginTop: '10px', padding: '15px', backgroundColor: '#fff'}}>
                                <div style={{display: 'flex', textAlign: 'justify',}}>
                                <p style={{marginRight: '10px'}}>1</p>
                                <div>
                                 <h4>Business Closure</h4>
                                 <p style={{fontSize: '12px', color: 'grey'}}>
                                 This package also protects from loss of employment in the <br></br>
                                 event of the closure of your place of work. 
                                 </p>
                                </div>
                                </div>
                            </Card>

                            <Card style={{width: '25vw', height: '15vh', borderRadius: '20px',  textAlign: 'justify', marginTop: '10px', padding: '15px', backgroundColor: '#fff'}}>
                                <div style={{display: 'flex', textAlign: 'justify'}}>
                                <p style={{marginRight: '10px'}}>2</p>
                                <div>
                                 <h4>Contract Termination</h4>
                                 <p style={{fontSize: '12px', color: 'grey'}}>
                                 This package protects you from involuntary loss of employment <br></br>
                                 due to dismissal from work for reasons outside your control.
                                 </p>
                                </div>
                                </div>
                            </Card>

                            <Card style={{width: '25vw', height: '15vh', borderRadius: '20px',  textAlign: 'justify', marginTop: '10px', padding: '15px', backgroundColor: '#fff'}}>
                                <div style={{display: 'flex', textAlign: 'justify',}}>
                                <p style={{marginRight: '10px'}}>3</p>
                                <div>
                                 <h4>Disability</h4>
                                 <p style={{fontSize: '12px', color: 'grey'}}>
                                 This package protects you from loss of employment due to <br></br>
                                 accidents or health issues that result in disability. 
                                 </p>
                                </div>
                                </div>
                            </Card>
                                </div>
                                <div style={{width: '35vw', backgroundColor: 'lightgrey'}}>
                                    IMAGE COMING SOON
                                </div>
                        </div>
                        </div>

                        {/******************** MAKE A CLAIM SECTION *********************/}
                        
                        <div style={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#FFF', margin: '20px auto', width: '65%'}}>
                            <div style={{display: 'flex', flexDirection: 'column', padding: '30px', margin: '20px'}}>
                                <div>
                                 <h3><strong>Make a claim</strong></h3>
                                 <p style={{fontSize: '10px', color: 'grey'}}>
                                 Accidents happen which is why we are here to help you. Our team is <br></br>
                                 available 24/7 to resolve your claim as quickly as possible.
                                 </p>
                                </div>

                                <Card style={{borderRadius: '20px',  textAlign: 'justify', backgroundColor: '#fff'}}>
                                <div style={{display: 'flex', textAlign: 'justify'}}>
                                <p style={{marginRight: '10px'}}>2</p>
                                <div>
                                 <h6>Fill Claim Form</h6>
                                 <p style={{fontSize: '10px', color: 'grey'}}>
                                 Provide enough detail and tell us exactly what <br></br>
                                 happened. 
                                 </p>
                                </div>
                                </div>
                                </Card>

                                <Card style={{borderRadius: '20px',  textAlign: 'justify', marginTop: '5px', backgroundColor: '#fff'}}>
                                <div style={{display: 'flex', textAlign: 'justify'}}>
                                <p style={{marginRight: '10px'}}>3</p>
                                <div>
                                 <h6>Upload Termination Letter </h6>
                                 <p style={{fontSize: '10px', color: 'grey'}}>
                                 Make sure you upload the proof of job <br></br>
                                 termination 
                                 </p>
                                </div>
                                </div>
                                </Card>

                                <Card style={{borderRadius: '20px',  textAlign: 'justify', marginTop: '5px', backgroundColor: '#fff'}}>
                                <div style={{display: 'flex', textAlign: 'justify'}}>
                                <p style={{marginRight: '10px'}}>3</p>
                                <div>
                                 <h6>Get Cashback</h6>
                                 <p style={{fontSize: '10px', color: 'grey'}}>
                                 As soon as we review your application, <br></br>
                                 you will review your insurance payment
                                 </p>
                                </div>
                                </div>
                                </Card>
                                <Button style={{fontSize: '13px', padding: '18px', width: '20vw', height: '4vh', textAlign: 'center', lineHeight: '4px', marginTop: '4px'}}>Make A Claim</Button>
                            </div>


                            <div style={{margin: '120px auto', display: 'flex'}}>
                                
                                <div style={{backgroundColor: '#E6FEEB', borderRadius: '15px', height: '47vh', padding: '0 17px'}}>
                                    <Card style={{padding: '15px', backgroundColor: '#fff', borderRadius: '15px', border: '1px thin grey'}}>
                                    <img src={ Logo } style={{width: '80px'}} alt="salary holiday logo" />
                                        
                                        <div style={{backgroundColor: '#fff'}}>
                                        
                                        <h3><strong>Claim <br></br><span style={{color: '#11BFA7'}}>Approved!</span></strong></h3>
                                    
                                        <div style={{backgroundColor: '#F3F5F8', width: '17vw', height: '12vh', padding: '10px', borderRadius: '15px'}}>
                                        <Card style={{backgroundColor: '#fff', display: 'flex', padding: '13px', borderRadius: '15px', margin: '15px'}}>
                                            <i style={{backgroundColor: 'lightgreen', width: '15px', height: '10px'}}></i>
                                            <p style={{fontSize: '8px'}}>
                                            Usman Abiola <br></br>
                                            <span style={{fontSize: '7px', color: 'grey'}}>UBA Bank • 9390</span>
                                            </p>
                                            <p style={{fontSize: '8px'}}>N35,020.45</p>
                                        </Card>
                                        </div>                    
                                        </div>

                                        <form style={{display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px'}}>
                                        <input style={{backgroundColor: '#eee', marginBottom: '10px', padding: '5px', width: '15vw', borderRadius: '10px', border: 'none', color: 'grey'}} />
                                        <input style={{backgroundColor: '#eee', padding: '5px', width: '10vw', borderRadius: '10px', border: 'none', color: 'grey'}} />
                                        </form>
                                    </Card>
                                </div>
                            </div>    
                    </div>

                        {/******************* FAQS SECTION *********************/}

                            <div style={{backgroundColor: '#F1FCFF', padding: '25px'}}>
                            <h2 style={{textAlign: 'center', marginTop: '20px'}}>
                                Frequently asked questions
                            </h2>
                            <p style={{textAlign: 'center', fontSize: '10px', marginTop: '0'}}>
                                Get the best services at the lowest price
                            </p>
                            <Card style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: 'auto', width: '40%', padding: '10px', color: '#fff', textAlign: 'justify', backgroundColor: '#214167', borderRadius: '8px'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#214167'}}>
                                <h4 style={{fontSize: '12px'}}>
                                    How does website version control work? 
                                </h4>
                                <select style={{border: 'none', backgroundColor: '#214167', color: '#fff'}}>
                                <option></option>
                                </select>
                                </div>
                                <div>
                                <p style={{fontSize: '9px'}}>
                                A cloud of witnesses that hover over the cloud. Take your business to a <br></br>
                                whole new level
                                </p>
                                </div>
                            </Card>

                            <Card style={{display: 'flex', justifyContent: 'space-between', margin: '15px auto', width: '40%', marginBottom: '10px', padding: '10px', height: '5vh', outline: 'none', backgroundColor: '#fff'}}>
                            <h4 style={{fontSize: '11px'}}>
                                Can I use this without an extension? 
                            </h4>
                                <select style={{border: 'none', color: '#ccc', marginRight: '10px',}}>
                                    <option></option>
                                </select>
                            </Card>
                            
                            <Card style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px',  margin: '15px auto', width: '40%', padding: '10px', height: '5vh', outline: 'none', backgroundColor: '#fff'}}>
                            <h4 style={{fontSize: '11px'}}>
                                Why is this better than usepastel?
                            </h4>
                                <select style={{border: 'none', color: '#ccc', marginRight: '10px',}}>
                                    <option></option>
                                </select>
                            </Card>
                           
                            <Card style={{display: 'flex', justifyContent: 'space-between', margin: '15px auto', width: '40%', padding: '10px', height: '5vh', outline: 'none', backgroundColor: '#fff'}}>
                            <h4 style={{fontSize: '11px'}}>
                                How can I integrate this with github?
                            </h4>
                                <select style={{border: 'none', color: '#ccc', marginRight: '10px'}}>
                                    <option></option>
                                </select>
                            </Card>
                        </div>

                        <div style={{backgroundColor: '#214167', height: '30vh', padding: '60px', color: "#fff", display: 'flex', justifyContent: 'space-around'}}>
                            <div>
                                <h2>Have a question?</h2>
                                <p style={{fontSize: '12px'}}>
                                We’re here to help you with your queries. <br></br>
                                Please check our online channels
                                </p>
                            </div>

                            <div>
                                <a href="https://www.instagram.com/"><i class="fa fa-instagram" style={{fontSize: '24px', borderRadius: '8px', color: '#fff'}}></i></a>
                                <p><strong>Email</strong></p>
                                <p style={{fontSize: '10px', color: 'grey', lineHeight: '17px'}}>
                                Support@salaryholiday.com <br></br>
                                +2348037362672
                                </p>
                                <p style={{fontSize: '11px', color: 'orange'}}>Mail us</p>
                            </div>
                            
                            <div>
                            <i class="fa fa-comment"></i>
                                <p><strong>Socials</strong></p>
                                <p style={{fontSize: '10px', color: 'grey', lineHeight: '17px'}}>
                                If you have other questions, our social <br></br>
                                accounts are just a message away.
                                </p>
                                <p style={{fontSize: '11px', color: 'powderblue'}}>
                                    <a style={{marginRight: '15px'}} href="https://www.instagram.com/">Twitter</a> |
                                    <a style={{marginLeft: '15px', marginRight: '15px'}} href="https://www.facebook.com/">Facebook</a> |
                                    <a style={{marginLeft: '15px', marginRight: '11px'}} href="https://twitter.com/">Instagram</a>
                                </p>
                            </div>
                        </div>

                        {/******************* NEWSLETTER SECTION *****************/}

                        <div style={{margin: 'auto', width: '50%', textAlign: 'center', height: '30vh', padding: '60px'}}>
                            <div>
                                <h3>
                                Subscribe to our newsletter <br></br>
                                to get updated
                                </h3>
                                <p style={{fontSize: '8px', color: 'grey', margin: '15px', lineHeight: '15px'}}>
                                    <strong>
                                Get our latest update on your inbox. With lots of unique blocks, you <br></br>
                                can easily build a page without coding. Build your next <br></br>
                                consultancy website within few minutes.
                                </strong>
                                </p>
                                <div>
                                    <input placeholder='Enter email address' style={{padding: '8px', borderOutlineWidth: 'thin', width: '200px'}} />
                                    <Button style={{marginLeftf: '0', padding: '12px', borderTopLeftRadius: '0', borderBottomLeftRadius: '0', fontSize: '9px'}}>Subscribe</Button>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <i class='fa fa-user' style={{color: 'grey', fontSize: '8px'}}></i>
                                    <p style={{marginLeft: '10px', fontSize: '8px'}}>We don’t spam at all, our promise!</p>
                                </div>
                            </div>
                        </div>

                        {/*************** FOOTER SECTION **************/}

                        <div style={{backgroundColor: '#05101D', color: 'grey', fontSize: '12px', display: 'flex', height: '30vh', padding: '60px', justifyContent: 'space-around', lineHeight: '35px'}}>
                            <div style={{marginTop: '15px'}}>
                                <img src={Logo} alt="salary holiday logo" style={{width: '90px'}} />
                                <p>
                                We make insurance with love and <br></br>
                                passions. No doubt, really.
                                </p>
                                <span>@Copy Salary Holiday 2021</span>
                            </div>

                            <div>
                                <h4>CONTACT</h4>
                                <p>62 Opebi St, Lagos, Nigeria</p>
                                <p>sales@salaryholiday.com</p>
                                <p>+1 800 726 915273</p>
                            </div>

                            <div>
                                <h4>PRODUCTS</h4>
                                <p>Job loss Insurance </p>
                                <p>Car Insurance</p>
                                <p>Travel Insurance</p>
                            </div>
                            <div>
                                <h4>OUR COMPANY</h4>
                                <p>About us</p>
                                <p>Contact us</p>
                                <p>FAQ</p>
                                <p>Blog</p>
                            </div>
                        </div>


                <style>
                    {`
                    #card-form {
                        box-shadow: 5px -1px 2px 12px rgba(245,228,228,0.78);
                        -webkit-box-shadow: 5px -1px 2px 12px rgba(245,228,228,0.78);
                        -moz-box-shadow: 5px -1px 2px 12px rgba(245,228,228,0.78);
                        margin-bottom: 30px;
                    }
                    .footer-details {
                        
                    }
                `}
                </style>
        </div>
        </React.Fragment>
    )
}

export default JobLoss
