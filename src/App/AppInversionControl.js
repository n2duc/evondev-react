import React, { useState } from "react";
import "./App.scss";
import { Dropdown2 } from "./components/advanced-react/inversion-of-control/index";
const options = [
    {
        title: "Front-end",
    },
    {
        title: "Back-end",
    },
    {
        title: "Full-stack",
    },
];
const App = () => {
    const [job, setJob] = useState("");
    const [filter, setFilter] = useState("");
    const handleSelect = (job) => {
        setJob(job);
    };
    const handleFilter = (e) => {
        setFilter(e.target.value);
    };
    return (
        <div>
            <Dropdown2
                placeholder={`${job || "Please your fucking job"}`}
                onClick={handleSelect}
                onChange={handleFilter}
                inputPlaceholder="Search your job"
            >
                <div className="options border border-gray-300 rounded-md mt-2">
                    <Dropdown2.Search></Dropdown2.Search>
                    {options.map((option) => (
                        <Dropdown2.Option key={option.title}>
                            <span>{option.title}</span>
                            <Dropdown2.IconCheck></Dropdown2.IconCheck>
                        </Dropdown2.Option>
                    ))}
                </div>
            </Dropdown2>
        </div>
    );
};

export default App;
