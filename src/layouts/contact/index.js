import Contact from '../../components/contact'
 
const ContactSection = () => {
    return (
        <Contact>
        <Contact.HeaderContainer>
            <Contact.Header> Have a question?</Contact.Header>
            <Contact.Text>we're hew to help you with your queries.</Contact.Text>
            <Contact.Text>please check our online channel</Contact.Text>
        </Contact.HeaderContainer>
        <Contact.EmailContainer>
            <Contact.ContactHeader>Email</Contact.ContactHeader>
            <Contact.ContactText>support@salaryholiday.com</Contact.ContactText>
            <Contact.ContactText>+2348037362672</Contact.ContactText>
        </Contact.EmailContainer>
        <Contact.SocialContainer>
            <Contact.ContactHeader>Socials</Contact.ContactHeader>
            <Contact.ContactText>if you have other questions, our social account are message away</Contact.ContactText>
            <Contact.ContactText>+2348037362672</Contact.ContactText>
        </Contact.SocialContainer>    
    </Contact>
    )
}

export default ContactSection