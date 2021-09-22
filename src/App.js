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
import Claim from './pages/Claim'
import Jobloss from './pages/LossJob';
import Car from './pages/Car';
import Travel from './pages/Travel';
import ProductPurchase from './pages/PurchaseProduct'


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
      </Switch>
    </Router>
    
  );
}

export default App;

