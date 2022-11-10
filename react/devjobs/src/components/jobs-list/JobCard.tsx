import React from "react";

const JobCard = () => {
    return (
        <div className="relative bg-dj-white dark:bg-dj-very-dark-blue rounded-md">
            <div className="absolute -top-6 left-8 bg-scoot bg-no-repeat bg-center bg-dj-scoot h-12 w-12 rounded-xl"></div>
            <div className="flex flex-col pl-9 pt-9 pb-9 h-full">
                <div className="flex items-center justify-between w-36 mb-3">
                    <p className="text-dj-dark-gray">5h ago</p>
                    <p className="text-dj-dark-gray">•</p>
                    <p className="text-dj-dark-gray">Full Time</p>
                </div>
                <h3 className="text-lg font-bold mb-3 dark:text-dj-white">
                    Senior Software Engineer
                </h3>
                <p className="text-dj-dark-gray font-normal mb-3">Scoot</p>
                <p className="text-dj-violet mt-auto text-sm font-bold">
                    United Kingdom
                </p>
            </div>
        </div>
    );
};

export default JobCard;
