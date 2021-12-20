import { useState } from 'react';

//Default function to create and get a location
export default function useLocation() {
    //Function to get a location from memory if it existss
    const getLocation = () => {
        const locationString = sessionStorage.getItem('location');
        const userLocation = JSON.parse(locationString);
        return userLocation?.locationId
    };

    //useState for locations
    const [location, setLocation] = useState(getLocation());

    //Saving a token recieved from the backend
    const saveLocation = userLocation => {
        sessionStorage.setItem('locationId', JSON.stringify(userLocation));
        setLocation(userLocation);
    };

    //Returning a location and setting the location
    return {
        setLocation: saveLocation,
        location
    }
}