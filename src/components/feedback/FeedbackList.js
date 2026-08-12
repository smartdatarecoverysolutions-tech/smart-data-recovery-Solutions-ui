import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../assets/css/FeedbackList.css";

function FeedbackList() {

    const [feedbacks, setFeedbacks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    const fetchFeedbacks = async () => {

        try {

            const response = await axios.get(
                "http://localhost:8080/api/feedback"
            );

            setFeedbacks(response.data);

        } catch (error) {

            console.error(
                "Error fetching feedbacks",
                error
            );
        }
    };

    // Search Filter
    const filteredFeedbacks = feedbacks.filter(feedback =>

        feedback.customerName
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase())

        ||

        feedback.jobId
            ?.toString()
            .includes(searchTerm)

        ||

        feedback.feedback
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase())

        ||

        feedback.feedbackDate
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase())

    );

    return (

        <div className="feedback-page">

            {/* Navbar */}

           <div className="feedback-navbar">

    <button
        className="nav-btn"
        onClick={() => navigate("/main")}
    >
        ← Back
    </button>

    <h2 className="feedback-heading">
        ⭐ Customer Feedback List
    </h2>

    <div className="navbar-space"></div>

</div>

{/* Add this here */}

<div className="feedback-search-container">

    <input
        type="text"
        placeholder="Search Customer / Job ID..."
        value={searchTerm}
        onChange={(e) =>
            setSearchTerm(e.target.value)
        }
        className="feedback-search-box"
    />

</div>
            {/* Table */}

            <div className="feedback-card">

                <table className="feedback-table">

                    <thead>

                        <tr>

                            <th>S.No</th>
                            <th>Job ID</th>
                            <th>Customer Name</th>
                            <th>Total Capacity</th>
                            <th>Recovered Data</th>
                            <th>Recovery %</th>
                            <th>Rating</th>
                            <th>Feedback</th>
                            <th>Date</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredFeedbacks.length > 0 ? (

                            filteredFeedbacks.map((feedback, index) => (

                                <tr key={feedback.feedbackId}>

                                    <td>{index + 1}</td>

                                    <td>{feedback.jobId}</td>

                                    <td>{feedback.customerName}</td>

                                    <td>{feedback.totalCapacity}</td>

                                    <td>{feedback.recoveredData}</td>

                                    <td>{feedback.recoveryPercentage}%</td>

                                    <td>⭐ {feedback.rating}/5</td>

                                    <td>{feedback.feedback}</td>

                                    <td>{feedback.feedbackDate}</td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="9"
                                    className="no-data"
                                >
                                    No Feedbacks Found
                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default FeedbackList;