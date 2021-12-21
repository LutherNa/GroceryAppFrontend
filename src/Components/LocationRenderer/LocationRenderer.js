import React, { useState } from "react";
import { render } from "@testing-library/react";

const apiLocationUrl = '/location'
const apiGroceryListAddUrl = '/'

function addToCart() {

}

export default function LocationRenderer(data) {
    console.log(data);
    const dataArray = data.data;
    console.log(dataArray);
    if (data.data === undefined) return <>
    </>
    return <>
        {dataArray.data.forEach(element => {
            render(<div key={element.locationId} >
                <h1>{element.locationId}</h1>
                <button type="submit" >Submit</button>
            </div>)
        })}
    </>
}