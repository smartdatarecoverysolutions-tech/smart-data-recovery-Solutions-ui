import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/ReportDashboard.css";

function ReportDashboard() {

    const navigate = useNavigate();

    const reports = [
        {
            title: "Customer Report",
            icon: "👥",
            color: "customer",
            path: "/customer-report"
        },
        {
            title: "Job Report",
            icon: "💻",
            color: "job",
            path: "/job-report"
        },
        {
            title: "Payment Report",
            icon: "💰",
            color: "payment",
            path: "/payment-report"
        },
        {
    title: "Invoice Report",
    icon: "🧾",
    color: "invoice",
    path: "/invoice-report"
},
{
    title: "Feedback Report",
    icon: "⭐",
    color: "feedback",
    path: "/feedback-report"
},
        {
            title: "Date Wise Report",
            icon: "📅",
            color: "date",
            path: "/date-report"
        },
        {
            title: "Monthly Revenue",
            icon: "📊",
            color: "revenue",
            path: "/monthly-report"
        },
       
    ];

    return (

        <div className="report-container">

            {/* NAVBAR */}

            <div className="report-navbar">

    <button
        className="home-btn"
        onClick={() => navigate("/main")}
    >
        🏠 Home
    </button>

    <h1 className="report-title">
        Reports Dashboard
    </h1>

</div>

            {/* REPORT CARDS */}

            <div className="report-grid">

                {reports.map((report, index) => (

                    <div
                        key={index}
                        className={`report-card ${report.color}`}
                        onClick={() =>
                            navigate(report.path)
                        }
                    >
                        <div className="report-icon">
                            {report.icon}
                        </div>

                        <h3>
                            {report.title}
                        </h3>
                    </div>

                ))}

            </div>

        </div>

    );
}

export default ReportDashboard;