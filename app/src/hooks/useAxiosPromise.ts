import {useEffect, useState} from 'react';
import {URL_DATA_ROOT} from '../constants/constants';
import axios from './axiosConfig';

const useAxiosPromise = (url: string) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        console.log('useAxiosPromise...');
        const aborter = new AbortController();
        axios.get(URL_DATA_ROOT + url, {signal: aborter.signal})
            .then(res => {
                setData(res.data);
                setIsLoading(false);
                setError(null);
            })
            .catch(error => {
                console.log('useFetch, catch; error:', error);
                if (error.name !== 'AbortError') {
                    setIsLoading(false);
                    setError(error.message);
                }
            });
    }, [url]);

    return {data, isLoading, error};
};

export default useAxiosPromise;