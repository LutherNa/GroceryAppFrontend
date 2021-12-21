import {Navigate} from 'react-router-dom';
import Navbar from './Navbar/Navbar.js';
import APIQuery from '../Models/APIQuery.js';
import React, { useEffect, useState } from 'react';
import reactDom from 'react-dom';

//Constants to query the API
const apiCurrentUserUrl = '/users/current'
const apiGroceryListUrl = '/grocerylist'
let tokenString = sessionStorage.getItem('token');
let locationString = sessionStorage.getItem('locationId');
// let currentList;
// let currentUser;

async function refreshUser(token) {
    if (!tokenString) {
        tokenString = sessionStorage.getItem('token');
        if (!tokenString) {
            <Navigate to="/login" />
        }
    }
    let bearer = "Bearer ";
    return await APIQuery.get(apiCurrentUserUrl,
        {headers: {"Authorization" : JSON.parse(token)}})
        .then((response) => {
            response = response.data
            // currentUser = response.data;
            console.log(response);
            // currentList = currentUser.GroceryList[0];
    });
};

// let renderCurrentGroceryList = currentList.map((item, i) => {
//     return (
//         <option key = {i} value = {item}>
//             {item}
//         </option>
//     )
// });

export default function GroceryLists() {
    tokenString = sessionStorage.getItem('token');
    locationString = sessionStorage.getItem('locationId');
    // let [currentUser, setCurrentUser] = useState(refreshUser(tokenString));
    let [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        refreshUser(tokenString).then(data => setCurrentUser(data)); })
    const reRender = () => {
        setCurrentUser(currentUser);
        console.log(currentUser);
    }
    let pageAccess = tokenString; //&& locationString;
    // refreshUser(tokenString)
    return (
        !pageAccess ? <Navigate to="/login" /> :
        <>
            <Navbar />
            <h1>Welcome to Grocery Lists!</h1>
            <h2 onClick={reRender}>Current User: {currentUser?.username || "Loading"} </h2> 
            {/* <div>{renderCurrentGroceryList}</div> */}
        </>
    )
};