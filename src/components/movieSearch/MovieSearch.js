import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import useDebounce from "../customHooks/useDebounce";
import MovieItemLoading from "./MovieItemLoading";

// https://api.themoviedb.org/3/movie/550?api_key=891b4b911754b82a36212a38d99888dc
// https://api.themoviedb.org/3/search/movie?api_key=891b4b911754b82a36212a38d99888dc&query=""
// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

const MovieSearch = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const queryDebounce = useDebounce(query, 500);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            // Get data
            const res = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=891b4b911754b82a36212a38d99888dc&query=${queryDebounce}`
            );
            console.log(res.data.results);
            if (res.data.results) {
                // Update data of state from API
                setMovies(res.data.results);
                setLoading(false);
            }
        }
        fetchData();
    }, [queryDebounce]);
    return (
        <div className="p-10">
            <div className="w-full max-w-[500px] mx-auto mb-20">
                <input
                    type="text"
                    className="w-full p-5 rounded-lg border border-purple-400 outline-none shadow-[0px_0px_0px_3px_rgba(125,_106,_255,_0.2)]"
                    placeholder="Search movie..."
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            {loading && (
                <div className="grid grid-cols-3 gap-10">
                    <MovieItemLoading></MovieItemLoading>
                    <MovieItemLoading></MovieItemLoading>
                    <MovieItemLoading></MovieItemLoading>
                </div>
            )}
            <div className="grid grid-cols-3 gap-10">
                {!loading &&
                    movies.length > 0 &&
                    movies.map((item, index) => (
                        <MovieItem key={item.id} data={item} />
                    ))}
            </div>
        </div>
    );
};

export default MovieSearch;
