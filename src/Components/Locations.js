import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import APIQuery from "../Models/APIQuery";

//Constants to query the API
const tokenString = sessionStorage.getItem('token');
const apiLoginUrl = '/location'

//Axios query for location information
async function getLocation(locationId) {
    return await APIQuery.post(apiLoginUrl,
        JSON.stringify(locationId),
        {
            headers: {
                Authorization: tokenString
            }
        })
        .then(data => data.data.locationId)
}


//Location page
export default function Location({ setLocation }, userLocation) {
    //React useState to watch for a zipcode
    const [locationId, setZipCode] = useState();

    //Functionality of the button used to submit zipcode
    const submitButton = async e => {
        e.preventDefault();
        const locationData = await getLocation({
            locationId,
        });
        setLocation(locationId);
    }

    const locationString = sessionStorage.getItem('location');
    console.log(locationString)
    if (locationString) return <Navigate to="/" />

    //Returning a login page rendered in HTML
    return (
        locationString ? <Navigate to="/" /> :
            <div className="location">
                <h1>Please enter a zip code to continue</h1>
                <form onSubmit={submitButton}>
                    <label>
                        <p>Zipcode</p>
                        <input type="text" onChange={e => setZipCode(e.target.value)} />
                    </label>
                    <div className="button">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
    )
}

// Location.propTypes = {
//     setLocation: PropTypes.func.isRequired
// };