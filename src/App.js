import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact';
import Faq from './pages/faq'
import Dashboard from './pages/Dashboard/Dashboard';
import Claim from './pages/Claim'
import Jobloss from './pages/LossJob';
import Car from './pages/Car';
import Travel from './pages/Travel';
import ProductPurchase from './pages/PurchaseProduct';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from './pages/Dashboard/SignIn';
import SignUp from './pages/Dashboard/SignUp';
import Settings from './pages/Dashboard/payment'
import 'animate.css'

function App(props) {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ Home }></Route>
        <Route exact path='/about' component={ About }></Route>
        <Route exact path='/contact' component={ Contact }></Route>
        <Route exact path='/faq' component={ Faq }></Route>
        <Route exact path='/claim' component={ Claim}></Route> 
        <Route exact path='/jobloss-insurance' component={ Jobloss } ></Route>
        <Route exact path='/car-insurance' component={ Car }></Route>
        <Route exact path='/travel-insurance' component={ Travel }></Route>
        <Route exact path='/product-purchase' component={ ProductPurchase }></Route>
        <Route exact path='/dashboard' component={ Dashboard }></Route>
        <Route exact path='/policy' component={ Dashboard }></Route>
        <Route exact path='/make-claim' component={ Dashboard }></Route>
        <Route exact path='/settings' component={ Dashboard }></Route>
        <Route exact path='/document' component={ Dashboard }></Route>
        <Route exact path='/payment' component={ Dashboard }></Route>
        <Route exact path='/auth/login' component={ SignIn }></Route> 
        <Route exact path='/auth/register' component={ SignUp }></Route>
      </Switch>
      <ToastContainer />
    </Router>
    
  );
}

export default App;

