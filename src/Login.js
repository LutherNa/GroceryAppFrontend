import axios from "axios";
import React, { useState } from "react";
//import './User.css';
import PropTypes from 'prop-types';
import {Link, Route, Router, Routes} from 'react-router-dom';
import Register from './Register.js';

const apiBaseUrl = 'http://localhost:8081/api/public/users/login'
const config = {headers: {"Content-Type": "application/json"}}

async function loginUser(user) {
    return await axios.post(apiBaseUrl,
        JSON.stringify(user),
        config)
        .then(data => data.data.jwt)
}

export default function Login({ setToken }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

const submitButton = async e => {
    e.preventDefault();
    const jwt = await loginUser({
        username,
        password
    });
    setToken(jwt);
}

    return (
        <div className="login">
            <h1>Please login to continue</h1>
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
            <Link to="register">Don't have an account? Click here.</Link>
            <Routes>
                <Route path="register" element={<Register setToken={setToken} />} />
            </Routes>
        </div>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
};