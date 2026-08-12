import React, {
    useEffect,
    useState
} from "react";

import {
    useNavigate
} from "react-router-dom";

import {
    getJobs
} from "../../services/jobService";

import "../../assets/css/EmployeeJobList.css";

function EmployeeJobList() {

    const navigate = useNavigate();

    const [jobs, setJobs] = useState([]);

    const [searchTerm,
        setSearchTerm] =
        useState("");

    const loadJobs = async () => {

        try {

            const response =
                await getJobs();

            setJobs(
                response.data
            );

        } catch (error) {

            console.error(error);

        }
    };

    useEffect(() => {

        loadJobs();

    }, []);

    const filteredJobs =
        jobs.filter(job =>
            (
                job.customer
                    ?.customerName || ""
            )
                .toLowerCase()
                .includes(
                    searchTerm.toLowerCase()
                )
        );

    return (

        <div className="job-list-container">

            {/* NAVBAR */}

            <div className="job-navbar">

                <button
                    className="nav-btn"
                    onClick={() =>
                        navigate(
                            "/employee-main"
                        )
                    }
                >
                   🏠 Home
                </button>

                <h2>
                    Employee Job List
                </h2>

                <div></div>

            </div>

            {/* SEARCH */}

            <div className="search-container">

                <input
                    type="text"
                    placeholder="Search Customer Name..."
                    value={searchTerm}
                    onChange={(e) =>
                        setSearchTerm(
                            e.target.value
                        )
                    }
                    className="search-box"
                />

            </div>

            {/* TABLE */}

            <div className="table-wrapper">

                <table className="job-table">

                    <thead>

                        <tr>

                            <th>
                                Job No
                            </th>

                            <th>
                                Customer
                            </th>

                            <th>
                                Job Name
                            </th>

                            <th>
                                Device
                            </th>

                            <th>
                                Recovery Status
                            </th>

                            <th>
                                Action
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredJobs.length > 0 ? (

                            filteredJobs.map(
                                (job) => (

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
                                                job.customer
                                                    ?.customerName ||
                                                "-"
                                            }
                                        </td>

                                        <td>
                                            {
                                                job.jobName
                                            }
                                        </td>

                                        <td>
                                            {
                                                job.deviceType
                                            }
                                        </td>

                                        <td>
                                            {
                                                job.recoveryStatus
                                            }
                                        </td>

                                        <td>
    <button
        className="edit-btn"
        onClick={() =>
            navigate(
                `/employee-edit-job/${job.jobId}`
            )
        }
    >
        Update Status
    </button>
</td>

                                    </tr>

                                )
                            )

                        ) : (

                            <tr>

                                <td
                                    colSpan="6"
                                    style={{
                                        textAlign:
                                            "center",
                                        padding:
                                            "20px"
                                    }}
                                >
                                    No Jobs Found
                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );
}

export default EmployeeJobList;