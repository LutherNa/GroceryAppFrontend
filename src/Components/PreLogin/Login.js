import axios from "axios";
import React, { useState } from "react";
//import './User.css';
import PropTypes from 'prop-types';
import {useNavigate, Navigate, Link} from 'react-router-dom';
import './PreLogin.css';
import APIQuery from "../../Models/APIQuery";

//Constants to query the API
const apiLoginUrl = '/public/users/login'

//Axios query for login information
async function loginUser(user) {
    return await APIQuery.post(apiLoginUrl,
        JSON.stringify(user),)
        .then(data => data.data.jwt)
}

//Login functionality of the login page
export default function Login({ setToken }, userToken) {
    //React useState to watch for userName and password
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    //Functionality of the button used to submit login information
    const submitButton = async e => {
        e.preventDefault();
        const jwt = await loginUser({
            username,
            password
        });
        setToken(jwt);
    }
    
    const tokenString = sessionStorage.getItem('token');
    console.log(tokenString)
    if(tokenString) return <Navigate to="/" />

    //Returning a login page rendered in HTML
    return (
        tokenString ? <Navigate to="/" /> :
        <body className="login">
            <div class="main">
            <p class="sign" align="center">Sign in</p>
            <form1 onSubmit={submitButton}>

                <label>     
                    <input class="un " type="text" align="center" placeholder="Username" 
                    onChange={e => setUsername(e.target.value)} />
                </label>

                <label>          
                    <input class="pass" type="password" align="center" placeholder="Password" 
                    onChange={e => setPassword(e.target.value)} />
                </label>

                <a class="submit" align="center">Sign in</a>

            </form1>
            <Link to="/register"><p class="forgot" align="center">
                <a href="#"/>Forgot Password?</p></Link>
                
            </div>
        </body>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};