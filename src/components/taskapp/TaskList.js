import React from 'react'
import Task from './Task'
import { useTasks } from './TasksContext.js';

const TaskList = () => {
    const tasks = useTasks();
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id} className='p-2'>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    )
}

export default TaskList