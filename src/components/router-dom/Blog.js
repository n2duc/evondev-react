import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// http://localhost:3000/blog?search=react
const Blog = () => {
    const [search, setSearch] = useSearchParams();
    console.log(search.get("search"))
    useEffect(() => {
        setSearch({ search: "game" })
    }, [setSearch])
    return (
        <div>Blog</div>
    )
}

export default Blog