import React from 'react';
import {Navigate} from 'react-router-dom';
import useToken from '../Models/Token.js';



export default function Home() {
    const tokenString = sessionStorage.getItem('token');

    
    return (
        !tokenString ? <Navigate to="/login" /> :
        <>
            <h1>Welcome Home!</h1>
        </>
    )
}