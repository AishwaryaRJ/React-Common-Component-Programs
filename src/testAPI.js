import React, { useEffect, useState } from "react";

function TestAPI() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.example.com/data');
                const result = await response.json();
                setData(result);
            }
            catch (error) {
                console.log('Error:', error);
            }
        };

        fetchData();

    }, []);

    return <div>{JSON.stringify(data)}</div>
}

export default TestAPI;