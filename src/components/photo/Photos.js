import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const getRandomPhotos = async (page) => {
    try {
        const res = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
        return res.data
    } catch (err) {
        console.log(err)
    }
}

//https://picsum.photos/v2/list?page=2&limit=100

const Photos = () => {
    const [photo, setPhoto] = useState([]);
    const [nextPage, setNextPage] = useState(1);
    
    const handleLoadMorePhotos = useRef({})
    handleLoadMorePhotos.current = async () => {
        const img = await getRandomPhotos(nextPage);
        const newPhotos = [...photo, ...img];
        setPhoto(newPhotos);
        setNextPage(nextPage + 1);
    };
    useEffect(() => {
        handleLoadMorePhotos.current();
    }, []);

    return (
        <div>
            <div className="grid grid-cols-4 gap-3 p-5">
                {photo.length > 0 &&
                    photo.map((item) => (
                        <div
                            key={item.id}
                            className="p-2 bg-white shadow-md rounded-lg h-[240px]"
                        >
                            <img
                                src={item.download_url}
                                alt={item.author}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    ))}
            </div>
            <div className="text-center">
                <button
                    onClick={handleLoadMorePhotos.current}
                    className="inline-block px-7 py-3 bg-red-400 text-white rounded text-lg"
                >
                    Load more
                </button>
            </div>
        </div>
    );
};

export default Photos;
