import './App.css';
import Home from './Pages/Home/Home/Home.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard';
import Explore from './Pages/Explore/Explore';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>

            <Route exact path='/'>
              <Home/>
            </Route>

            <Route path='/home'>
              <Home/>
            </Route>

            <Route path='/login'>
              <Login/>
            </Route>

            <Route path='/register'>
              <Register/>
            </Route>

            <Route path='/purchase/:id'>
              <Purchase></Purchase>
            </Route>

            <Route path='/dashboard'>
              <Dashboard/>
            </Route>

            <Route path='/explore'>
              <Explore/>
            </Route>


            <Route path="*">
              <NotFound/>
            </Route>

          </Switch>

      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
