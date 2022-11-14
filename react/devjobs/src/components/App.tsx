import React, { useEffect, useState } from "react";
import data from "../data/data.json";

import Header from "./header/Header";
import JobList from "./jobs-list/JobList";

import { Job } from "../models/Job";

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
            <JobList jobs={search(jobs)} />
        </div>
    );
};

export default App;
