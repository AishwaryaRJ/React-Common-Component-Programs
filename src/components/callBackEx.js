import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";
function callBackEx() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    // Memoize the increment function
    const increment = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <ChildComponent increment={increment} count={count} />
        </div>
    );
}

export default callBackEx;