import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = "https://api.adviceslip.com/advice";

function Advice() {
    const [advice, setAdvice] = useState<string>("");

    const fetchData = async () => {
        try {
            const response = await axios.get(API_URL);
            setAdvice(response.data.slip.advice);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <p data-testid="advice"> {advice} </p>
        </div>
    );
}

export default Advice;
