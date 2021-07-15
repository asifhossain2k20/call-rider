import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Pathway = () => {

    const [userDestination,setUserDestination]=useState({
        from:'',
        to:''
    })
    const handleDestination=(e)=>{

        if(e.target.value==='from'){
            const newUserInfo={...userDestination};
            newUserInfo[e.target.from]=e.target.value;
            setUserDestination(newUserInfo)
        }
        if(e.target.value==='to'){
            const newUserInfo={...userDestination};
            newUserInfo[e.target.to]=e.target.value;
            setUserDestination(newUserInfo)
        }
    

    }
    const history = useHistory()
    const handleClick=(e)=>{
        if(userDestination.from && userDestination.to){
            
        }

    }
    return (
       <div className="container">
        <form onSubmit={handleClick} className="border m-5 p-5 bg-light shadow" style={{ textAlign:'center'}}>
          <br />
        <input className="m-3 pe-5" type="text" onBlur={handleDestination} name="from" placeholder="From" required/>
        <br />
        <input className="m-3 pe-5" type="text" onBlur={handleDestination} name="to" placeholder="To" required/>
      
        <br />
        <input className="m-3 pe-5 align-items-center" type="submit" value="Find Ride" />
        <br />
      </form>

       </div>
    );
};

export default Pathway;