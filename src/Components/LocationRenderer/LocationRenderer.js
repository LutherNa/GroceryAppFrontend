import { render } from "@testing-library/react";
import { CloseButton } from "react-bootstrap"

export default function LocationRenderer({ data, addToList }) {
    console.log(data);
    if (data === undefined) return <>
    </>
    const dataArray = data.data;
    console.log(dataArray);
    return <div id="locations">
        {dataArray.forEach(element => {
            render(<div key={element.locationId} >
                {element.locationId} <CloseButton onClick={() => addToList(element)} >Choose location</CloseButton>
            </div>)
        })}
    </div>
}