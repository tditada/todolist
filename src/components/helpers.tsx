import axios from 'axios';
import React, {useCallback, useState} from 'react';

type GetDataType = (url: string, setData: (response: any) => void) => void;

export const useGetRequest = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>();

    const getData: GetDataType = useCallback(async (url, setData) => {

        try {
          setLoading(true);
          const response = await axios.get(url);
          setData(response);
          setError(null);
        } catch (err: any) {
          setError(err.message);
          setData([]);
        } finally {
          setLoading(false);
        }
      }, []);

    return {
        isLoading,
        error,
        getData,
    };
}