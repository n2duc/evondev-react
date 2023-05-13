import React, { useState } from 'react'
import { useTasksDispatch } from './TasksContext';

const Task = ({ task }) => {
    const [ isEditing, setIsEditing ] = useState(false);
    const dispatch = useTasksDispatch();
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    className='p-2 bg-blue-100 rounded-lg ml-2'
                    value={task.text}
                    onChange={e => {
                        dispatch({
                            type: "changed",
                            task: {
                                ...task,
                                text: e.target.value
                            }
                        })
                }} />
                <button className='bg-green-300 px-2 rounded-md mx-1' onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button className='bg-green-300 px-2 rounded-md mx-1' onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        );
    }
    return (
        <label>
            <input type="checkbox" checked={task.done} 
                onChange={e => {
                    dispatch({
                        type: 'changed',
                        task: {
                        ...task,
                        done: e.target.checked
                        }
                    })
                }}    
            />
            {taskContent}
            <button className='bg-red-300 px-2 rounded-md mx-1' 
                onClick={() => {
                    dispatch({
                        type: 'deleted',
                        id: task.id
                    })
                }}
            >Delete</button>
        </label>
    )
}

export default Task