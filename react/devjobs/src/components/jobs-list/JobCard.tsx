import React, { useState } from "react";
import { Job } from "../../models/Job";
import CompanyLogo from "./CompanyLogo";

type JobCardProps = {
    job: Job;
};

const JobCard = ({ job }: JobCardProps) => {
    return (
        <div className="relative bg-dj-white dark:bg-dj-very-dark-blue rounded-md">
            <CompanyLogo
                logoPath={job.logo}
                logoBackground={job.logoBackground}
            />
            <div className="flex flex-col pl-9 pt-9 pb-9 h-full">
                <div className="flex items-center justify-between w-36 mb-3">
                    <p className="text-dj-dark-gray">{job.postedAt}</p>
                    <p className="text-dj-dark-gray">•</p>
                    <p className="text-dj-dark-gray">{job.contract}</p>
                </div>
                <h3 className="text-lg font-bold mb-3 dark:text-dj-white">
                    {job.position}
                </h3>
                <p className="text-dj-dark-gray font-normal mb-3">Scoot</p>
                <p className="text-dj-violet mt-auto text-sm font-bold">
                    {job.location}
                </p>
            </div>
        </div>
    );
};

export default JobCard;
