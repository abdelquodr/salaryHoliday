import React from "react";
import EachFaq from "../../components/EachFaq";


const FagQuestion = ({background}) => {
    return (
        <div className='section faq-section' style={{background: `${background}`}}>
                <div className='freq-container'>
                    <h4 className='frequently'>Frequently asked question</h4>
                    <p className='freq-paragraph'>Get the best service at the lowest price</p>
                </div>

                <div class='faq'>
                    <EachFaq header='Is there age limit for signing up for this policy?' paragraph='You must be 18 years and above to apply for this scheme' />
                    <EachFaq header='If the loss of job occur before initial period of 6 month, what am i entitled to?' paragraph='A subscriber is only entitled to 90% of his tota premium contributed but not the benefit' />  
                    <EachFaq header='Is there salary limit for enrollee of loss fo employment insurance policy scheme?' paragraph='Yes. The minimum salary that can be insured is N75,000 monthly salary' />  
                    <EachFaq header='I am self-employed; can I sign up for loss of employment insurance?' paragraph='No, the scheme covers only permanent employees in a paid' /> 
                    <EachFaq header='How will my monthly premium be paid or deducted from my account?' paragraph='You will be provided a mandate form that will enable us to debit your account on an agreed date of every month.' />
                    <EachFaq header='How flexible is premium payment? Can I pay my premium on weekly, monthly quarterly bi-annually or on yearly basis?' paragraph='For convenience, we advise our subscriber (the insured) to do a monthly payment. However, the scheme is flexible for any other payment arrangement that is convenient for the insured.' />
                    <EachFaq header='If I don’t loose my job, after a long time, what do I stand to gain?' paragraph='My premium is discounted every 3 years as long as I am on the scheme.' />
                    <EachFaq header='Why is my premium different from my colleague earning the same salary?' paragraph='Your job history and job profile, among others, are some of the factors considered in premium calculations.' />
                    <EachFaq header='If I am advised to resign, how will the insurance company know that I did not resign on my own?' paragraph='It is required that, a subscriber send notification to the insurance company before tendering the resignation letter. Our claims department will handle the process further.' />
                    <EachFaq header='What happens when ANCHOR LoEIS receives my claim submission/form?' paragraph='Our team begins your claim payment process immediately.' />
                    <EachFaq header='How and when are payments made once the claim is approved?' paragraph='Claims are paid as a direct credit into your bank account on the 25th day of every month, or the next working day, if the date falls on a weekend or a public holiday.' />
                    <EachFaq header='When will ANCHOR stop paying loss of employment benefits?' paragraph='The payment will be stopped once you have another job or at the end of the 24th month, whichever comes first' />
                    <EachFaq header='On what condition(s) will ANCHOR not pay a claim?' paragraph='ANCHOR LoEIS will not pay claim when you willingly resign from your job, retire or terminated as a result of fraud.' />
                    <EachFaq header='What happens after I apply but I later decide not to continue with the scheme?' paragraph='ANCHOR LoEIS provides a 30-day grace period of free-look window where an individual can opt out of the scheme without any penalty.' />
                    <EachFaq header='How do I know if my application has been received?' paragraph='You will receive a confirmation email from us on submission of your application form' />
                    <EachFaq header='What happens if an active subscriber dies while still in employment?' paragraph='Death benefit is paid only if members die during the benefit paying period' />
                    <EachFaq header='After benefiting from this scheme and I get a new job, can I still continue on this scheme?' paragraph='Yes, you can. You will be advised on the new premium for your new job.' />
                    <EachFaq header='After benefiting from this scheme and I get a new job, can I still continue on this scheme?' paragraph='Yes, you can. You will be advised on the new premium for your new job' />
                    <EachFaq header='What happens after I apply but I later decide not to continue with the scheme?' paragraph='ANCHOR LoEIS provides a 30-day grace period of free-look window where an individual can opt out of the scheme without any penalty.' />
                    <EachFaq header='When am I qualified for benefits if claim occurs?' paragraph='You must have been on this scheme for a period not less than 6 (Six months) to benefit from the scheme.' />
                    <EachFaq header='What happens if there is job loss before the period of 6 months waiting period?' paragraph='If claim occurs before the expiration of waiting period, ANCHOR LoEIS shall refund the total premium paid less appropriate charges.' />
                </div>
            </div>

    ) 
}


export default FagQuestion
