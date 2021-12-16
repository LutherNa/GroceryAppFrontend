import React from 'react';
import { Navigate } from 'react-router-dom';



export default function Locations() {
    const tokenString = sessionStorage.getItem('token');


    return (
        !tokenString ? <Navigate to="/login" /> :
        <>
            <h1>Welcome to location!</h1>
        </>
    )
}