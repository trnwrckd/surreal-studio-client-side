import './App.css';
import Home from './Pages/Home/Home/Home.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Header from './Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
            <Header></Header>
            <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/register'>
              <Register></Register>
            </Route>


            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
    </div>
  );
}

export default App;
