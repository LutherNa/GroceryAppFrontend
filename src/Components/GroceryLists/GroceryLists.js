import {Navigate} from 'react-router-dom';
import Navbar from '../Navbar/Navbar.js';
import APIQuery from '../../Models/APIQuery.js';
import React, { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import GroceryListRenderer from './GroceryListRenderer.js';

//Constants to query the API
const apiCurrentUserUrl = '/users/current'
const apiGroceryListUrl = '/grocerylist'

// let renderCurrentGroceryList = currentList.map((item, i) => {
//     return (
//         <option key = {i} value = {item}>
//             {item}
//         </option>
//     )
// });

export default function GroceryLists() {

    let tokenString = sessionStorage.getItem('token');
    let locationString = sessionStorage.getItem('locationId');
    const [currentUser, setCurrentUser] = useState();
    const [currentList, setCurrentList] = useState();

    async function refreshUser(token) {
        if (!tokenString) {
            tokenString = sessionStorage.getItem('token');
            if (!tokenString) {
                <Navigate to="/login" />
            }
        }
        // let bearer = "Bearer ";
        await APIQuery.get(apiCurrentUserUrl,
            {headers: {"Authorization" : JSON.parse(token)}})
            .then((response) => {
                response = response.data;
                setCurrentUser(response);
                getGroceryList(token,response.groceryLists[0].listName);
                // setCurrentList(response.groceryLists[0]);
                // currentUser = response.data;
                // console.log(response);
                // currentList = currentUser.GroceryList[0];
        });
    };

    async function getGroceryList(token, listName) {
        await APIQuery.get(apiGroceryListUrl+'/'+listName+'/'+locationString, 
            {headers: {"Authorization" : JSON.parse(token)}})
            .then((response) => {
                if (response.status < 300 && response.status >= 200) {
                    setCurrentList(response.data);
                } else {
                    // this is lazy and terrible and I regret it deeply - NL
                    APIQuery.post(apiGroceryListUrl+'/newList'+locationString,
                    {headers: {"Authorization" : JSON.parse(token)}})
                    .then((response) => {
                        setCurrentList(response.data);
                    })
                }
        })
    };

    async function deleteListItem(element) {
        let tokenString = sessionStorage.getItem('token');
        let path = apiGroceryListUrl+'/'
            +element.groceryList.listName+'/'
            +element.productListId;
        APIQuery.delete(path, {headers: {"Authorization" : JSON.parse(tokenString)}})
            .then(() => {
                getGroceryList(tokenString, element.groceryList.listName);
            })
    };

    // useEffect(() => {
    //     refreshUser(tokenString).then(data => setCurrentUser(data)); })
    // const reRender = () => {
    //     setCurrentUser(currentUser);
    //     console.log(currentUser);
    // }
    let pageAccess = tokenString; //&& locationString;
    // refreshUser(tokenString)
    if (!currentUser) {
        refreshUser(tokenString);
    }
    return (
        !pageAccess ? <Navigate to="/login" /> :
        <>
            <Navbar />
            <h1>Welcome to Grocery Lists!</h1>
            <h2>Current User: {currentUser?.username || "Loading"} </h2>
            <h2>Current List: {currentList?.groceryList.listName || "Loading"} </h2>
            <GroceryListRenderer data={currentList?.listItems || undefined} deleteListItem = {deleteListItem} key={currentList} />
        </>
    )
};