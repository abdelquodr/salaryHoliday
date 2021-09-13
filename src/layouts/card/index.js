import React from "react";
import CardContainer from "../../components/card";
import Icon1 from '../../assets/icons/icon1.svg'

const Card = () => {
    return (
       <CardContainer>
            <CardContainer.Card>
                <CardContainer.Icon src={ Icon1 } />
                <div className='card-wrap'>
                    <CardContainer.Header children='Best quality' />
                    <CardContainer.Text children="A team of experts passionate about product management." />
                </div>          
            </CardContainer.Card>
          
            <CardContainer.Card>
                <CardContainer.Icon src={ Icon1 } />
                <div className='card-wrap'>
                    <CardContainer.Header children='Fastest delivery' />
                    <CardContainer.Text children="A team of experts passionate about product management." />
                </div> 
            </CardContainer.Card>

            <CardContainer.Card>
                <CardContainer.Icon src={ Icon1 } />
                <div className='card-wrap' >
                    <CardContainer.Header children='Great support' />
                    <CardContainer.Text children="A team of experts passionate about product management." />
                </div> 
            </CardContainer.Card>

       </CardContainer> 
    )
}

export default Card