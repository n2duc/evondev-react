import { useEffect, useState } from "react";
//Higher Order Component (HOC) is a function that takes a component as an argument and returns a new component.
//The purpose of HOC is to share common functionality between components without repeating code.
//HOC is a pattern that is derived from React's compositional nature.
//A HOC is a pure function with zero side-effects.

// Nói chung là thua customHook =)))
function withLoading(Component, url) {
    return (props) => {
        const [news, setNews] = useState([]);
        useEffect(() => {
            const fetchData = async () => {
                const res = await fetch(url);
                const data = await res.json();
                console.log(data);
                setNews(data.hits);
            }
            fetchData();
        }, []);
        if(!news || news.length === 0) return <div>Loading...</div>;
        return <Component data={news} {...props}></Component>
    }
}

export default withLoading;