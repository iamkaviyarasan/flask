import React from "react";
import { Link } from "react-router-dom";



const HomePage=()=>{
    return(
        <div className="home container">
            <h1 className="heading">welcome to Recipes</h1>
            <Link to="/signup" className="btn btn-primary btn-lg">get started</Link>
            
        </div>
    )
}   
export default HomePage;