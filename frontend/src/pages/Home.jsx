import React from "react";
import { useState, useEffect } from "react";
import Main from '../components/section/Main'


// config.js
export const BACKEND_URL = "http://127.0.0.1:8000/";

const Home = () => {
    const [data, setData] = useState("");

    // useEffect hook to fetch data from the backend when the component mounts
    useEffect(() => {
        // Fetch data from the backend API using the '/api/hello' endpoint
        fetch(`${BACKEND_URL}base/hello`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <Main>
            <h1>Welcome to Fine-Tuning Chatbot!</h1>
            <p>{data}</p>
        </Main>
    );
};

export default Home;
