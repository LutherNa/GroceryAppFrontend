import axios from "axios";
import React, { useState } from "react";
//import './User.css';
import PropTypes from 'prop-types';
import {useNavigate, Navigate} from 'react-router-dom';
import Login from './Login.js';

const apiBaseUrl = 'http://localhost:8081/api/public/users/register'
const config = {headers: {"Content-Type": "application/json"}}

async function registerUser(user) {
    return await axios.post(apiBaseUrl,
        JSON.stringify(user),
        config)
        .then(data => data.data.jwt)
}

export default function Register({ setToken }) {

    const navigate = useNavigate();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const submitButton = async e => {
        e.preventDefault();
        const jwt = await registerUser({
            username,
            password
        });
        setToken(jwt);
        return <Navigate to="/" />
    }

    function navigateToLogin() {
        navigate('/login');
    }

    return (
        setToken ? <Navigate to="/" /> :
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