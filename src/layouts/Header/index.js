import React from "react";
import CustomButton from "../../components/button";
import { theme } from "../../components/GlobalStyle";
import Jumbotron from "../../components/jumbotron";
import JumboImage from '../../assets/images/jumbotron_image.png'


const Header = ({children, restProp}) => {
    return (
        <Jumbotron>
            <Jumbotron.JumboA>
                <h5 className='jumbotron-h5'>Simplifying <span style={{ color: '#E48952', fontWeight: 'bold'}}>Insurance</span> one policy at a time. </h5>
                <p className='jumbotron-para'>The foremost insurance aggregator and a leading fintech player. Customer first and sustanced profitability for entire insurance ecosystem</p>
                <CustomButton BgColor={theme.color.blue} className='jumbotron-button'  children='create a free account' />
            </Jumbotron.JumboA>
            <Jumbotron.JumboB>
               <Jumbotron.JumboBTop>
                    <p className='jumbotron-text'>Get cover from Job Loss</p>
                    <h4 className='jumbotron-h4'>Learn More</h4>
               </Jumbotron.JumboBTop>
               <Jumbotron.JumboBDown>
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