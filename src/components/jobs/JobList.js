import React, {
    useEffect,
    useState
} from "react";

import {
    useNavigate
} from "react-router-dom";

import {
    getJobs,
    deleteJob
} from "../../services/jobService";

import "../../assets/css/JobList.css";

function JobList() {

    const navigate = useNavigate();

    const [jobs, setJobs] = useState([]);

    const [searchTerm,
        setSearchTerm] =
        useState("");

    const loadJobs = async () => {

        try {

            const response =
                await getJobs();

            setJobs(response.data);

        } catch (error) {

            console.error(error);

        }
    };

    useEffect(() => {

        loadJobs();

    }, []);

    const removeJob = async (id) => {

        if (
            !window.confirm(
                "Are you sure you want to delete this job?"
            )
        ) {
            return;
        }

        try {

            await deleteJob(id);

            alert(
                "Job Deleted Successfully"
            );

            loadJobs();

        } catch (error) {

            console.error(
                "Delete Error:",
                error
            );

            alert(
                error.response?.data ||
                error.message ||
                "Delete Failed"
            );
        }
    };

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

            <div className="job-navbar">

                <button
                    className="nav-btn"
                    onClick={() =>
                        navigate("/main")
                    }
                >
                     🏠 Home
                </button>

                <h2>
                    Job List
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

            <div className="table-wrapper">

                <table className="job-table">

                   <thead>
    <tr>
        <th>Job No</th>
        <th>Customer</th>
        <th>Job Name</th>
        <th>Device</th>
        <th>Status</th>
        <th>Estimated</th>
        <th>Advance</th>
        <th>Final Payment</th>
        <th>Balance</th>
        <th>Edit</th>
        <th>Feedback</th>
        <th>Delete</th>
    </tr>
</thead>

                   

                    <tbody>

                        {filteredJobs.length > 0 ? (

                            filteredJobs.map(
                                (job) => (

                                    <tr key={job.jobId}>

    <td>{job.jobNumber}</td>

    <td>
        {job.customer?.customerName || "-"}
    </td>

    <td>{job.jobName}</td>

    <td>{job.deviceType}</td>

    <td>{job.recoveryStatus}</td>

    <td>
        ₹ {job.estimatedCost || 0}
    </td>

    <td>
        ₹ {job.advanceAmount || 0}
    </td>

    <td>
        ₹ {job.finalPayment || 0}
    </td>

    <td>
        {
            (
                (job.estimatedCost || 0)
                -
                (
                    (job.advanceAmount || 0)
                    +
                    (job.finalPayment || 0)
                )
            ) <= 0
                ? (
                    <span
                        style={{
                            color: "green",
                            fontWeight: "bold"
                        }}
                    >
                        PAID
                    </span>
                )
                : (
                    <span
                        style={{
                            color: "red",
                            fontWeight: "bold"
                        }}
                    >
                        ₹ {
                            (job.estimatedCost || 0)
                            -
                            (
                                (job.advanceAmount || 0)
                                +
                                (job.finalPayment || 0)
                            )
                        }
                    </span>
                )
        }
    </td>

    <td>
        <button
            className="edit-btn"
            onClick={() =>
                navigate(`/edit-job/${job.jobId}`)
            }
        >
            Edit
        </button>
    </td>

    <td>
        {job.recoveryStatus === "Delivered" ? (
            <button
                className="feedback-btn"
                onClick={() =>
                    navigate("/feedback", {
                        state: {
                            jobId: job.jobId,
                            customerName:
                                job.customer?.customerName,
                            capacity: job.capacity,
                            fromEmployee: false
                        }
                         })
                }
            >
                Feedback
            </button>
        ) : (
            <span style={{ color: "#999" }}>
                -
            </span>
        )}
    </td>

    <td>
        <button
            className="delete-btn"
            onClick={() =>
                removeJob(job.jobId)
            }
        >
            Delete
        </button>
    </td>

</tr>

                                )
                            )

                        ) : (

                            <tr>

                                <td
                                    colSpan="11"
                                   style={{
                                        textAlign: "center",
                                        padding: "25px",
                                        fontSize: "18px",
                                        color: "#ed171e",
                                        fontWeight: "bold"
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

export default JobList;