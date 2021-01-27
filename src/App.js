
import './App.css';
import LandingPage from './pages/LandingPage';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AddEventPage from './pages/AddEventPage.js';
import ActualEventPage from './pages/ActualEventPage.js';
import SignUpPage from './pages/SignUpPage';
function App() {
  return (
    
    <div className="App">
      <Router>
                <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path= "/landing" component={LandingPage} />
                <Route path="/addEvent" component ={AddEventPage} />
                <Route path ='/actualEvent' component ={ActualEventPage} />
                <Route path="/signUp" component ={SignUpPage}/>
                </Switch>
                <Redirect to="landing"/>
            </Router>
      
    </div>
  );
}

export default App;
