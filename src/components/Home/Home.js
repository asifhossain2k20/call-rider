import { Button } from 'bootstrap';
import React from 'react';
import Bus from '../../components/images/Frame-1.png'
import Bike from '../../components/images/Frame-2.png'
import Tarin from '../../components/images/Group.png'
import Car from '../../components/images/Frame.png'
import './Home.css'
import { useHistory } from 'react-router-dom';
import '../../App.css'


const Home = () => {
    const history = useHistory()
    const handleRider=()=>{
            history.push('/rider')
    }
    return (
        <div style={{textAlign:'center'}} className="m-5">
            <h1>This is Home</h1>
            <button className="m-3" onClick={handleRider}>
                <div className="imgBtn">
                    <img src={Bike} alt="" />
                </div>
                <div>
                    <h2>Car</h2>
                </div>
            </button>
            <button className="m-3" onClick={handleRider}>
                <div className="imgBtn"> 
                    <img src={Bus} alt="" />
                </div>
                <div>
                    <h2>Bus</h2>
                </div>
            </button>
            <button className="m-3 mt-5" onClick={handleRider}>
                <div className="imgBtn">
                    <img src={Tarin} alt="" />
                </div>
                <div>
                    <h2>Train</h2>
                </div>
            </button>
            <button className="m-3" onClick={handleRider}>
                <div className="imgBtn">
                    <img src={Car} alt="" />
                </div>
                <div>
                    <h2>Bike</h2>
                </div>
            </button>
        </div>
    );
};

export default Home;