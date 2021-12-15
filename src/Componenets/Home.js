import React from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';



export default function Home(props) {
    return (
        !props ? <Navigate to="/login" /> :
        <h1>Welcome, {props}!</h1>
    )
}