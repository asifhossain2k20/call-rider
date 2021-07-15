import { Button } from "bootstrap";
import React, { useContext } from "react";
import { Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { UserContext } from "../../App";
import './Header.css';

const Header = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    console.log(loggedInUser.isSignIn);
    
    return (
        <div className="container">
            <Nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home"><h3>Call Rider</h3></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div class="d-flex justify-content-end">
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    <Link className="nav-link" to="/destination">Destination</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                    {
                        
                        loggedInUser.P || loggedInUser.isSignIn ?   
                        <Link className="nav-link" to="/rider">{loggedInUser.email}</Link>
                         :   <h1></h1>
                    }
                    {
                        
                        loggedInUser.P || loggedInUser.isSignIn ?   
                        <button onClick={()=>setLoggedInUser({})}>Sign Out</button> 
                         :   <Link className="nav-link" to="/login">Login</Link>
                    }
                    
                </div>
                </div>
                </div>
            </div>
            </Nav>
            
        </div>
    );
};

export default Header;