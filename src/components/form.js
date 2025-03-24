import React, { useState } from "react";
import useInput from "./useInput";

function Form() {
    const nameInput = useInput(""); // Manage "name" input
    const emailInput = useInput(""); // Manage "email" input
    const [submittedData, setSubmittedData] = useState(null); // To store submitted values

    const handleSubmit = (e) => {
        e.preventDefault();

        // Save the submitted data in the state
        setSubmittedData({
            name: nameInput.value,
            email: emailInput.value,
        });

        // Reset input fields
        nameInput.reset();
        emailInput.reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" {...nameInput} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" {...emailInput} />
                </div>
                <button type="submit">Submit</button>
            </form>

            {submittedData && (
                <div style={{ marginTop: "20px" }}>
                    <h2>Submitted Data</h2>
                    <p>Name: {submittedData.name}</p>
                    <p>Email: {submittedData.email}</p>
                </div>
            )}
        </div>
    );
}

export default Form;
