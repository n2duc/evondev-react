import axios from "axios";
import { useRef, useState, useEffect } from "react";

export default function useHackerNewsAPI(initialUrl, initialData) {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [url, setUrl] = useState(initialUrl);

    const isMounted = useRef(true);
    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        }
    }, []);

    const handleFetchData = useRef({});
    handleFetchData.current = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url);
            if (isMounted.current) {
                // console.log(res);
                setData(res.data || []);
                setLoading(false);
            }
        } catch (err) {
            setLoading(false);
            setErrorMessage(`The error: ${err}`);
        }
    };

    useEffect(() => {
        handleFetchData.current();
    }, [url]);

    return {
        data,
        setUrl,
        loading,
        errorMessage,
    }
}