import React from "react";
import { useEffect, useState } from "react";

// config.js
export const BACKEND_URL = "http://127.0.0.1:8000/";

const Home = () => {
    // State to store the data fetched from the backend
    const [data, setData] = useState("");

    // useEffect hook to fetch data from the backend when the component mounts
    useEffect(() => {
        // Fetch data from the backend API using the '/api/hello' endpoint
        fetch(`${BACKEND_URL}api/hello`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            {data}
        </div>
    );
};

export default Home;
