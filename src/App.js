
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
import ClaimHistory from './pages/ClaimHistory';
import Claim from './pages/Claim'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ Home }></Route>
        <Route exact path='/about' component={ About }></Route>
        <Route exact path='/contact' component={ Contact }></Route>
        <Route exact path='/faq' component={ Faq }></Route>
        <Route exact path='/claim-history' component={ ClaimHistory }></Route>

        <Route exact path='/claim' component={ Claim}></Route> 
      </Switch>
    </Router>
  );
}

export default App;
