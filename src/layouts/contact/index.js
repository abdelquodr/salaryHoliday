import Contact from '../../components/contact'
import socials from '../../assets/icons/Group 155.png'
import email from '../../assets/icons/Group 155(copy).png'
import { NavLink } from 'react-router-dom'
 
const ContactSection = () => {
    return (
        <Contact>
        <Contact.HeaderContainer>
            <Contact.Header> Have a question?</Contact.Header>
            <Contact.Text>we're hew to help you with your queries.</Contact.Text>
            <Contact.Text>please check our online channel</Contact.Text>
        </Contact.HeaderContainer>
        <Contact.EmailContainer>
            <div><img src={email} style={{width: '35px'}} alt='email' /></div>
            <Contact.ContactHeader>Email</Contact.ContactHeader>
            <Contact.ContactText>support@salaryholiday.com</Contact.ContactText>
            <Contact.ContactText>+2348037362672</Contact.ContactText>
            <Contact.ContactText style={{color: '#FFBF98'}}>Mail Us</Contact.ContactText>
        </Contact.EmailContainer>
        <Contact.SocialContainer>
            <div><img src={socials} style={{width: '35px'}} alt='socials' /></div>
            <Contact.ContactHeader>Socials</Contact.ContactHeader>
            <Contact.ContactText>If you have other questions, our social account are message away</Contact.ContactText>
            <Contact.ContactText>+2348037362672</Contact.ContactText>
            <Contact.ContactText >
                <NavLink style={{color: '#95E4F1'}} to='#'>Twitter |</NavLink> 
                <NavLink style={{color: '#95E4F1'}} to='#'>  Facebook |</NavLink> 
                <NavLink style={{color: '#95E4F1'}} to='#'>  Instagram </NavLink> 
            </Contact.ContactText>
        </Contact.SocialContainer>    
    </Contact>
    )
}

export default ContactSection