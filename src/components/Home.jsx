import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return ( 
        <div>
        <h1>Welcome To FitnessTracker! <Link to='Login'>Please log in </Link> to begin.</h1></div>
     );
}
 
export default Home;