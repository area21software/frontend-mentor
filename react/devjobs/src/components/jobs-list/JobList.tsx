import React from "react";
import JobCard from "./JobCard";

const JobList = () => {
    return (
        <>
            <div className="flex flex-col items-center pb-16 h-full">
                <div className="grid grid-cols-1 gap-y-12 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 w-10/12 max-w-6xl  h-full my-20 mx-auto">
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                </div>
                <button className="bg-dj-violet w-36 p-3 rounded-md text-dj-white text-md">
                    Load More
                </button>
            </div>
        </>
    );
};

export default JobList;
