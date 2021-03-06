import './App.css';
import NavMenu from "./Components/NavMenu";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SelfCheck from './Pages/SelfCheck';
import CountySites from './Pages/CountySites';
import 'bootstrap/dist/css/bootstrap.min.css';
import DigCard from './Pages/DigCard';
import FooterPage from './Pages/Footer';

function App() {
  return (
    <>
      <Router> 
        <NavMenu />
        <Switch> 
        
          <Route path='/' exact component={Home} />
          <Route path='/SelfCheck' component={SelfCheck} />
          <Route path='/CountySites' component={CountySites} />
          <Route path='/DigCard' component={DigCard} /> 

        </Switch>
        <FooterPage />
      </Router>
      
    </>
  );
}

export default App;
