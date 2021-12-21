import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";




export default function Locations(zipCode) {
    const tokenString = sessionStorage.getItem('token');
    console.log("Zipcode from Locations: " + zipCode.zipCode);
    const [childZipCode, setZipCode] = useState();

    return (
        <>
            <h1>Location Renderer printing Zipcode for {zipCode.zipCode}</h1>
            <p></p>
            <Link to="/Locations" setZipCode={setZipCode}>Select a new Zipcode</Link>
        </>
    )
} 