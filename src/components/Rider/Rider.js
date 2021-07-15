import { Button } from 'bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import Pathway from '../Pathway/Pathway';
import image from '../images/Map.png'

const Rider = () => {
    return (
        <div className="container">
            <h2>Enjoy your Ride</h2>
            <div class="container">
  <div class="row">
    <div class="col">
      <Pathway></Pathway>
    </div>
    <div class="col">
      <img className="img-fluid" style={{ height:"500px"}}src={image}></img>
    </div>
  </div>
</div>

        </div>
    );
};

export default Rider;