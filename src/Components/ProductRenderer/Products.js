import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.js';
import APIQuery from "../../Models/APIQuery";
import ProductRenderer from "./ProductRenderer.js";

const apiProductSearchUrl = '/products'
const apiGroceryListAddUrl = '/'



export default function Products() {
    const tokenString = sessionStorage.getItem('token');
    const groceryListId = 2; //sessionStorage.getItem('groceryListId')
    const locationString = "01400943";//sessionStorage.getItem('locationId');
    const [productName, setProductName] = useState();
    var storeProducts = [];
    const [search, setSearch] = useState();

    async function searchProduct(searchQuery) {
        const tokenString = sessionStorage.getItem('token');
        return await APIQuery.post(apiProductSearchUrl,
            JSON.stringify(searchQuery),
            {
                headers: {
                    Authorization: JSON.parse(tokenString)
                }
            })
            .then(data => setSearch(data))
    }

    function addToList(element) {
        console.log(element.productId);
    }

    const submitButton = async e => {
        e.preventDefault();
        console.log(productName);
        console.log(tokenString);
        console.log("Here is what is sent");
        storeProducts = await searchProduct({
            'term': productName,
            'locationId': locationString
        });
        console.log(search);
    }

    return (
        !tokenString ? <Navigate to="/login" /> :
            !locationString ? <h1>Please select a location before searching products</h1> :
                !groceryListId ? <h1> Please select a grocery List, the come back!</h1> :
                    <>
                        <Navbar />
                        <h1>Welcome to products!</h1>
                        <form onSubmit={submitButton}>
                            <label>
                                <p>Item Lookup</p>
                                <input type="text" onChange={e => setProductName(e.target.value)} />
                            </label>
                            <div className="button">
                                <button type="submit">Submit</button>
                            </div>
                            <ProductRenderer data={search} addToList={addToList} key={search} />
                        </form>
                    </>
    )
}