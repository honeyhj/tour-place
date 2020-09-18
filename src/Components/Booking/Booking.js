import React, {useContext, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {PlaceContext} from '../../App';
import NavBar from '../NavBar/NavBar';
import './Booking.css'
const Booking = () => {
    const {bookingId} = useParams();
    const [places,
        setPlaces] = useContext(PlaceContext);
    const selected = places.find(selectedPlace => selectedPlace.id == bookingId);
    console.log(selected);
//     const [bookingPlace,setBookingPlace]= useState(selected);
// const handleSubmit= (selected)=>{
//     console.log('click',selected);
//     setBookingPlace(selected)
// }
// console.log(bookingPlace);

    return (
        <div>
            <NavBar></NavBar>
            <div className="booking">
                <div>
                    <h1>{selected.title}</h1>
                    <p>{selected.details}</p>
                </div>
                <div className="form">
                    <form action="">
                    <div className="form-group">
                        <label htmlFor="">Origin</label><br />
                        <input type="text" name="origin" id=""/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">destination</label><br />
                        <input type="text" name="destination" id=""/>
                    </div>
                    <div className="form-group from-to">
                        <div>
                            <label htmlFor="">from</label><br />
                            <input type="text" name="from" id=""/>
                        </div>
                        <div>
                            <label htmlFor="">to</label><br />
                            <input type="text" name="to" id=""/>
                        </div>
                    </div>
                    <div className="form-group">
                        <Link to={`/search/${selected.id}`}>
                        <input type="submit" value="Start Booking" />
                        </Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;