import React, {
    useState
} from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

import "../../assets/css/DateWiseReport.css";

function DateWiseReport() {

    const navigate = useNavigate();

    const [fromDate,
        setFromDate] =
        useState("");

    const [toDate,
        setToDate] =
        useState("");

    const [jobs,
        setJobs] =
        useState([]);

    const searchReport =
        async () => {

            try {

                const response =
                    await axios.get(
                        `http://localhost:8080/api/jobs`
                    );

                const filtered =
                    response.data.filter(job => {

                        const jobDate =
                            new Date(
                                job.createdDate
                            );

                        return (
                            jobDate >= new Date(fromDate)
                            &&
                            jobDate <= new Date(toDate)
                        );
                    });

                setJobs(filtered);

            } catch (error) {

                console.error(error);
            }
        };

    const exportPDF = () => {

        const doc =
            new jsPDF("landscape");

        doc.text(
            "Date Wise Report",
            14,
            15
        );

        autoTable(doc, {

            head: [[
                "Job No",
                "Customer",
                "Status",
                "Estimated",
                "Advance"
            ]],

            body:
                jobs.map(job => [

                    job.jobNumber,

                    job.customer
                        ?.customerName,

                    job.recoveryStatus,

                    job.estimatedCost,

                    job.advanceAmount
                ])
        });

        doc.save(
            "DateWiseReport.pdf"
        );
    };

    const exportExcel = () => {

        const worksheet =
            XLSX.utils.json_to_sheet(
                jobs
            );

        const workbook =
            XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(
            workbook,
            worksheet,
            "DateReport"
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
            "DateWiseReport.xlsx"
        );
    };

    return (

        <div className="report-container">

            <div className="report-header">

                <button
                    className="back-btn"
                    onClick={() =>
                        navigate("/reports")
                    }
                >
                    ← Back
                </button>

                <h1>
                    Date Wise Report
                </h1>

            </div>

            <div className="filter-box">

                <input
                    type="date"
                    value={fromDate}
                    onChange={(e) =>
                        setFromDate(
                            e.target.value
                        )
                    }
                />

                <input
                    type="date"
                    value={toDate}
                    onChange={(e) =>
                        setToDate(
                            e.target.value
                        )
                    }
                />

                <button
                    className="search-btn"
                    onClick={searchReport}
                >
                    Search
                </button>

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

            <table className="report-table">

                <thead>

                    <tr>

                        <th>Job No</th>
                        <th>Customer</th>
                        <th>Status</th>
                        <th>Estimated</th>
                        <th>Advance</th>

                    </tr>

                </thead>

                <tbody>

                    {jobs.map(job => (

                        <tr key={job.jobId}>

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
                                {job.recoveryStatus}
                            </td>

                            <td>
                                ₹ {job.estimatedCost}
                            </td>

                            <td>
                                ₹ {job.advanceAmount}
                            </td>

                        </tr>

                    ))}
                    <tr>
                                <td colSpan="9" className="no-data">
                                    No Datewise Records Found
                                </td>
                            </tr>

                </tbody>

            </table>

        </div>
    );
}

export default DateWiseReport;