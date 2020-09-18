import React from 'react';
import NavBar from '../NavBar/NavBar';
import ShowCase from '../ShowCase/ShowCase';
import './home.css'
const Home = () => {
    return (
        <div className="home">
            <NavBar></NavBar>
            <ShowCase></ShowCase>
        </div>
    );
};

export default Home;