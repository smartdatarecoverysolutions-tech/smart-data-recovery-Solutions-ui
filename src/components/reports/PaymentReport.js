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

import "../../assets/css/PaymentReport.css";

function PaymentReport() {

    const navigate = useNavigate();

    const [payments,
        setPayments] =
        useState([]);

    useEffect(() => {

        loadPayments();

    }, []);

    const loadPayments =
        async () => {

            try {

                const response =
                    await axios.get(
                        "http://localhost:8080/api/payments"
                    );

                setPayments(
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
            "Payment Report",
            14,
            15
        );

        autoTable(doc, {

            head: [[
                "Payment ID",
                "Customer",
                "Job No",
                "Amount",
                "Type",
                "Method"
            ]],

            body:
                payments.map(payment => [

                    payment.paymentId,

                    payment.recoveryJob
                        ?.customer
                        ?.customerName,

                    payment.recoveryJob
                        ?.jobNumber,

                    payment.amount,

                    payment.paymentType,

                    payment.paymentMethod

                ])
        });

        doc.save(
            "PaymentReport.pdf"
        );
    };

    const exportExcel = () => {

        const excelData =
            payments.map(payment => ({

                "Payment ID":
                    payment.paymentId,

                "Customer":
                    payment.recoveryJob
                        ?.customer
                        ?.customerName,

                "Job No":
                    payment.recoveryJob
                        ?.jobNumber,

                "Amount":
                    payment.amount,

                "Type":
                    payment.paymentType,

                "Method":
                    payment.paymentMethod

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
            "Payments"
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
            "PaymentReport.xlsx"
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
                    Payment Report
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

                            <th>Payment ID</th>
                            <th>Customer</th>
                            <th>Job No</th>
                            <th>Amount</th>
                            <th>Type</th>
                            <th>Method</th>

                        </tr>

                    </thead>

                    <tbody>

                        {payments.map(payment => (

                            <tr
                                key={
                                    payment.paymentId
                                }
                            >

                                <td>
                                    {payment.paymentId}
                                </td>

                                <td>
                                    {
                                        payment
                                        .recoveryJob
                                        ?.customer
                                        ?.customerName
                                    }
                                </td>

                                <td>
                                    {
                                        payment
                                        .recoveryJob
                                        ?.jobNumber
                                    }
                                </td>

                                <td>
                                    ₹ {payment.amount}
                                </td>

                                <td>
                                    {payment.paymentType}
                                </td>

                                <td>
                                    {payment.paymentMethod}
                                </td>

                            </tr>

                        ))}
                      <tr>
                                <td colSpan="9" className="no-data">
                                    No Payment Records Found
                                </td>
                            </tr>
                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default PaymentReport;