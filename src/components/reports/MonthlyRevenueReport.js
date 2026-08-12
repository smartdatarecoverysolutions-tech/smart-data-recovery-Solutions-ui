import React, {
    useEffect,
    useState
} from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

import "../../assets/css/MonthlyRevenueReport.css";

function MonthlyRevenueReport() {

    const navigate = useNavigate();

    const [report,
        setReport] =
        useState([]);

    useEffect(() => {

        loadReport();

    }, []);

    const loadReport =
        async () => {

            try {

                const response =
                    await axios.get(
                        "http://localhost:8080/api/payments"
                    );

                const payments =
                    response.data;

                const monthlyData = {};

                payments.forEach(payment => {

                    const date =
                        new Date(
                            payment.paymentDate
                        );

                    const month =
                        date.toLocaleString(
                            "default",
                            {
                                month: "long",
                                year: "numeric"
                            }
                        );

                    if (
                        !monthlyData[month]
                    ) {

                        monthlyData[
                            month
                        ] = {
                            month,
                            revenue: 0,
                            count: 0
                        };
                    }

                    monthlyData[
                        month
                    ].revenue +=
                        Number(
                            payment.amount
                        );

                    monthlyData[
                        month
                    ].count += 1;

                });

                setReport(
                    Object.values(
                        monthlyData
                    )
                );

            } catch (error) {

                console.error(error);

            }
        };

    const exportPDF = () => {

        const doc =
            new jsPDF();

        doc.text(
            "Monthly Revenue Report",
            14,
            15
        );

        autoTable(doc, {

            head: [[
                "Month",
                "Payments",
                "Revenue"
            ]],

            body:
                report.map(item => [

                    item.month,

                    item.count,

                    `₹ ${item.revenue}`

                ])
        });

        doc.save(
            "MonthlyRevenueReport.pdf"
        );
    };

    const exportExcel = () => {

        const worksheet =
            XLSX.utils.json_to_sheet(
                report
            );

        const workbook =
            XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(
            workbook,
            worksheet,
            "Revenue"
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
            "MonthlyRevenueReport.xlsx"
        );
    };

    const totalRevenue =
        report.reduce(
            (sum, item) =>
                sum + item.revenue,
            0
        );

    return (

        <div className="monthly-container">

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
                    Monthly Revenue Report
                </h1>

            </div>

            <div className="summary-card">

                <h2>
                    Total Revenue
                </h2>

                <h1>
                    ₹ {totalRevenue}
                </h1>

            </div>

            <div className="action-buttons">

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

            <table className="revenue-table">

                <thead>

                    <tr>

                        <th>Month</th>

                        <th>No Of Payments</th>

                        <th>Revenue</th>

                    </tr>

                </thead>

                <tbody>

                    {report.map(
                        (
                            item,
                            index
                        ) => (

                            <tr
                                key={index}
                            >

                                <td>
                                    {item.month}
                                </td>

                                <td>
                                    {item.count}
                                </td>

                                <td>
                                    ₹ {item.revenue}
                                </td>

                            </tr>

                        )
                    )}
                    <tr>
                                <td colSpan="9" className="no-data">
                                    No Monthly Revenue Report Found
                                </td>
                            </tr>

                </tbody>

            </table>

        </div>
    );
}

export default MonthlyRevenueReport;