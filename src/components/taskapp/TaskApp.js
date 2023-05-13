import React from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TaskProvider } from "./TasksContext.js";

const TaskApp = () => {
    return (
        <TaskProvider>
            <div className="m-4 p-5 rounded-lg bg-white w-full max-w-[460px]">
                <h1>Task of today</h1>
                <AddTask />
                <TaskList />
            </div>
        </TaskProvider>
    );
};

export default TaskApp;
