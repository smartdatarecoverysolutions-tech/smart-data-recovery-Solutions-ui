import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../assets/css/FeedbackReport.css";
import { useNavigate } from "react-router-dom";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import "jspdf-autotable";

function FeedbackReport() {
    const [feedbacks, setFeedbacks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadFeedbacks();
    }, []);

    const loadFeedbacks = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/feedback"
            );
            setFeedbacks(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    // Export Excel
    const exportToExcel = () => {
        const excelData = feedbacks.map((feedback, index) => ({
            "S.No": index + 1,
            "Customer Name": feedback.customerName,
            "Job ID": feedback.jobId,
            "Total Capacity": feedback.totalCapacity,
            "Recovered Data": feedback.recoveredData,
            "Recovery %": feedback.recoveryPercentage,
            "Rating": feedback.rating,
            "Feedback": feedback.feedback,
            "Date": feedback.feedbackDate,
        }));

        const worksheet = XLSX.utils.json_to_sheet(excelData);
        const workbook = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(
            workbook,
            worksheet,
            "Feedback Report"
        );

        const excelBuffer = XLSX.write(
            workbook,
            {
                bookType: "xlsx",
                type: "array",
            }
        );

        const fileData = new Blob(
            [excelBuffer],
            {
                type:
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            }
        );

        saveAs(fileData, "Feedback_Report.xlsx");
    };

    // Export PDF
    const exportToPDF = () => {
        const doc = new jsPDF("landscape");

        doc.setFontSize(16);
        doc.text("Feedback Report", 14, 15);

        const tableColumn = [
            "S.No",
            "Customer",
            "Job ID",
            "Capacity",
            "Recovered",
            "Recovery %",
            "Rating",
            "Feedback",
            "Date",
        ];

        const tableRows = feedbacks.map(
            (feedback, index) => [
                index + 1,
                feedback.customerName,
                feedback.jobId,
                feedback.totalCapacity,
                feedback.recoveredData,
                feedback.recoveryPercentage,
                feedback.rating,
                feedback.feedback,
                feedback.feedbackDate,
            ]
        );

        doc.autoTable({
            head: [tableColumn],
            body: tableRows,
            startY: 25,
        });

        doc.save("Feedback_Report.pdf");
    };

    return (
        <div className="feedback-report-container">

            <div className="feedback-navbar">
                <button
                    className="back-btn"
                    onClick={() => navigate("/reports")}
                >
                    ← Back
                </button>

                   <h2 className="feedback-navbar-title">
          ⭐ Feedback Report
    </h2>
            </div>

            <div
    style={{
        display: "flex",
        gap: "10px",
        marginBottom: "15px",
    }}
>
    <button
        onClick={exportToExcel}
        className="export-excel-btn"
    >
        Export Excel
    </button>

    <button
        onClick={exportToPDF}
        className="export-pdf-btn"
    >
         Export PDF
    </button>
</div>

            <div className="feedback-report-card">
                <table className="feedback-report-table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Customer Name</th>
                            <th>Job ID</th>
                            <th>Total Capacity</th>
                            <th>Recovered Data</th>
                            <th>Recovery %</th>
                            <th>Rating</th>
                            
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {feedbacks.length > 0 ? (
                            feedbacks.map((feedback, index) => (
                                <tr key={feedback.feedbackId}>
                                    <td>{index + 1}</td>
                                    <td>{feedback.customerName}</td>
                                    <td>{feedback.jobId}</td>
                                    <td>{feedback.totalCapacity}</td>
                                    <td>{feedback.recoveredData}</td>
                                    <td>{feedback.recoveryPercentage}%</td>
                                    <td>⭐ {feedback.rating}</td>
                                  
                                    <td>{feedback.feedbackDate}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9" className="no-data">
                                    No Feedback Records Found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default FeedbackReport;