import './App.css';
import React from 'react';
import Home from 'Pages/HomePage/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from 'Pages/Register/Register';
import Login from 'Pages/Login/Login';
import NotFound from 'Pages/NotFound/NotFound';
import AuthProvider from 'Context/AuthProvider';
import Dashboard from 'Pages/Dashboard/Dashboard';
import Explore from 'Pages/Explore/Explore';
import Purchase from 'Pages/Purchase/Purchase';
import PrivateRoute from 'PrivateRoute/PrivateRoute';
import Art from 'Pages/Art/Art';
import ScrollToTop from 'Shared/ScrollToTop/ScrollToTop.jsx';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <ScrollToTop>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>

              <Route path='/home'>
                <Home />
              </Route>

              <Route path='/login'>
                <Login />
              </Route>

              <Route path='/register'>
                <Register />
              </Route>

              <Route path='/art'>
                <Art />
              </Route>

              <PrivateRoute path='/purchase/:id'>
                <Purchase />
              </PrivateRoute>

              <PrivateRoute path='/dashboard'>
                <Dashboard />
              </PrivateRoute>

              <Route path='/explore'>
                <Explore />
              </Route>

              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
          </ScrollToTop>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
