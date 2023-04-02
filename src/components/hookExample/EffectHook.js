import React, { useEffect, useState } from 'react'

const EffectHook = () => {
    const [count, setCount] = useState(0)
    const [action, setAction] = useState('')

    useEffect(() => {
        document.title = `Clicked ${count} times`
        console.log('useEffect')
    }, [count])
    useEffect(() => {
        fetch(`https://reqres.in/api/${action}`)
            .then((res) => console.log({ res }))
            .catch((err) => console.log(err))
    }, [action])
    return (
        <div>
            <p>You cliked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click</button>

            <button onClick={() => setAction('users')}>Users</button>
            <button onClick={() => setAction('comments')}>Comments</button>
        </div>
    )
}

export default EffectHook;