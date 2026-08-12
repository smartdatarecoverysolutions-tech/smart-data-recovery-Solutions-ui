import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../assets/css/InvoiceList.css";

function InvoiceList() {

    const [invoices, setInvoices] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        fetchInvoices();
    }, []);

    const fetchInvoices = async () => {

        try {

            const response = await axios.get(
                "http://localhost:8080/api/invoices"
            );

            setInvoices(response.data);

        } catch (error) {

            console.error(
                "Error fetching invoices",
                error
            );
        }
    };

    // Search Filter
    const filteredInvoices = invoices.filter(invoice =>

        invoice.customerName
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase())

        ||

        invoice.invoiceNumber
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase())

        ||

        invoice.jobNumber
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase())

    );

    return (

        <div className="invoice-container">

            {/* NAVBAR */}

          

            {/* SEARCH BAR */}

           <div className="invoice-navbar">

    <button
        className="nav-btn"
        onClick={() => navigate("/main")}
    >
        ← Back
    </button>

    <h2 className="invoice-navbar-title">
        📄 Invoice List
    </h2>

    <div></div>

</div>

{/* Search Bar */}

<div className="invoice-search-container">

    <input
        type="text"
        placeholder="Search Customer / Invoice No / Job No..."
        value={searchTerm}
        onChange={(e) =>
            setSearchTerm(e.target.value)
        }
        className="invoice-search-box"
    />


            </div>

            {/* TABLE */}

            <table className="invoice-table">

                <thead>

                    <tr>

                        <th>Invoice Number</th>
                        <th>Customer Name</th>
                        <th>Job Number</th>
                        <th>Amount</th>
                        <th>Invoice Date</th>

                    </tr>

                </thead>

                <tbody>

                    {filteredInvoices.length > 0 ? (

                        filteredInvoices.map((invoice) => (

                            <tr key={invoice.invoiceId}>

                                <td>{invoice.invoiceNumber}</td>

                                <td>{invoice.customerName}</td>

                                <td>{invoice.jobNumber}</td>

                                <td>₹ {invoice.amount}</td>

                                <td>{invoice.invoiceDate}</td>

                            </tr>

                        ))

                    ) : (

                        <tr>

                            <td
                                colSpan="5"
                                className="no-data"
                            >
                                No Invoices Found
                            </td>

                        </tr>

                    )}

                </tbody>

            </table>

        </div>
    );
}

export default InvoiceList;