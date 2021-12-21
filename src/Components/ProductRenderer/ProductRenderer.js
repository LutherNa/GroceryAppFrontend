import React, { useState } from "react";
<<<<<<< HEAD:src/Components/ProductRenderer/ProductRenderer.js
import { CloseButton } from "react-bootstrap"
import {Navigate} from 'react-router-dom';
=======
import { Navigate } from 'react-router-dom';
//import Navbar from '../Navbar/Navbar.js';
//import APIQuery from "../Models/APIQuery";
>>>>>>> 0fa096654ebd00a42c51f2cc1aedcc634061f05a:src/ProductRenderer/ProductRenderer.js
import { render } from "@testing-library/react";

const apiProductSearchUrl = '/products'
const apiGroceryListAddUrl = '/'

function addToCart() {

}

export default function ProductRenderer({data, addToList}) {
    console.log(data);
    if(data === undefined) return <>
    </>
    const dataArray = data.data;
    console.log(dataArray);
<<<<<<< HEAD:src/Components/ProductRenderer/ProductRenderer.js
    return <div id="products">
    {dataArray.forEach(element => {
        render(<div key={element.productId} >
            {element.description} <CloseButton onClick={() => addToList(element)} >Add to cart</CloseButton>
        </div>)
    })}
    </div>
=======
    if (data.data === undefined) return <>
    </>
    return <>
        {dataArray.data.forEach(element => {
            render(<div key={element.productId} >
                {element.description}
            </div>)
        })}
    </>
>>>>>>> 0fa096654ebd00a42c51f2cc1aedcc634061f05a:src/ProductRenderer/ProductRenderer.js
}