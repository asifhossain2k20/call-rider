import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import Header from './components/Header/Header';
import backgroundImage from './components/images/Bg.png'
import Login from './components/Login/Login';
import Rider from './components/Rider/Rider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import './App.css'

export const UserContext=createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
       <Router>
      <div className="App">
      <Header></Header> 
        <Switch>

        <PrivateRoute path="/rider">
              <Rider />
          </PrivateRoute>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <PrivateRoute path="/destination">
            <Destination />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
