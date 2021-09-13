import Navbar from "../../components/navbar";
import Logo from '../../assets/images/salaryHolidayLogo.svg'
import phone from '../../assets/images/phone.svg'
import CustomButton from "../../components/button";
import '../../components/navbar/navbar.css'

const list = [
    'Products -',
    'Company -',
    'Make a claim'
]

const TopBar = () => {

    return (
        <Navbar>
            <Navbar.Logo src={ Logo } />
            <ul className='navbar_logo-container'>            
                <Navbar.Item  className='align-phone' >   
                    <img src={ phone } className='navbar-icon' alt="phone" /> <span style={{paddingLeft: '8px', wordBreak: "break-all"}}>0703-853-4829 </span>
                </Navbar.Item>                    
            </ul>

            <Navbar.NavbarIcon />  

            <Navbar.ListItem>
                <Navbar.ListItem >
                { list.map((each, ind) => <Navbar.Item key={ ind + each }> { each } </Navbar.Item> )}
                </Navbar.ListItem>

                <Navbar.ListItem >
                    <Navbar.Item> Log In </Navbar.Item> 
                    <button className='navbar-button'>Create Account</button>            
                </Navbar.ListItem>
            </Navbar.ListItem>
           
            {/* <CustomButton children="Create Account" /> */}
        </Navbar>
    )
}


export default TopBar