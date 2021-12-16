import React from 'react';
import {Navigate} from 'react-router-dom';
import useToken from '../Models/Token.js';



export default function Locations() {
    return (
        !useToken().token? <Navigate to="/login" /> :
        <React.Component>
            <h1>Welcome to locations!</h1>
        </React.Component>
    )
}