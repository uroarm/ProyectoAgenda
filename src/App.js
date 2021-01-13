
import './App.css';
import LandingPage from './pages/LandingPage';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AddEventPage from './pages/AddEventPage.js';
import ActualEventPage from './pages/ActualEventPage.js';
function App() {
  return (
    
    <div className="App">
      <Router>
                <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path= "/landing" component={LandingPage} />
                <Route path="/addEvent" component ={AddEventPage} />
                <Route path ='/actualEvent' component ={ActualEventPage} />
                </Switch>
                <Redirect to="landing"/>
            </Router>
      
    </div>
  );
}

export default App;
