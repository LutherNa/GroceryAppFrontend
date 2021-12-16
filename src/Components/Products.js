import React from 'react';
import {Navigate} from 'react-router-dom';
import useToken from '../Models/Token.js';


export default function Products() {
    const tokenString = sessionStorage.getItem('token');
    const locationString = sessionStorage.getItem('locationId');
    const pageAccess = tokenString && locationString;


    return (
        !pageAccess ? <Navigate to="/login" /> :
        <>
            <h1>Welcome to products!</h1>
        </>
    )
}