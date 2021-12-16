import axios from "axios";
import React, { useState } from "react";
//import './User.css';
import PropTypes from 'prop-types';
import {useNavigate, Navigate} from 'react-router-dom';
import useToken from "../Models/Token";

//Constants to query the API
const apiBaseUrl = 'http://localhost:8081/api/public/users/register'
const config = {headers: {"Content-Type": "application/json"}}

//Axios query to create a user
async function registerUser(user) {
    return await axios.post(apiBaseUrl,
        JSON.stringify(user),
        config)
        .then(data => data.data.jwt)
}

//Registers a user
export default function Register({ setToken }) {
    //Defining useNavigate for use later
    const navigate = useNavigate();

    //React useState to watch for userName and password
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    //Submission of the user's information and returning of a jwt
    const submitButton = async e => {
        e.preventDefault();
        const jwt = await registerUser({
            username,
            password
        });
        setToken(jwt);
    }

    //Function to send the user back to login
    function navigateToLogin() {
        navigate('/login');
    }

    //Returning React HTML information to render a register page
    console.log(!useToken().token)
    return (
        useToken().token ? <Navigate to="/" /> :
        <div className="register">
            <h1>Use the dialog boxes below to register:</h1>
            <form onSubmit={submitButton}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div className="button">
                    <button type="submit">Submit</button>
                </div>
            </form>
            <a href="" onClick={navigateToLogin}>Already have an account? Click here to sign in.</a>
        </div>
    )
}

Register.propTypes = {
    setToken: PropTypes.func.isRequired
};