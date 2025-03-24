import React, { useState } from "react";

function ParentComponent() {
    const [message, setMessage] = useState("");

    const handleChildData = (data) => {
        setMessage(data);
    }

    return (
        <>
            <h1>Parent Component</h1>
            <p>Message from child: {message}</p>
            <ChildComponent sendDataToParent={handleChildData} />
        </>
    )
}

function ChildComponent({ sendDataToParent }) {
    const sendData = () => {
        const data = "Hello from Child!";
        sendDataToParent(data); // Send data to the parent
    }

    return (
        <>
            <h1>Child Component</h1>
            <button onClick={sendData}>Click here</button>
        </>
    )
}

export default ParentComponent;