import { render } from "@testing-library/react";
import { Button } from "react-bootstrap"

export default function GroceryListRenderer({data, deleteListItem}) {
    // console.log(data);
    if (data === undefined) return <>
    </>
    const dataArray = data;
    console.log(dataArray);
    return <div id="groceryList">
        {dataArray.forEach(element => {
            render(
            <div key={element.productListId}>
                {element.product.description} <Button onClick={() => deleteListItem(element)}>Delete</Button>
            </div>)
        })}
    </div>
}