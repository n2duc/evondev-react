import React, { useEffect, useState } from 'react'

const ChildCallback = ({ getData }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        console.log(`Child Callback - useEffect - getData`);

        getData('comments')
            .then((res) => res.json())
            .then((res) => {
                const comment = res.data;
                setComments(comment);
            })
    }, [getData]);
    return (
        <div>
            <p>ChillCallback:</p>
            <p>{JSON.stringify(comments)}</p>
        </div>
    )
}

export default ChildCallback