import React, { useState } from "react";

function InputDisplay() {
    const [value, setValue] = useState("");

    const handleChange = (e) => setValue(e.target.value);

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Type something..."
            />
            <div data-testid="display">{value}</div>
        </div>
    );
}

export default InputDisplay;



import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import InputDisplay from "./InputDisplay";

test("displays the input value in the div", () => {
    // Render the component
    render(<InputDisplay />);

    // Get the input field and the display div
    const inputElement = screen.getByPlaceholderText("Type something...");
    const displayElement = screen.getByTestId("display");

    // Verify the initial state
    expect(displayElement.textContent).toBe("");

    // Simulate typing in the input
    fireEvent.change(inputElement, { target: { value: "Hello, world!" } });

    // Verify the display updates correctly
    expect(displayElement.textContent).toBe("Hello, world!");
});
