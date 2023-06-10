import React from 'react'
import withLoading from './withLoading';

const FetchingData = ({ data }) => {
    console.log(data)
    return (
        <div>FetchingData</div>
    )
}

export default withLoading(FetchingData, "http://hn.algolia.com/api/v1/search?query=react");