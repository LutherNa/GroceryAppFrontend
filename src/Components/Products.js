import React from 'react';
import {Navigate} from 'react-router-dom';
import useToken from '../Models/Token.js';


export default function Products() {
    return (
        !useToken().token ? <Navigate to="/login" /> :
        <React.Component>
            <h1>Welcome to products!</h1>
        </React.Component>
    )
}