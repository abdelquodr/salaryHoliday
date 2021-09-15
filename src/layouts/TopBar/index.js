import Navbar from "../../components/navbar";
import Logo from '../../assets/images/salaryHolidayLogo.svg';
import Url from '../../components/navbar';
import phone from '../../assets/images/phone.svg';
import CustomButton from "../../components/button";

const list = [
    'Company -',
    'Make a claim'
]

const TopBar = () => {

    return (
        <Navbar>
            <Navbar.Logo src={ Logo } />
            <ul style={{ display: 'flex', listStyle: 'none'}}>            
                <Navbar.Item>   
                <img src={ phone } style={{ bottom: -5}} alt="phone" /> 0703-853-4829 
                </Navbar.Item>   
                <Navbar.NavbarIcon />           
            </ul>
            
            <Navbar.ListItem>
            <Navbar.Url href={ Url } /> 
                    <Navbar.Item>
                        <a style={{textDecoration: 'none'}} href="/JobLoss">Products</a>
                    </Navbar.Item> 
                    
                <Navbar.ListItem>
                { list.map((each, ind) => <Navbar.Item key={ ind + each }> { each } </Navbar.Item> )}
                </Navbar.ListItem>

                <Navbar.ListItem >
                    <Navbar.Item> Log In </Navbar.Item> 
                    <CustomButton style={{padding: '12px', fontSize: '10px'}} children="Create Account" />            
                </Navbar.ListItem>
            </Navbar.ListItem>
           
            {/* <CustomButton children="Create Account" /> */}
        </Navbar>
    )
}


export default TopBar