import React, {useState, useEffect} from 'react'
import Navbar from "../../components/navbar";
import Logo from '../../assets/images/salaryHolidayLogo.svg'
import phone from '../../assets/images/phone.svg'
import { NavLink } from 'react-router-dom';
import '../../components/navbar/navbar.css'
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin); 


const TopBar = () => {
    // state
    const [showProduct, setShowProduct] = useState(false)
    const [showClaim, setShowClaim] = useState(false)


    // effect
    useEffect(() => {

        gsap.from(".BCLsW", {
            duration: 1,
            stagger: .5,
            opacity: 0,
            delay: 0.5
        })
    }, [])

    // handlers
    const handleProductClick = () => {
        setShowProduct( val => !val)
           // animation
        gsap.from(".eJcqdr", {
            ease: 'slow',
            x:  0,
            y: -50,
            duration: 1
        })

        gsap.from(".navbar-icon", {
            ease: 'easein',
            x:  -40,
            duration: 0.8
        })

        gsap.from('dropdown-item', {
            duration: 1,
            stagger: .3,
            opacity: 0,
            delay: 1
        })
    }

    const handlClaimClick = () => {
        setShowClaim( val => !val)
           // animation
        gsap.from(".eJcqdr", {
            ease: 'slow',
            x:  0,
            y: -50,
            duration: 1
        })

        gsap.from(".navbar-icon", {
            ease: 'easein',
            x:  -40,
            duration: 0.8
        })

        gsap.from('dropdown-item', {
            duration: 1,
            stagger: .3,
            opacity: 0,
            delay: 1
        })
    }

    return (
        <Navbar>
            <Navbar.Logo src={ Logo } />
            <ul className='navbar_logo-container'>            
                <Navbar.Item  className='align-phone' >   
                    <img src={ phone } className='navbar-icon' alt="phone" /> <span style={{paddingLeft: '8px', wordBreak: "break-all"}}>0703-853-4829 </span>
                </Navbar.Item>                    
            </ul>

            <Navbar.NavbarIcon />  

            <Navbar.ListItem>
                <Navbar.ListItem >
                        <Navbar.Item onClick={handleProductClick} > Products - </Navbar.Item> 
                    { showProduct && 
                        <div className='dropdown'>
                            <ul className='dropdown-list'>
                                <NavLink to='/car-insurance' activeStyle={{color: '#E48952'}}>
                                    <Navbar.Item className='dropdown-item'>Car Insurance</Navbar.Item>
                                </NavLink>
                                <NavLink to='/travel-insurance' activeStyle={{color: '#E48952'}}>    
                                    <Navbar.Item className='dropdown-item'>Travel Insurance</Navbar.Item>
                                </NavLink>
                                <NavLink to='/loss-job-insurance' activeStyle={{color: '#E48952'}}>
                                    <Navbar.Item className='dropdown-item'>Loss Job Insurance</Navbar.Item>
                                </NavLink>
                            </ul>
                        </div>  } 
                    <NavLink to='/company' activeStyle={{color: '#E48952'}}>     
                        <Navbar.Item > Company - </Navbar.Item> 
                    </NavLink>    

                        <NavLink to='/claim' activeStyle={{color: '#E48952'}}>
                        <Navbar.Item onClick={handlClaimClick} > Make a claim - </Navbar.Item>
                        { showClaim && 
                        <div className='dropdown'>
                            <ul className='dropdown-list'>
                                <NavLink to='/claim-history' activeStyle={{color: '#E48952'}}>
                                    <Navbar.Item className='dropdown-item'>Claim History</Navbar.Item>
                                </NavLink>
                            </ul>
                        </div>  } 
                    </NavLink> 
                </Navbar.ListItem>

                <Navbar.ListItem >
                    <Navbar.Item> Log In </Navbar.Item> 
                    <button className='navbar-button'>Create Account</button>            
                </Navbar.ListItem>
            </Navbar.ListItem>
        </Navbar>
    )
}


export default TopBar