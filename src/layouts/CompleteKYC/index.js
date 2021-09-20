import React from "react";


const CompleteKYC = () => {
    return(
            <div>
                <h3>You made the right choice, kindly <span>provide the personal details</span> below:</h3>
    
                <div>
                    <div>
                        <div>
                            <small>what's your full name</small>
                            <input placeholder='Abiola usman' />
                        </div>
                        <div>
                            <small>Email Address</small>
                            <input placeholder='Abiola@gmail.com' />
                        </div>
                    </div>

                    <div>
                        <div>
                            <small>Password</small>
                            <input type='password' />
                        </div>
                        <div>
                            <div>
                                <small>Age</small>
                                <input type='number' placeholder='DD' />
                            </div>
                            <div>
                                <small>Gender</small>
                                <select>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Unknown</option>
                                </select>
                            </div>
                            <div>
                                <small>Marital Status</small>
                                <select>
                                    <option>Single</option>
                                    <option>Married</option>
                                </select>
                            </div>
                        </div>
                     </div>   
                    <div>
                        <div>
                            <div>
                                <small>Grade Level</small>
                                <input placeholder='eg IT,Telecom' />
                            </div>
                            <div>
                                <small>Qualification</small>
                                <input placeholder='eg Bachelor Degree' />
                            </div>
                        </div>
                        <div>
                            <small>Company Industry</small>
                            <input placeholder='' />
                        </div>
                    </div>
                    <div>
                        <div>
                            <small>Number of jobs changed in the last five years</small>
                            <input type='number' placeholder='3' />
                        </div>
                        <div>
                            <small>Inpairment (Any dusability?).if yes; kndly specify</small>
                            <input placeholder='' />
                        </div>
                    </div>

                    <div>
                        <button>Back</button>
                        <button>Complete and Make Payment</button>
                    </div>
                </div>
            </div>    
    )
}


export default CompleteKYC