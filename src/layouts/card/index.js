import React from "react";
import CardContainer from "../../components/card";
import icon1 from '../../assets/icons/Group 1000002246.png'
import icon2 from '../../assets/icons/Group 1000002245.png'
import icon3 from '../../assets/icons/Group 1000002244.png'


const Card = () => {
    return (
       <CardContainer>
            <CardContainer.Card>
                <CardContainer.Icon src={ icon1 } />
                <div className='card-wrap'>
                    <CardContainer.Header children='Best quality' />
                    <CardContainer.Text children="A team of experts passionate about product management." />
                </div>          
            </CardContainer.Card>
          
            <CardContainer.Card>
                <CardContainer.Icon src={ icon2 } />
                <div className='card-wrap'>
                    <CardContainer.Header children='Fastest delivery' />
                    <CardContainer.Text children="A team of experts passionate about product management." />
                </div> 
            </CardContainer.Card>

            <CardContainer.Card>
                <CardContainer.Icon src={ icon3 } />
                <div className='card-wrap' >
                    <CardContainer.Header children='Great support' />
                    <CardContainer.Text children="A team of experts passionate about product management." />
                </div> 
            </CardContainer.Card>

       </CardContainer> 
    )
}

export default Card