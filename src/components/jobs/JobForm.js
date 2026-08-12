import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeviceDetails from "./DeviceDetails";
import ProblemDetails from "./ProblemDetails";
import JobInformation from "./JobInformation";
import "../../assets/css/JobForm.css";
import { saveJob } from "../../services/jobService";

function JobForm() {

    const navigate = useNavigate();

      const goBack = () => {
        navigate("/main");
    };

    const customerData =
        JSON.parse(sessionStorage.getItem("customerData")) || {};

    const [job, setJob] = useState({
        customerName: customerData.customerName || "",
        mobileNumber: customerData.mobileNumber || "",

        deviceType: "",
        brand: "",
        modelNumber: "",
        capacity: "",
        serialNumber: "",

        problemType: "",
        problemDescription: "",
        importantDataRequired: "",

        jobName: "",
        receivedBy: "",

        priority: "",

        estimatedCost: "",
        advanceAmount: "",

        recoveryStatus: "",
        remarks: ""
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    // ================= VALIDATION =================
    const validate = () => {

        let temp = {};

        if (!job.customerName)
            temp.customerName = "Customer Name is required";

        if (!job.mobileNumber)
            temp.mobileNumber = "Mobile Number is required";

        if (!job.deviceType)
            temp.deviceType = "Device Type is required";

        if (!job.brand)
            temp.brand = "Brand is required";

        if (!job.problemType)
            temp.problemType = "Problem Type is required";

        if (!job.jobName)
            temp.jobName = "Job Name is required";

        if (!job.priority)
            temp.priority = "Priority is required";

        if (!job.estimatedCost)
            temp.estimatedCost = "Estimated Cost is required";

        if (!job.advanceAmount)
            temp.advanceAmount = "Advance Amount is required";

        if (!job.recoveryStatus)
            temp.recoveryStatus = "Recovery Status is required";

        setErrors(temp);

        return Object.keys(temp).length === 0;
    };

    // ================= SUBMIT =================
    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!validate()) return;

        try {

            const customer =
                JSON.parse(
                    sessionStorage.getItem("customerData")
                );

            const payload = {
                ...job,
                customer: {
                    customerId: customer.customerId
                }
            };

            const response =
                await saveJob(payload);

            sessionStorage.setItem(
                "jobData",
                JSON.stringify(response.data)
            );

            setSuccessMessage(
                "Job saved successfully. Please continue to Payment."
            );

            setTimeout(() => {
                navigate("/payments");
            }, 2000);

        } catch (error) {

            console.error(error);

            setSuccessMessage(
                "Failed to save job."
            );
        }
    };

    return (
        <div className="job-container">
            <div className="job-card">

                {/* NAVBAR */}
                <div
                    style={{
                        background:
                            "linear-gradient(90deg, #1565c0, #42a5f5)",
                        color: "white",
                        padding: "15px 20px",
                        borderRadius: "8px",
                        marginBottom: "20px",
                        display: "flex",
                        alignItems: "center",
                        boxShadow:
                            "0 2px 6px rgba(0,0,0,0.2)"
                    }}
                >
                    <button
                        type="button"
                        onClick={goBack}
                        style={{
                            background: "white",
                            color: "#1565c0",
                            border: "none",
                            padding: "8px 15px",
                            borderRadius: "5px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            marginRight: "15px"
                        }}
                    >
                        ← Back
                    </button>

                    <h2
                        style={{
                            margin: 0,
                            color: "white"
                        }}
                    >
                        Job Entry
                    </h2>
                </div>

                <form onSubmit={handleSubmit}>

                    {/* DEVICE */}
                    <div className="section">
                        <h3>Device Details *</h3>

                        <DeviceDetails
                            job={job}
                            setJob={setJob}
                        />

                        <p style={{ color: "red" }}>
                            {errors.deviceType}
                        </p>

                        <p style={{ color: "red" }}>
                            {errors.brand}
                        </p>
                    </div>

                    {/* PROBLEM */}
                    <div className="section">
                        <h3>Problem Details *</h3>

                        <ProblemDetails
                            job={job}
                            setJob={setJob}
                        />

                        <p style={{ color: "red" }}>
                            {errors.problemType}
                        </p>
                    </div>

                    {/* JOB INFO */}
                    <div className="section">
                        <h3>Job Information *</h3>

                        <JobInformation
                            job={job}
                            setJob={setJob}
                        />

                        <p style={{ color: "red" }}>
                            {errors.jobName}
                        </p>

                        <p style={{ color: "red" }}>
                            {errors.priority}
                        </p>

                        <p style={{ color: "red" }}>
                            {errors.estimatedCost}
                        </p>

                        <p style={{ color: "red" }}>
                            {errors.advanceAmount}
                        </p>

                        <p style={{ color: "red" }}>
                            {errors.recoveryStatus}
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="save-job-btn"
                    >
                        Continue to Payment
                    </button>

                    {/* SUCCESS MESSAGE */}
                    {successMessage && (
                        <p
                            style={{
                                color: successMessage.includes("Failed")
                                    ? "red"
                                    : "green",
                                marginTop: "10px",
                                fontWeight: "bold",
                                textAlign: "center"
                            }}
                        >
                            {successMessage}
                        </p>
                    )}

                </form>

            </div>
        </div>
    );
}

export default JobForm;