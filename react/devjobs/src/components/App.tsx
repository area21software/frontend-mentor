import React from "react";

import Header from "./header/Header";
import JobList from "./jobs-list/JobList";

const App = () => {
    return (
        <div className="dark:bg-dj-midnight">
            <Header />
            <JobList />
        </div>
    );
};

export default App;
