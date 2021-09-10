import React from "react";
import CustomButton from "../../components/button";
import { theme } from "../../components/GlobalStyle";
import Jumbotron from "../../components/jumbotron";


const Header = ({children, restProp}) => {
    return (
        <Jumbotron>
            <Jumbotron.JumboA>
                <h5 style={header }>Simplifying <span>Insurance</span> one policy at a time. </h5>
                <p style={paragragraph}>The foremost insurance aggregator and a leading fintech player. Customer first and sustanced profitability for entire insurance ecosystem</p>
                <CustomButton BgColor={theme.color.blue} style={{ fontSize: '10px', padding: '10px 12px'}} children='create a free account' />
            </Jumbotron.JumboA>
            <Jumbotron.JumboB>
               <Jumbotron.JumboBTop>
                    <p style={{margin: '0', fonWeight: 'normal', fontSize: '12px' }}>Get cover from Job Loss</p>
                    <h4 style={{margin: '0', padding: '13px', color: 'white'}}>Learn More</h4>
               </Jumbotron.JumboBTop>
               <Jumbotron.JumboBDown>
                    <p style={{margin: '0', fonWeight: 'normal', fontSize: '12px' }}>Travelling soon? get covered!</p>
                    <h4 style={{margin: '0', padding: '13px', color: 'white'}}>Buy Cover</h4>
               </Jumbotron.JumboBDown>
            </Jumbotron.JumboB>
        </Jumbotron>
    )
}


const header = {
    fontSize:'24px',
    fontWeight: 'normal',
    
}

const paragragraph = {
    fontSize: '10px',
    lineHeight: '18px'
}

export default Header