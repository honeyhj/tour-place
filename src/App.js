import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import ShowCase from './Components/ShowCase/ShowCase';
import tour from './Components/Data/tour';
import Booking from './Components/Booking/Booking';
import Search from './Components/Search/Search';
import SignUp from './Components/SignUp/SignUp';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SignIn from './Components/SignUp/SignIn';
export const PlaceContext = createContext();
export const UserContext = createContext()
function App() {
  const [places,setPlaces] = useState(tour);
const [loggedInUser,setLoggedInUser]= useState({})

  return (
    <div className="App">
      
      <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <PlaceContext.Provider value={[places,setPlaces]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/booking/:bookingId">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/search/:searchId">
            <Search></Search>
          </Route>
          <Route path="/signIn">
            <SignIn></SignIn>
          </Route>
          <Route path="/signUp">
            <SignUp></SignUp>
          </Route>
        </Switch>
      </Router>
      </PlaceContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
