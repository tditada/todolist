import React, { useEffect, useState } from 'react';

// This could go to a constants.ts if there's to many or shared
const API_URL = "https://api.adviceslip.com/advice";

//TODO: Test hook and component
//TODO: Typescript strict
//TODO: Redux/Pass state to children

function Advice() {
    const [advice, setAdvice] = useState("");

    useEffect(() => {
        const url = API_URL;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setAdvice(json.slip.advice)
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            <p> {advice}</p>
        </div>
    );
}

export default Advice;
