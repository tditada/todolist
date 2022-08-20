import React, { useEffect, useState } from 'react';
import { useGetRequest } from './helpers';

const API_URL = "https://api.adviceslip.com/advice";

function Advice() {
    const [advice, setAdvice] = useState<string>("");
    const {isLoading, error, getData} = useGetRequest();

    useEffect(() => {
        const transformResponse = (response: any) => setAdvice( response ? response.data.slip.advice: '')

        getData(API_URL, transformResponse);
    }, [getData]);

    return (
        <div>
            <p data-testid="advice"> {advice} </p>
        </div>
    );
}

export default Advice;
