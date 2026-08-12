import React,
{
    useState
}
from "react";

import {
    searchJob
}
from "../../services/jobService";

function SearchJob() {

    const [name,
        setName] =
        useState("");

    const [jobs,
        setJobs] =
        useState([]);

    const handleSearch =
        async () => {

            const response =
                await searchJob(name);

            setJobs(
                response.data
            );
        };

    return (
        <div>

            <input
                placeholder="Search Job"
                value={name}
                onChange={(e) =>
                    setName(
                        e.target.value
                    )
                }
            />

            <button
                onClick={
                    handleSearch
                }
            >
                Search
            </button>

            {jobs.map(job => (

                <div
                    key={job.jobId}
                >

                    {job.jobName}

                </div>

            ))}

        </div>
    );
}

export default SearchJob;