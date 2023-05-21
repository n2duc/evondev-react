import React from 'react'
import { useParams, useNavigate  } from 'react-router-dom';

const BlogDetail = () => {
    const { slug } = useParams();
    console.log(slug);
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate("/blog")} className='p-2 bg-green-400 font-semibold text-sm text-white rounded-md'>Navigate to Blog Page</button>
            <button onClick={() => navigate(-1)}>Go back</button>
            <button onClick={() => navigate(1)}>Go forward</button>
        </div>
    )
}

export default BlogDetail