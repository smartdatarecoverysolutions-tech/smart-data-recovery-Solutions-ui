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

import "../../assets/css/CustomerReport.css";

function CustomerReport() {

    const navigate = useNavigate();

    const [customers,
        setCustomers] =
        useState([]);

    useEffect(() => {

        loadCustomers();

    }, []);

    const loadCustomers =
        async () => {

            try {

                const response =
                    await axios.get(
                        "http://localhost:8080/api/customers"
                    );

                setCustomers(
                    response.data
                );

            } catch (error) {

                console.error(error);

            }
        };

    const exportPDF = () => {

        const doc =
            new jsPDF();

        doc.text(
            "Customer Report",
            14,
            15
        );

        autoTable(doc, {

            head: [[
                "Code",
                "Name",
                "Mobile",
                "Email",
                "City"
            ]],

            body:
                customers.map(c => [

                    c.customerCode,

                    c.customerName,

                    c.mobileNumber,

                    c.email,

                    c.city

                ])
        });

        doc.save(
            "CustomerReport.pdf"
        );
    };

    const exportExcel = () => {

        const worksheet =
            XLSX.utils.json_to_sheet(
                customers
            );

        const workbook =
            XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(
            workbook,
            worksheet,
            "Customers"
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
            "CustomerReport.xlsx"
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
                    Customer Report
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

                            <th>Code</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>City</th>

                        </tr>

                    </thead>

                    <tbody>

                        {customers.map(
                            customer => (

                                <tr
                                    key={
                                        customer.customerId
                                    }
                                >

                                    <td>
                                        {customer.customerCode}
                                    </td>

                                    <td>
                                        {customer.customerName}
                                    </td>

                                    <td>
                                        {customer.mobileNumber}
                                    </td>

                                    <td>
                                        {customer.email}
                                    </td>

                                    <td>
                                        {customer.city}
                                    </td>

                                </tr>
                                

                            )
                            
                        )}
<tr>
                                <td colSpan="9" className="no-data">
                                    No Customer Records Found
                                </td>
                            </tr>
                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default CustomerReport;