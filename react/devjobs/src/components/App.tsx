import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import JobDetail from "./jobs-list/JobDetail";
import JobList from "./jobs-list/JobList";
import Header from "./header/Header";

import { Job } from "../models/Job";
import data from "../data/data.json";

const App = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [searchTitleQuery, setSearchTitleQuery] = useState("");
    const [searchLocationQuery, setSearchLocationQuery] = useState("");

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value.toLowerCase());
        setSearchTitleQuery(e.target.value.toLowerCase());
    };

    const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value.toLowerCase());
        setSearchLocationQuery(e.target.value.toLowerCase());
    };

    const search = (jobs: Job[]) => {
        return jobs.filter((job) =>
            job.position.toLowerCase().includes(searchTitleQuery)
        );
    };

    useEffect(() => {
        setJobs(data);
    }, []);

    return (
        <div className="dark:bg-dj-midnight">
            <Header
                handleTitleChange={handleTitleChange}
                handleLocationChange={handleLocationChange}
            />

            <BrowserRouter>
                <Routes>
                    <Route
                        path="/jobs"
                        element={<JobList jobs={search(jobs)} />}
                    />
                    <Route path="/job/:id" element={<JobDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
