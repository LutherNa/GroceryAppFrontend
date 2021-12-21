import React, { useState } from "react";
import {Navigate} from 'react-router-dom';
import Navbar from '../Navbar/Navbar.js';
import APIQuery from "../../Models/APIQuery";
import { render } from "@testing-library/react";

const apiProductSearchUrl = '/products'
const apiGroceryListAddUrl = '/'

function addToCart(){

}

export default function ProductRenderer(data) {
    console.log(data);
    const dataArray = data.data;
    console.log(dataArray);
    if(data.data === undefined) return <>
    </>
    return <>
    {dataArray.data.forEach(element => {
        render(<div key={element.productId} >
            {element.description} 
        </div>)
    })}
    </>
}