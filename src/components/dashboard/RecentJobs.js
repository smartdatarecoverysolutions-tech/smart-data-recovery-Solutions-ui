import React,
{
    useEffect,
    useState
}
from "react";

import {
    getJobs
}
from "../../services/jobService";

function RecentJobs() {

    const [jobs,
        setJobs] =
        useState([]);

    useEffect(() => {

        loadJobs();

    }, []);

    const loadJobs =
        async () => {

            const response =
                await getJobs();

            setJobs(
                response.data
                    .slice(-5)
                    .reverse()
            );
        };

    return (

        <div>

            <h2>
                Recent Jobs
            </h2>

            <table border="1">

                <thead>

                    <tr>

                        <th>
                            Job No
                        </th>

                        <th>
                            Name
                        </th>

                        <th>
                            Status
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {jobs.map(job => (

                        <tr
                            key={
                                job.jobId
                            }
                        >

                            <td>
                                {
                                    job.jobNumber
                                }
                            </td>

                            <td>
                                {
                                    job.jobName
                                }
                            </td>

                            <td>
                                {
                                    job.recoveryStatus
                                }
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
}

export default RecentJobs;