import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const useAxios = axiosParams => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('')
    const [loading, setIsLoading] = useState(true);
    const [shouldRefetch, refetch] = useState({}); 

    const sendRequest = useCallback(async params => {
        try {
            const res = await axios.request(params)
            setResponse(res);
            
        }
        catch (err) {
            setError(err)
        } finally {
            setIsLoading(false)
        }

    }, [])

    useEffect(() => {
        sendRequest(axiosParams)
    }, [shouldRefetch])

    return {
        response,
        error,
        loading,
        refetch
    }
}

export default useAxios;