import React from 'react'
import { useCount } from './count-context'

const Count = () => {
    const { count } = useCount();
    console.log(count)
    return (
        <span className="flex-1 flex items-center justify-center text-2xl font-medium">{count}</span>
    )
}

export default Count