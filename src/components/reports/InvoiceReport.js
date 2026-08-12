import React, {
    useEffect,
    useState
} from "react";

import axios from "axios";

import {
    useNavigate
} from "react-router-dom";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import "jspdf-autotable";


function InvoiceReport() {

    const navigate = useNavigate();

    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        loadInvoices();
    }, []);

    const loadInvoices = async () => {

        try {

            const response = await axios.get(
                "http://localhost:8080/api/invoices"
            );

            setInvoices(response.data);

        } catch (error) {

            console.error(error);
        }
    };

    // =========================
    // EXPORT EXCEL
    // =========================

    const exportToExcel = () => {

        const excelData = invoices.map((invoice) => ({

            "Invoice No": invoice.invoiceNumber,
            "Customer Name": invoice.customerName,
            "Job No": invoice.jobNumber,
            "Amount": invoice.amount,
            "Invoice Date": invoice.invoiceDate

        }));

        const worksheet =
            XLSX.utils.json_to_sheet(excelData);

        const workbook =
            XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(
            workbook,
            worksheet,
            "Invoice Report"
        );

        const excelBuffer =
            XLSX.write(workbook, {
                bookType: "xlsx",
                type: "array"
            });

        const fileData = new Blob(
            [excelBuffer],
            {
                type:
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            }
        );

        saveAs(
            fileData,
            "Invoice_Report.xlsx"
        );
    };

    // =========================
    // EXPORT PDF
    // =========================

    const exportToPDF = () => {

        const doc = new jsPDF();

        doc.setFontSize(18);

        doc.text(
            "Invoice Report",
            14,
            15
        );

        const tableColumn = [

            "Invoice No",
            "Customer Name",
            "Job No",
            "Amount",
            "Date"

        ];

        const tableRows = invoices.map(
            (invoice) => [

                invoice.invoiceNumber,
                invoice.customerName,
                invoice.jobNumber,
                invoice.amount,
                invoice.invoiceDate

            ]
        );

        doc.autoTable({

            head: [tableColumn],

            body: tableRows,

            startY: 25

        });

        doc.save(
            "Invoice_Report.pdf"
        );
    };


    return (

        <div className="report-container">
<div className="invoice-navbar">

    <button
        className="back-btn"
        onClick={() => navigate("/reports")}
    >
        ← Back
    </button>

    <h2 className="invoice-navbar-title">
        📄 Invoice Report
    </h2>

</div>

<div
    style={{
        display: "flex",
        gap: "10px",
        marginBottom: "15px"
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

            <div className="table-wrapper">

                <table className="report-table">

                    <thead>

                        <tr>

                            <th>Invoice No</th>
                            <th>Customer Name</th>
                            <th>Job No</th>
                            <th>Amount</th>
                            <th>Date</th>

                        </tr>

                    </thead>

                    <tbody>

                        {invoices.map(
                            (invoice) => (

                                <tr
                                    key={
                                        invoice.invoiceId
                                    }
                                >

                                    <td>
                                        {
                                            invoice.invoiceNumber
                                        }
                                    </td>

                                    <td>
                                        {
                                            invoice.customerName
                                        }
                                    </td>

                                    <td>
                                        {
                                            invoice.jobNumber
                                        }
                                    </td>

                                    <td>
                                        ₹ {
                                            invoice.amount
                                        }
                                    </td>

                                    <td>
                                        {
                                            invoice.invoiceDate
                                        }
                                    </td>

                                </tr>

                            )
                        )}
                        <tr>
                                <td colSpan="9" className="no-data">
                                    No Invoice Records Found
                                </td>
                            </tr>

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default InvoiceReport;