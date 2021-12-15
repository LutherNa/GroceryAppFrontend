import React from 'react';
import './App.css';
import Navigate from 'react-router-dom';



export default function Home(token) {
    return (
        !userId ? <Navigate to="/login" /> :
        <React.Component>
            <h1>Welcome, {token}!</h1>
        </React.Component>
    )
}