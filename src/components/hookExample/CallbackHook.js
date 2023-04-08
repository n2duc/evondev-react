import React, { useCallback, useState } from 'react'
import ChildCallback from './ChildCallback';

const CallbackHook = () => {
    const [users, setUsers] = useState([]);

    const getData = useCallback((type) => {
        return fetch(`https://reqres.in/api/${type}`);
    },[]);

    const handleClick = () => {
        getData('users')
            .then((res) => res.json())
            .then((res) => {
                const user = res.data;
                setUsers(user);
            });
    };
    return (
        <div className='p-3'>
            <p>Data:</p>
            <button onClick={handleClick} className='p-2 border-none outline-none bg-green-500 text-white font-medium rounded hover:bg-green-600'>Get Data User</button>
            <p>{JSON.stringify(users)}</p>
            <ChildCallback getData={getData}/>
        </div>
    )
}

export default CallbackHook