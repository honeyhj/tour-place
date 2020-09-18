import React, { useContext } from 'react';
import './ShowCase.css';
import Sajek from '../Image/Sajek.png';
import Sreemongol from '../Image/sundorbon.png';
import sundorbon from '../Image/Sreemongol.png';
import { PlaceContext } from '../../App';
import { Link } from 'react-router-dom';
const ShowCase = () => {
    const [places,setPlaces]= useContext(PlaceContext);
    console.log(places);
    
    return (
        <div className="ShowCase">
            <div style={{paddingLeft:'100px'}}>
                <h1 style={{fontSize:'40px',color:'white'}}>Cox's Bazar</h1>
                <p style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae totam eligendi ea, excepturi dolore itaque  </p>
                <button style={{padding:'5px 15px',background:'#F9A51A',cursor:'pointer',outline:'none',border:'none',marginTop:'10px'}}>Booking</button>
            </div>
            <div  className="place">
                {
                    places.map(singlePlace =>
                    <Link to={`/booking/${singlePlace.id}`}>
                    <div className="place-item">
                        <div className="overlay">
                            <img src={Sajek} alt=""/>
                            <h2>{singlePlace.title}</h2>
                        </div>
                    </div>
                    </Link>
                    )
                }
            </div>
        </div>
    );
};

export default ShowCase;