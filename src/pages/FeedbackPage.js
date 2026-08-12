import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { saveFeedback } from "../services/feedbackService";
import "../assets/css/FeedbackPage.css";

function FeedbackPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const {
        jobId,
        customerName,
        fromEmployee
    } = location.state || {};

    const [feedback, setFeedback] = useState({
        jobId: jobId || "",
        customerName: customerName || "",

        capacity: "",
        capacityUnit: "GB",

        recoveredData: "",
        recoveredUnit: "GB",

        recoveryPercentage: "",

        rating: "",
        remarks: ""
    });

    const [errors, setErrors] = useState({});

    const convertToGB = (value, unit) => {
        const num = Number(value);

        if (isNaN(num)) return 0;

        switch (unit) {
            case "KB":
                return num / (1024 * 1024);

            case "MB":
                return num / 1024;

            case "GB":
                return num;

            case "TB":
                return num * 1024;

            default:
                return 0;
        }
    };

    const calculatePercentage = (
        recovered,
        recoveredUnit,
        total,
        totalUnit
    ) => {
        const recoveredGB = convertToGB(recovered, recoveredUnit);
        const totalGB = convertToGB(total, totalUnit);

        if (recoveredGB === 0 || totalGB === 0) {
            return "";
        }

        return ((recoveredGB / totalGB) * 100).toFixed(2);
    };

    const validate = () => {
        let newErrors = {};

        if (!feedback.capacity || Number(feedback.capacity) <= 0) {
            newErrors.capacity = "Please enter a valid total capacity.";
        }

        if (!feedback.recoveredData || Number(feedback.recoveredData) <= 0) {
            newErrors.recoveredData = "Please enter recovered data.";
        }

        const totalGB = convertToGB(
            feedback.capacity,
            feedback.capacityUnit
        );

        const recoveredGB = convertToGB(
            feedback.recoveredData,
            feedback.recoveredUnit
        );

        if (
            totalGB > 0 &&
            recoveredGB > totalGB
        ) {
            newErrors.recoveredData =
                "Recovered data cannot be greater than total capacity.";
        }

        if (!feedback.rating) {
            newErrors.rating = "Please select a rating.";
        }

       // Remarks is optional
if (
    feedback.remarks.trim() &&
    feedback.remarks.trim().length < 10
) {
    newErrors.remarks =
        "Remarks must be at least 10 characters if entered.";
}

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const save = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            const payload = {
                jobId: Number(feedback.jobId),

                customerName: feedback.customerName,

                totalCapacity:
                    feedback.capacity +
                    " " +
                    feedback.capacityUnit,

                recoveredData:
                    feedback.recoveredData +
                    " " +
                    feedback.recoveredUnit,

                recoveryPercentage:
                    Number(feedback.recoveryPercentage),

                rating: Number(feedback.rating),

                feedback: feedback.remarks,

                feedbackDate:
                    new Date().toISOString().split("T")[0]
            };

            console.log("Payload:", payload);

            await saveFeedback(payload);

            alert("Feedback Saved Successfully");

            if (fromEmployee) {
                navigate("/employee-jobs");
            } else {
                navigate("/jobs/list");
            }
        } catch (error) {
            console.error(error);
            alert("Failed to Save Feedback");
        }
    };

    return (
        <div className="feedback-container">
            <div className="feedback-navbar">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="back-btn"
                >
                    ← Back
                </button>

                <h2>Customer Feedback</h2>
            </div>

            <form
                className="feedback-form"
                onSubmit={save}
            >
                <label>Job ID</label>

                <input
                    value={feedback.jobId}
                    readOnly
                />

                <label>Customer Name</label>

                <input
                    value={feedback.customerName}
                    readOnly
                />

                <label>Total Capacity</label>

                <div
                    style={{
                        display: "flex",
                        gap: "10px"
                    }}
                >
                    <input
                        type="number"
                        min="1"
                        placeholder="Enter Capacity"
                        value={feedback.capacity}
                        onChange={(e) => {
                            const value = e.target.value;

                            setFeedback({
                                ...feedback,
                                capacity: value,
                                recoveryPercentage:
                                    calculatePercentage(
                                        feedback.recoveredData,
                                        feedback.recoveredUnit,
                                        value,
                                        feedback.capacityUnit
                                    )
                            });

                            setErrors({
                                ...errors,
                                capacity: ""
                            });
                        }}
                    />

                    <select
                        value={feedback.capacityUnit}
                        onChange={(e) =>
                            setFeedback({
                                ...feedback,
                                capacityUnit: e.target.value,
                                recoveryPercentage:
                                    calculatePercentage(
                                        feedback.recoveredData,
                                        feedback.recoveredUnit,
                                        feedback.capacity,
                                        e.target.value
                                    )
                            })
                        }
                    >
                        <option value="KB">KB</option>
                        <option value="MB">MB</option>
                        <option value="GB">GB</option>
                        <option value="TB">TB</option>
                    </select>
                </div>

                {errors.capacity && (
                    <p className="error-text">
                        {errors.capacity}
                    </p>
                )}

                <label>Recovered Data</label>

                <div
                    style={{
                        display: "flex",
                        gap: "10px"
                    }}
                >
                    <input
                        type="number"
                        min="1"
                        placeholder="Recovered Data"
                        value={feedback.recoveredData}
                        onChange={(e) => {
                            const recovered = e.target.value;

                            setFeedback({
                                ...feedback,
                                recoveredData: recovered,
                                recoveryPercentage:
                                    calculatePercentage(
                                        recovered,
                                        feedback.recoveredUnit,
                                        feedback.capacity,
                                        feedback.capacityUnit
                                    )
                            });

                            setErrors({
                                ...errors,
                                recoveredData: ""
                            });
                        }}
                    />

                    <select
                        value={feedback.recoveredUnit}
                        onChange={(e) => {
                            const unit = e.target.value;

                            setFeedback({
                                ...feedback,
                                recoveredUnit: unit,
                                recoveryPercentage:
                                    calculatePercentage(
                                        feedback.recoveredData,
                                        unit,
                                        feedback.capacity,
                                        feedback.capacityUnit
                                    )
                            });
                        }}
                    >
                        <option value="KB">KB</option>
                        <option value="MB">MB</option>
                        <option value="GB">GB</option>
                        <option value="TB">TB</option>
                    </select>
                </div>

                {errors.recoveredData && (
                    <p className="error-text">
                        {errors.recoveredData}
                    </p>
                )}

                <label>Recovery %</label>

                <input
                    value={feedback.recoveryPercentage}
                    readOnly
                />

                <label>Rating</label>

                <select
                    value={feedback.rating}
                    onChange={(e) => {
                        setFeedback({
                            ...feedback,
                            rating: e.target.value
                        });

                        setErrors({
                            ...errors,
                            rating: ""
                        });
                    }}
                >
                    <option value="">
                        Select Rating
                    </option>

                    <option value="1">
                        ⭐ 1 Star
                    </option>

                    <option value="2">
                        ⭐⭐ 2 Stars
                    </option>

                    <option value="3">
                        ⭐⭐⭐ 3 Stars
                    </option>

                    <option value="4">
                        ⭐⭐⭐⭐ 4 Stars
                    </option>

                    <option value="5">
                        ⭐⭐⭐⭐⭐ 5 Stars
                    </option>
                </select>

                {errors.rating && (
                    <p className="error-text">
                        {errors.rating}
                    </p>
                )}

                <label>Remarks</label>

                <textarea
                    placeholder="Enter remarks..."
                    value={feedback.remarks}
                    onChange={(e) => {
                        setFeedback({
                            ...feedback,
                            remarks: e.target.value
                        });

                        setErrors({
                            ...errors,
                            remarks: ""
                        });
                    }}
                />

                {errors.remarks && (
                    <p className="error-text">
                        {errors.remarks}
                    </p>
                )}

                <button
                    type="submit"
                    className="submit-feedback-btn"
                >
                    Save Feedback
                </button>
            </form>
        </div>
    );
}

export default FeedbackPage;