import React, { useState } from 'react';
import { useTasksDispatch } from './TasksContext.js';

let nextId = 3;

const AddTask = () => {
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch();
    return (
        <>
            <input className='p-2 rounded-lg bg-blue-100' type="text" placeholder='Add task' value={text} onChange={e => setText(e.target.value)} />
            <button className='bg-blue-300 px-2 py-2 rounded-md mx-1' onClick={() => {
                setText('');
                dispatch({
                    type: 'added',
                    id: nextId++,
                    text: text,
                })
            }}>Add</button>
        </>
    )
}

export default AddTask