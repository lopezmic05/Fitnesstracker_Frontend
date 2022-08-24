import React from "react";
import { Link } from "react-router-dom";
import './CSS/home.css'

const Home = () => {
    return ( 
        <div id="welcome-container">
        <h1>Welcome To FitnessTracker! <Link id='home-login' to='Login'>Please log in </Link> to begin.</h1></div>
     );
}
 
export default Home;