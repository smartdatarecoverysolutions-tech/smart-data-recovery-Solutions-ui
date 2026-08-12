import React from "react";
import { useNavigate } from "react-router-dom";
import InvoiceView from "../components/invoice/InvoiceView";
import { saveInvoice } from "../services/invoiceService";

function InvoicePage() {

    const navigate = useNavigate();

    const savedJob = sessionStorage.getItem("jobData");

    const job = savedJob
        ? JSON.parse(savedJob)
        : null;
  console.log("job" +job )
    const printInvoice = async () => {

        if (!job) return;

        try {

            const invoice = {

                invoiceNumber:
                    "INV-" + job.jobNumber,

               customerName: job.customer?.customerName,

                jobNumber:
                    job.jobNumber,

                amount:
                    job.estimatedCost || 0,

                invoiceDate:
                    new Date()
                        .toLocaleDateString("en-GB")
                        .replace(/\//g, "-")
            };

            console.log("Invoice:", invoice);

            // Save invoice only once
            await saveInvoice(invoice);

            // Change page title so browser suggests a better PDF filename
            const oldTitle = document.title;

            document.title =
                `${job.customerName}_Invoice`;

            window.print();

            document.title = oldTitle;

        } catch (error) {

            console.error(
                "Invoice Save Failed",
                error
            );

            alert(
                "Failed to save invoice."
            );
        }
    };

    if (!job) {

        return (

            <div
                style={{
                    padding: "20px",
                    textAlign: "center"
                }}
            >

                <h2>No Job Data Found</h2>

                <button
                    onClick={() => navigate("/jobs")}
                    style={{
                        padding: "10px 20px",
                        background: "#1976d2",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    Go To Jobs
                </button>

            </div>

        );
    }

    return (

        <div>

            <InvoiceView job={job} />

            <div
                style={{
                    textAlign: "center",
                    marginTop: "20px"
                }}
            >

                <button
                    onClick={() =>
                        navigate("/main")
                    }
                    style={{
                        padding: "12px 20px",
                        background: "#2e7d32",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        marginRight: "10px",
                        cursor: "pointer"
                    }}
                >
                    Go To Home
                </button>

                <button
                    onClick={printInvoice}
                    style={{
                        padding: "12px 20px",
                        background: "#000",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer"
                    }}
                >
                    Print Invoice
                </button>

            </div>

        </div>

    );
}

export default InvoicePage;