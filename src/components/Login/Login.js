import { useContext, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import { createUserWithEmailAndPassword, handleFbSignIn, handleGithubSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './loginManager';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faGoogle, faTwitter} from "@fortawesome/free-brands-svg-icons";
import '../../App.css'

function Login() {
  
  const [newUser,setNewUser]=useState(false);
  const [user,setUser]=useState({
    isSignIn: false,
    name:'',
    email:'',
    password:'',
    photo:''
  })
  initializeLoginFramework()

  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  const history=useHistory();
  const location=useLocation();

  let { from } = location.state || { from: { pathname: "/" }};

  const googleSignIn=()=>{
    handleGoogleSignIn()
    .then(res=>{
      handleResponse(res,true)
    })
  }

  const signOut=()=>{
    handleSignOut()
    .then(res=>{
      handleResponse(res,false)
    })

  }

  const fbSignIn =()=>{
    handleFbSignIn()
    .then(res=>{
      handleResponse(res,true)
    })
  }

  
  
  const handleBlur=(e)=>{
    let isFormValid=true;
    if(e.target.name === 'email'){
       isFormValid=/\S+@\S+\.\S+/.test(e.target.value)
      
    }
    if(e.target.name === 'password'){
      const isPasswordValid= e.target.value.length>6;
      const isPasswordNumber =/\d{1}/.test(e.target.value);
      isFormValid=isPasswordValid && isPasswordNumber;
    }
    if(isFormValid){
      const newUserInfo={...user};
      newUserInfo[e.target.name]=e.target.value;
      setUser(newUserInfo)
    }
  }
  const handleClick=(e)=>{
    if(newUser && user.email && user.password){
            createUserWithEmailAndPassword(user.name,user.email, user.password)
            .then(res=>{
              handleResponse(res, true);
            })
    }
    if(!newUser && user.email && user.password){
          signInWithEmailAndPassword(user.email, user.password)
          .then(res=>{
              handleResponse(res, true);
          })

    }

    e.preventDefault();
  }

  const handleResponse=(res,redirect)=>{
               setUser(res);
              setLoggedInUser(res);
              if(redirect){
                history.replace(from);
              }
              
  }

  return (
    <div style={{textAlign:'center'}} className="container App">
      {
        // user.isSignIn ? <button onClick={signOut}>Sign Out</button> : <button onClick={googleSignIn}>Sign In</button>
      }
      
      <h1>Login Form</h1>
      
      
      <form onSubmit={handleClick} className="border m-4 p-4 bg-light shadow" style={{ textAlign:'center'}}>
       {
         newUser && <input className="m-3 pe-5" type="text" onBlur={handleBlur} name="name" placeholder="Enter Your Name" required/>
       }
          <br />
        <input className="m-3 pe-5" type="text" onBlur={handleBlur} name="email" placeholder="Enter Your Email" required/>
       
        <br />
        <input className="m-3 pe-5" type="password" onBlur={handleBlur} name="password" placeholder="Enter Your Password" required/>
        <br />
        {
          newUser && <input className="m-3 pe-5" type="password" onBlur={handleBlur} name="password" placeholder="Enter Your Confarm Password" required/>
        }
        <br />
        <input className="m-3 pe-5" type="submit" value="Submit" />
        <br />
        <input type="checkbox" onChange={()=>setNewUser(!newUser)} name="newUser" id="" />
      <label htmlFor="newUser">New User Sign Up</label>

      </form>
     
      <p style={{color:'red'}}>{user.error}</p>
      {
        user.success && <p style={{color:'green'}}>Account {newUser ? 'Created' : 'Logged In'}</p>
      }
      
      <button className="m-2" onClick={googleSignIn}>
      <FontAwesomeIcon icon={faGoogle}/> Sign In Using Google</button>
      <br />
      {/* <button className="m-2"onClick={fbSignIn}>
      <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon> Sign In Using Github</button> */}
    </div>
    
   
  );
}

export default Login;
