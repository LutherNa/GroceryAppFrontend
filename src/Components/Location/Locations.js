import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.js';


// function LocationsRenderer(zipCode) {
//     const tokenString = sessionStorage.getItem('token');
//     console.log("Zipcode from Locations: " + zipCode.zipCode);
//     const [renderLocations, setRenderLocations] = useState();

//     const switchState = () => {
//         console.log(renderLocations);
//         setPreZipCode("")
//     }

//     return (
//         <>
//             <h1>Location Renderer printing Zipcode for {zipCode.zipCode}</h1>
//             <p></p>
//             <button onClick={switchState()} value="Reset Zip" />
//         </>
//     )
// } 


export default function Locations() {
    const tokenString = sessionStorage.getItem('token');
    const [zipCode, setZipCode] = useState();
    const [preZipCode, setPreZipCode] = useState();
    const [renderLocations, setRenderLocations] = useState();

    //Functionality of the button used to submit Zipcode information
    const submitButton = e => {
        e.preventDefault();
        console.log(preZipCode);
        setZipCode(preZipCode);
        console.log(zipCode);
        setRenderLocations(true);
        console.log(preZipCode);
    }
        
    const switchState = () => {
        console.log(renderLocations);
        setPreZipCode("")
    }

    function LocationsRenderer(zipCode) {
        const tokenString = sessionStorage.getItem('token');
        console.log("Zipcode from Locations: " + zipCode.zipCode);
    
        return (
            <>
                <h1>Location Renderer printing Zipcode for {zipCode.zipCode}</h1>
                <p></p>
                <button onClick={switchState()} value="Reset Zipcode" />
            </>
        )
    } 

    return (
        !tokenString ? <Navigate to="/login" /> ://Load the page WITHOUT location renderer IFF zipcode is empty
        <>
            <Navbar />
            {!renderLocations&&<>
                <h1>Welcome to location!</h1>
                <form onSubmit={submitButton}>
                    <label>
                        <p>Your Zipcode?</p>
                        <input type="text" onChange={e => setPreZipCode(e.target.value)} />
                    </label>
                    <div className="button">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </>}
            {renderLocations&& <> 
                <h1>Welcome to the location renderer!</h1>
                <LocationsRenderer zipCode={zipCode} />
            </>}
        </> 
    )
}

