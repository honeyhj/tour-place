import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PlaceContext } from '../../App';
import './search.css';
import Rectangle26 from '../Image/Rectangle 26.png';
import Rectangle27 from '../Image/Rectangle 27.png';
import Rectangle28 from '../Image/Rectangle 28.png';
const Search = (props) => {
    const {searchId} = useParams();
    console.log(props);
    const [places,
        setPlaces] = useContext(PlaceContext);
    const selectedBooking = places.find(selectedPlace => selectedPlace.id == searchId);
    console.log(selectedBooking);
    
    return (
        <>
            <h2>Stay In {selectedBooking.title}</h2>
            <div className="search">
                <div>
                    <div className="search-a">
                    <img src={Rectangle26} alt="img" style={{width:'150px',height:'150px'}}/>
                    </div>
                    <div className="search-b">
                    <h5>{selectedBooking.HotelTitle}</h5>
                    <p>{selectedBooking.HotelStatus}</p>
                    <p>{selectedBooking.HotelDetails}</p>
                    <p>{selectedBooking.HotelCancellation}</p>
                    <span><img src="" alt=""/></span><p>{selectedBooking.HotelStar}</p>
                    </div>
                    <div className="search-a">
                    <img src={Rectangle27} alt="img" style={{width:'150px',height:'150px'}}/>
                    </div>
                    <div className="search-b">
                    <h5>{selectedBooking.HotelTitle}</h5>
                    <p>{selectedBooking.HotelStatus}</p>
                    <p>{selectedBooking.HotelDetails}</p>
                    <p>{selectedBooking.HotelCancellation}</p>
                    <span><img src="" alt=""/></span><p>{selectedBooking.HotelStar}</p>
                    </div>
                    <div className="search-a">
                    <img src={Rectangle28} alt="img" style={{width:'150px',height:'150px'}}/>
                    </div>
                    <div className="search-b">
                    <h5>{selectedBooking.HotelTitle}</h5>
                    <p>{selectedBooking.HotelStatus}</p>
                    <p>{selectedBooking.HotelDetails}</p>
                    <p>{selectedBooking.HotelCancellation}</p>
                    <span><img src="" alt=""/></span><p>{selectedBooking.HotelStar}</p>
                    </div>
                </div>
                <div>
                    map
                </div>
            </div>
        </>
    );
};

export default Search;