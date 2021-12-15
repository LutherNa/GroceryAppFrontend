import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
//import './User.css';
import PropTypes from 'prop-types';
import useToken from "./Token";

const apiBaseUrl = 'http://localhost:8081/api/public/users/register'
const config = {headers: {"Content-Type": "application/json"}}


async function registerUser(user) {
    return await axios.post(apiBaseUrl,
        JSON.stringify(user),
        config)
        .then(data => data.data.jwt)
}

export default function Register({ setToken }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

const submitButton = async e => {
    e.preventDefault();
    const jwt = await registerUser({
        username,
        password
    });
    console.log(jwt)
    setToken(jwt);
}

    return (
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
        </div>
    )
}
Register.propTypes = {
    setToken: PropTypes.func.isRequired
};