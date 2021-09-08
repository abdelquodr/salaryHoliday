import Navbar from "../../components/navbar";
import Logo from '../../assets/images/salaryHolidayLogo.svg'
import phone from '../../assets/images/phone.svg'
import CustomButton from "../../components/button";

const list = [
    'Products -',
    'Company -',
    'Make a claim'
]

const TopBar = () => {

    return (
        <Navbar>
            <Navbar.Logo src={ Logo } />
            <Navbar.ListItem>            
                <Navbar.Item>   
                <img src={ phone } style={{ bottom: -5}} alt="phone" /> 0703-853-4829 
                </Navbar.Item>              
            </Navbar.ListItem>
            <Navbar.NavbarIcon />
            <Navbar.ListItem>
               { list.map((each, ind) => <Navbar.Item key={ ind + each }> { each } </Navbar.Item> )}
            </Navbar.ListItem>

            <Navbar.ListItem >
                <Navbar.Item> Log In </Navbar.Item>             
            </Navbar.ListItem>
            <CustomButton children="Create Account" />
        </Navbar>
    )
}


export default TopBar