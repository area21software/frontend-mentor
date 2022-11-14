import React, { useEffect, useState } from "react";
import data from "../data/data.json";

import Header from "./header/Header";
import JobList from "./jobs-list/JobList";

import { Job } from "../models/Job";

const App = () => {
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        setJobs(data);
    }, []);
    return (
        <div className="dark:bg-dj-midnight">
            <Header />
            <JobList jobs={jobs} />
        </div>
    );
};

export default App;
