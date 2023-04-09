import axios from "axios";
import { useRef, useState, useEffect } from "react";

export default function useHackerNewsAPI() {
    const [hits, setHits] = useState([]);
    const [query, setQuery] = useState(" ");
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [url, setUrl] = useState(`http://hn.algolia.com/api/v1/search?query=${query}`)

    const isMounted = useRef(true);
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    })

    const handleFetchData = useRef({});
    handleFetchData.current = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url);
            if (isMounted.current) {
                // console.log(res);
                setHits(res.data?.hits || []);
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
        hits,
        query,
        setQuery,
        setUrl,
        loading,
        errorMessage,
    }
}