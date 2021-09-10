
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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ Home }></Route>
        <Route exact path='/about' component={ About }></Route>
        <Route exact path='/contact' component={ Contact }></Route>
        <Route exact path='/faq' component={ Faq }></Route>
      </Switch>
    </Router>
  );
}

export default App;
