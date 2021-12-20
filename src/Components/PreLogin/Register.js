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
        <body className="register">
            <div class="main">
            <p class="sign" align="center">Register</p>
            <form1 onSubmit={submitButton}>

                <label>
                    <input class="un " type="text" align="center" placeholder="Username" 
                        onChange={e => setUsername(e.target.value)} />
                </label>

                <label>                  
                    <input class="pass" type="password" align="center" placeholder="Password" 
                        onChange={e => setPassword(e.target.value)} />
                </label>

                <a class="submit" align="center">Submit</a>

            </form1>

            <Link to="/login"><p class="forgot" align="center">
                <a href="#"/>Already have an account? Click here.</p></Link>
            
            </div>
        </body>
    )
}

Register.propTypes = {
    setToken: PropTypes.func.isRequired
};