import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = axiosParams => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('')
    const [loading, setIsLoading] = useState(true);

    const sendRequest = async params => {
        try {
            const res = await axios.request(params)

            setResponse(res);
        }
        catch (err) {
            setError(err)
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        sendRequest(axiosParams)
    }, [])

    return {
        response,
        error,
        loading
    }
}

export default useAxios;