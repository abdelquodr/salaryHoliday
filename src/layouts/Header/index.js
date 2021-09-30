import React from "react";
import CustomButton from "../../components/button";
import { theme } from "../../components/GlobalStyle";
import Jumbotron from "../../components/jumbotron";
import JumboImage from '../../assets/images/jumbotron_image.png'
import 'animate.css'


const Header = ({children, restProp}) => {


    // add animation 



    return (
        <Jumbotron>
            <Jumbotron.JumboA>
                <h5 className='animate__animated animate__lightSpeedInLeft animate__slow-2s jumbotron-h5 '>Simplifying <span className='animate__animated animate__bounceIn' style={{ color: '#E48952', fontWeight: 'bold'}}>Insurance</span> one policy at a time. </h5>
                <p className='animate__animated animate__headShake animate__delay-1s jumbotron-para'>The foremost insurance aggregator and a leading fintech player. Customer first and sustanced profitability for entire insurance ecosystem</p>
                <CustomButton BgColor={theme.color.blue} className='jumbotron-button'  children='create a free account' />
            </Jumbotron.JumboA>
            <Jumbotron.JumboB>
               <Jumbotron.JumboBTop className='animate__animated animate__fadeInUp'>
                    <p className='jumbotron-text'>Get cover from Job Loss</p>
                    <h4 className='jumbotron-h4'>Learn More</h4>
               </Jumbotron.JumboBTop>
               <Jumbotron.JumboBDown className='animate__animated animate__fadeInDown'>
                    <p className='jumbotron-text'>Travelling soon? get covered!</p>
                    <h4 className='jumbotron-h4'>Buy Cover</h4>
               </Jumbotron.JumboBDown>
            </Jumbotron.JumboB>
            <div className='jumbo_image'>
                <img src={JumboImage} alt='jumbo_image' />
            </div>
        </Jumbotron>
    )
}



export default Header