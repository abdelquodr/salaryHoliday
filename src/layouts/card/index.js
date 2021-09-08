import React from "react";
import CardContainer from "../../components/card";
import Icon1 from '../../assets/icons/icon1.svg'

const Card = () => {
    return (
       <CardContainer>
            <CardContainer.Card>
                <CardContainer.Icon src={ Icon1 } />
                <div >
                    <CardContainer.Header children='Best Quality' />
                    <CardContainer.Text children="A team of experts passionate about product management." />
                </div>          
            </CardContainer.Card>
          
            <CardContainer.Card>
                <CardContainer.Icon src={ Icon1 } />
                <div>
                    <CardContainer.Header children='Best Quality' />
                    <CardContainer.Text children="A team of experts passionate about product management." />
                </div> 
            </CardContainer.Card>

            <CardContainer.Card>
                <CardContainer.Icon src={ Icon1 } />
                <div >
                    <CardContainer.Header children='Best Quality' />
                    <CardContainer.Text children="A team of experts passionate about product management." />
                </div> 
            </CardContainer.Card>

       </CardContainer> 
    )
}

export default Card