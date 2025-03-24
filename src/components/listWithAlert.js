import React from "react";

const ListWithAlert = () => {

    const handleClick = (item) => {
        alert(`Clicked on ${item}`);
        console.log(`Clicked on ${item}`);

    }
    const items = ['item1', 'item2', 'item3', 'item4'];
    return (
        <>
            <ul>
                {items.map((item, index) => (
                    <li style={{ cursor: 'pointer'}} key={index} onClick={() => handleClick(item)}>{item}</li>
                ))
                }
            </ul>
        </>
    );
}

export default ListWithAlert;