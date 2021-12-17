import React, { useState } from "react";
import PropTypes from 'prop-types';
import {Navigate, Link} from 'react-router-dom';
import './PreLogin.css';
import APIQuery from "../../Models/APIQuery";

//Constants to query the API
const apiRegisterUrl = '/public/users/register'

//Axios query to create a user
async function registerUser(user) {
    return await APIQuery.post(apiRegisterUrl,
        JSON.stringify(user),)
        .then(data => data.data.jwt)
}

//Registers a user
export default function Register({ setToken }) {
    //Defining useNavigate for use later
    // const navigate = useNavigate();

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
    
    const tokenString = sessionStorage.getItem('token');
    //Returning React HTML information to render a register page
    return (
        tokenString ? <Navigate to="/" /> :
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
            <Link to="/login">Already have an account? Click here.</Link>
        </div>
    )
}

Register.propTypes = {
    setToken: PropTypes.func.isRequired
};