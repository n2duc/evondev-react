import useHackerNewsAPI from "../customHooks/useHackerNewsAPI";

const HackerNewsHook = () => {
    const { hits, query, setQuery, setUrl, loading, errorMessage }  = useHackerNewsAPI();

    return (
        <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
            <div className="flex mb-5 gap-x-2">
                <input
                    type="text"
                    className="border border-gray-200 p-5 block w-full rounded-md transition-all outline-none focus:border-blue-400"
                    placeholder="Typing your keyword ..."
                    defaultValue={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={() => setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)} className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0">
                    Fetch
                </button>
            </div>
            {loading && (
                <div className="loading w-8 h-8 rounded-full border-4 border-blue-500 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
            )}
            {!loading && errorMessage && (
                <p className="text-red-400 my-5">{errorMessage}</p>
            )}
            <div className="flex flex-wrap gap-3">
                {!loading &&
                    hits.length > 0 &&
                    hits.map((item, index) => {
                        if (!item.title || item.title.length <= 0)  return null;
                        return (
                            <h3 className="p-2 bg-gray-100 rounded-md" key={item.title}>
                                {item.title}
                            </h3>
                        )})
                }
            </div>
        </div>
    );
};

export default HackerNewsHook;
