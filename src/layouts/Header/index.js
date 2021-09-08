import React from "react";
import Jumbotron from "../../components/jumbotron";
import { JumboBTop } from "../../components/jumbotron/jumbotron.style";


const Header = ({children, restProp}) => {
    return (
        <Jumbotron>
            <Jumbotron.JumboA>
                
            </Jumbotron.JumboA>
            <Jumbotron.JumboB>
               <Jumbotron.JumboBTop>
                    <p style={{margin: '0'}}>Get cover from Job Loss</p>
                    <h4 style={{margin: '0'}}>Learn More</h4>
               </Jumbotron.JumboBTop>
               <Jumbotron.JumboBDown>
                    <p style={{margin: '0'}}>Travelling soon? get covered!</p>
                    <h4 style={{margin: '0'}}>Buy Cover</h4>
               </Jumbotron.JumboBDown>
            </Jumbotron.JumboB>
        </Jumbotron>
    )
}


export default Header