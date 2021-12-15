import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
//import './User.css';
import PropTypes from 'prop-types';

const apiBaseUrl = 'http://localhost:8081/api/public/users/login'

async function loginUser(user) {
    await axios.post(apiBaseUrl,
        {user})
        .then(data => data.JSON())
}

export default function Login({ setToken }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

const submitButton = async e => {
    e.preventDefault();
    const token = await loginUser({
        username,
        password
    });
    setToken(token);
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
        </div>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
};