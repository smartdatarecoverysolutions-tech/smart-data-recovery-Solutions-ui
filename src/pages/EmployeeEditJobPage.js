import React, {
    useEffect,
    useState
} from "react";

import {
    useParams,
    useNavigate
} from "react-router-dom";

import {
    getJobById,
    updateJob
} from "../services/jobService";

import "../assets/css/EmployeeEditJobPage.css";

function EmployeeEditJobPage() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [job,
        setJob] = useState({
            recoveryStatus: ""
        });

 useEffect(() => {

    const loadJob = async () => {

        try {

            const response =
                await getJobById(id);

            setJob(response.data);

        } catch (error) {

            console.error(error);

        }
    };

    loadJob();

}, [id]);

const updateStatus = async (e) => {

    e.preventDefault();

    try {

        const updatedJob = {
            ...job,
            recoveryStatus: job.recoveryStatus
        };

        await updateJob(id, updatedJob);

        alert("Recovery Status Updated Successfully");

        if (job.recoveryStatus === "Delivered") {

         navigate("/feedback", {
    state: {
        jobId: job.jobId,
        customerName: job.customer?.customerName,
        fromEmployee: true
    }
});

        } else {

            navigate("/employee-jobs");

        }

    } catch (error) {

        console.error(error);

    }

};

   

        return (

     <div className="employee-edit-container">

        <div className="employee-edit-header">

            <h2>
                Update Recovery Status
            </h2>

            <p>
                Employee Access
            </p>

        </div>

        <form onSubmit={updateStatus}>

            <div className="employee-form-group">

                <label>
                    Recovery Status
                </label>

                <select
                    className="employee-select"
                    value={job.recoveryStatus}
                    onChange={(e) =>
                        setJob({
                            ...job,
                            recoveryStatus:
                                e.target.value
                        })
                    }
                >

                    <option value="">
                        Select Status
                    </option>

                    <option value="Pending">
                        Pending
                    </option>

                    <option value="In Progress">
                        In Progress
                    </option>

                    <option value="Recovered">
                        Recovered
                    </option>

                    <option value="Delivered">
                        Delivered
                    </option>

                    <option value="Failed">
                        Failed
                    </option>

                </select>

            </div>

            <div className="employee-btn-group">

                 <button
                    type="submit"
                    className="employee-save-btn"
                >
                    Update Status
                </button>

                <button
                    type="button"
                    className="employee-back-btn"
                    onClick={() =>
                        navigate("/employee-jobs")
                    }
                >
                    Back
                </button>

              

            </div>

        </form>

    </div>

);
}

export default EmployeeEditJobPage;