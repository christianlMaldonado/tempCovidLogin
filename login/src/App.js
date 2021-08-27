import './App.css';
import NavMenu from "./Components/NavMenu";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SelfCheck from './Pages/SelfCheck';
import CountySites from './Pages/CountySites';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Pages/Test';

function App() {
  return (
    <>
      <Router> 
        <NavMenu />
        <Switch> 
        
          <Route path='/' exact component={Home} />
          <Route path='/SelfCheck' component={SelfCheck} />
          <Route path='/CountySites' component={CountySites} />
          <Route path='/Test' component={Form} /> 

        </Switch>
      </Router>
      
    </>
  );
}

export default App;
