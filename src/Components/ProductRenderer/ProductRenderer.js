import React, { useState } from "react";
import { CloseButton } from "react-bootstrap"
import {Navigate} from 'react-router-dom';
import { render } from "@testing-library/react";

const apiProductSearchUrl = '/products'
const apiGroceryListAddUrl = '/'

function addToCart(){

}

export default function ProductRenderer({data, addToList}) {
    console.log(data);
    if(data === undefined) return <>
    </>
    const dataArray = data.data;
    console.log(dataArray);
    return <div id="products">
    {dataArray.forEach(element => {
        render(<div key={element.productId} >
            {element.description} <CloseButton onClick={() => addToList(element)} >Add to cart</CloseButton>
        </div>)
    })}
    </div>
}