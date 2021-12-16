import React from 'react';
import { Navigate } from 'react-router-dom';



export default function Locations() {
    const tokenString = sessionStorage.getItem('token');


    return (
        !tokenString ? <Navigate to="/login" /> :
        <React.Component>
            <h1>Welcome to location!</h1>
        </React.Component>
    )
}