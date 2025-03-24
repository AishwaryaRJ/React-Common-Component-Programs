import React, { useState, useEffect } from "react";

function Timer({ initialTime }) {
    const [time, setTime] = useState(200);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Timer</h1>
            <p>{time} seconds remaining</p>
        </div>
    );
}

export default Timer;
