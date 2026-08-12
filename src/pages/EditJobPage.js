import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/EditJob.css";

function EditJobPage() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [job, setJob] = useState({
        recoveryStatus: "",
        estimatedCost: "",
        advanceAmount: ""
    });

    useEffect(() => {

        const loadJob = async () => {

            try {

                const response = await axios.get(
                    `http://localhost:8080/api/jobs/${id}`
                );

                setJob(response.data);

            } catch (error) {

                console.error(error);

            }
        };

        loadJob();

    }, [id]);

    const handleChange = (e) => {

        setJob({
            ...job,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdate = async () => {

    console.log("Sending Job:", job);

    try {

        await axios.put(
            `http://localhost:8080/api/jobs/${id}`,
            job
        );

        alert("Job Updated Successfully");

        navigate("/jobs/list");

    } catch (error) {

        console.error(error);

        alert("Update Failed");
    }
};

    return (

      <div className="edit-job-container">

    <div className="edit-job-navbar">

        <button
            className="nav-btn"
            onClick={() => navigate("/jobs/list")}
        >  ← Back
        </button>

        <h2>
            Edit Job
        </h2>       

    </div>



    <div className="edit-job-card">

                <div className="form-group">

                    <label>Recovery Status</label>

                    <select
                        name="recoveryStatus"
                        value={job.recoveryStatus}
                        onChange={handleChange}
                    >
                       <option value="Pending">Pending</option>
<option value="In Progress">In Progress</option>
<option value="Completed">Completed</option>
<option value="Failed">Failed</option>
<option value="Delivered">Delivered</option>
                    </select>

                </div>

             <div className="form-group">

    <label>Estimated Cost</label>

    <input
        type="number"
        name="estimatedCost"
        value={job.estimatedCost}
        onChange={handleChange}
    />

</div>

                <div className="form-group">

                    <label>Advance Amount</label>

                    <input
                        type="number"
                        name="advanceAmount"
                        value={job.advanceAmount}
                        onChange={handleChange}
                    />

                </div>

               <div className="form-group">

    <label>Balance Amount</label>

    <input
        type="number"
        readOnly
        value={
            (Number(job.estimatedCost) || 0) -
            (
                (Number(job.advanceAmount) || 0) +
                (Number(job.finalPayment) || 0)
            )
        }
    />

</div>
<label>Final Payment</label>

<input
    type="number"
    value={job.finalPayment || ""}
    onChange={(e) =>
        setJob({
            ...job,
            finalPayment: Number(e.target.value)
        })
    }
/>
                <div className="button-group">

                    <button
                        className="update-btn"
                        onClick={handleUpdate}
                    >
                        Update Job
                    </button>

                   

                </div>

            </div>

        </div>
    );
}

export default EditJobPage;