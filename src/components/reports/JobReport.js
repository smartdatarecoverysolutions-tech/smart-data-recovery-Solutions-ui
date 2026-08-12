import React,
{
    useEffect,
    useState
}
from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

import "../../assets/css/JobReport.css";

function JobReport() {

    const navigate = useNavigate();

    const [jobs,
        setJobs] =
        useState([]);

    useEffect(() => {

        loadJobs();

    }, []);

    const loadJobs =
        async () => {

            try {

                const response =
                    await axios.get(
                        "http://localhost:8080/api/jobs"
                    );

                setJobs(
                    response.data
                );

            } catch (error) {

                console.error(error);

            }
        };

    const exportPDF = () => {

        const doc =
            new jsPDF(
                "landscape"
            );

        doc.text(
            "Job Report",
            14,
            15
        );

        autoTable(doc, {

            head: [[
                "Job No",
                "Customer",
                "Job Name",
                "Device",
                "Status",
                "Estimated",
                "Advance",
                "Balance"
            ]],

            body:
                jobs.map(job => [

                    job.jobNumber,

                    job.customer
                        ?.customerName,

                    job.jobName,

                    job.deviceType,

                    job.recoveryStatus,

                    job.estimatedCost,

                    job.advanceAmount,

                    (job.estimatedCost || 0)
                    -
                    (job.advanceAmount || 0)

                ])
        });

        doc.save(
            "JobReport.pdf"
        );
    };

    const exportExcel = () => {

        const excelData =
            jobs.map(job => ({

                "Job Number":
                    job.jobNumber,

                "Customer":
                    job.customer
                        ?.customerName,

                "Job Name":
                    job.jobName,

                "Device":
                    job.deviceType,

                "Status":
                    job.recoveryStatus,

                "Estimated":
                    job.estimatedCost,

                "Advance":
                    job.advanceAmount,

                "Balance":
                    (job.estimatedCost || 0)
                    -
                    (job.advanceAmount || 0)

            }));

        const worksheet =
            XLSX.utils.json_to_sheet(
                excelData
            );

        const workbook =
            XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(
            workbook,
            worksheet,
            "Jobs"
        );

        const excelBuffer =
            XLSX.write(
                workbook,
                {
                    bookType: "xlsx",
                    type: "array"
                }
            );

        const file =
            new Blob(
                [excelBuffer],
                {
                    type:
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                }
            );

        saveAs(
            file,
            "JobReport.xlsx"
        );
    };

    return (

        <div className="report-container">

            <div className="report-header">

                <button
                    className="home-btn"
                    onClick={() =>
                        navigate("/reports")
                    }
                >
                    ← Back
                </button>

                <h1>
                    Job Report
                </h1>

            </div>

            <div className="report-actions">

                <button
                    className="pdf-btn"
                    onClick={exportPDF}
                >
                    Export PDF
                </button>

                <button
                    className="excel-btn"
                    onClick={exportExcel}
                >
                    Export Excel
                </button>

            </div>

            <div className="table-wrapper">

                <table className="report-table">

                    <thead>

                        <tr>

                            <th>Job No</th>
                            <th>Customer</th>
                            <th>Job Name</th>
                            <th>Device</th>
                            <th>Status</th>
                            <th>Estimated</th>
                            <th>Advance</th>
                            <th>Balance</th>

                        </tr>

                    </thead>

                    <tbody>

                        {jobs.map(job => (

                            <tr
                                key={job.jobId}
                            >

                                <td>
                                    {job.jobNumber}
                                </td>

                                <td>
                                    {
                                        job.customer
                                        ?.customerName
                                    }
                                </td>

                                <td>
                                    {job.jobName}
                                </td>

                                <td>
                                    {job.deviceType}
                                </td>

                                <td>
                                    {job.recoveryStatus}
                                </td>

                                <td>
                                    ₹ {job.estimatedCost}
                                </td>

                                <td>
                                    ₹ {job.advanceAmount}
                                </td>

                                <td>
                                    ₹ {
                                        (job.estimatedCost || 0)
                                        -
                                        (job.advanceAmount || 0)
                                    }
                                </td>

                            </tr>

                        ))}
                        <tr>
                                <td colSpan="9" className="no-data">
                                    No Job Records Found
                                </td>
                            </tr>

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default JobReport;