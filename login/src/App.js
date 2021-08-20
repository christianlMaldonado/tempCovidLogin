import './App.css';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SelfCheck from './Pages/SelfCheck';
import CountySite from './Pages/CountySite';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router> 
        <Navbar />
        <Switch> 
        
          <Route path='/' exact component={Home} />
          <Route path='/SelfCheck' component={SelfCheck} />
          <Route path='/CountySite' component={CountySite} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
