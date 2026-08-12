import React from "react";

function InvoiceView({ job }) {

    const customer =
        JSON.parse(
            sessionStorage.getItem("customerData")
        ) || {};

    const balanceAmount =
        (job.estimatedCost || 0) -
        (job.advanceAmount || 0);

    return (

        <div
            id="invoice"
            style={{
                maxWidth: "900px",
                margin: "20px auto",
                padding: "30px",
                border: "2px solid #000",
                backgroundColor: "#fff",
                fontFamily: "Arial, sans-serif"
            }}
        >

            {/* HEADER */}
            <div style={{ textAlign: "center" }}>

                <h1
                    style={{
                        margin: "0",
                        color: "#0d47a1"
                    }}
                >
                    SMART DATA RECOVERY SOLUTIONS
                </h1>

                <p>
                    Data Recovery | Hard Disk | SSD | Mobile Recovery
                </p>

                <hr />

            </div>

            {/* INVOICE INFO */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px"
                }}
            >
                <div>
                    <strong>Invoice No :</strong>
                    {" "}
                    INV-
                    {String(job.jobId || 0)
                        .padStart(4, "0")}
                </div>

               <div>
    <strong>Date :</strong>
    {" "}
    {new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    }).replace(/\//g, "-")}
</div>
            </div>

            {/* CUSTOMER DETAILS */}
            <h3
                style={{
                    background: "#f0f0f0",
                    padding: "8px"
                }}
            >
                Customer Details
            </h3>

            <table
                style={{
                    width: "100%",
                    marginBottom: "20px"
                }}
            >
                <tbody>

                    <tr>
                        <td>
                            <strong>Customer ID</strong>
                        </td>

                        <td>
                            SDRS-
                            {String(
                                customer.customerId || 0
                            ).padStart(4, "0")}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <strong>Customer Name</strong>
                        </td>

                        <td>
                            {customer.customerName}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <strong>Mobile</strong>
                        </td>

                        <td>
                            {customer.mobileNumber}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <strong>Email</strong>
                        </td>

                        <td>
                            {customer.email}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <strong>City</strong>
                        </td>

                        <td>
                            {customer.city}
                        </td>
                    </tr>

                </tbody>
            </table>

            {/* JOB DETAILS */}
            <h3
                style={{
                    background: "#f0f0f0",
                    padding: "8px"
                }}
            >
                Job Details
            </h3>

            <table
                style={{
                    width: "100%",
                    marginBottom: "20px"
                }}
            >
                <tbody>

                    <tr>
                        <td>
                            <strong>Job ID</strong>
                        </td>

                        <td>
                            {job.jobNumber ||
                                `SDR-J-${String(
                                    job.jobId || 0
                                ).padStart(4, "0")}`}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <strong>Device Type</strong>
                        </td>

                        <td>
                            {job.deviceType}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <strong>Brand</strong>
                        </td>

                        <td>
                            {job.brand}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <strong>Model Number</strong>
                        </td>

                        <td>
                            {job.modelNumber}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <strong>Capacity</strong>
                        </td>

                        <td>
                            {job.capacity}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <strong>Problem</strong>
                        </td>

                        <td>
                            {job.problemType}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <strong>Status</strong>
                        </td>

                        <td>
                            {job.recoveryStatus}
                        </td>
                    </tr>

                </tbody>
            </table>

            {/* PAYMENT DETAILS */}
            <h3
                style={{
                    background: "#f0f0f0",
                    padding: "8px"
                }}
            >
                Payment Details
            </h3>

            <table
                style={{
                    width: "100%",
                    marginBottom: "20px"
                }}
            >
                <tbody>

                    <tr>
                        <td>
                            <strong>Estimated Cost</strong>
                        </td>

                        <td>
                            ₹ {job.estimatedCost}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <strong>Advance Paid</strong>
                        </td>

                        <td>
                            ₹ {job.advanceAmount}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <strong>Balance Amount</strong>
                        </td>

                        <td>
                            ₹ {balanceAmount}
                        </td>
                    </tr>

                </tbody>
            </table>

            <hr />

            <h2
                style={{
                    textAlign: "right"
                }}
            >
                Total Amount :
                ₹ {job.estimatedCost}
            </h2>

            <hr />

            {/* SIGNATURES */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "60px"
                }}
            >

                <div>
                    ___________________
                    <br />
                    Customer Signature
                </div>

                <div>
                    ___________________
                    <br />
                    Authorized Signature
                </div>

            </div>

            {/* FOOTER */}
            <div
                style={{
                    textAlign: "center",
                    marginTop: "40px"
                }}
            >
                <h3>
                    Thank You For Choosing
                </h3>

                <h2
                    style={{
                        color: "#0d47a1"
                    }}
                >
                    SMART DATA RECOVERY SOLUTIONS
                </h2>
            </div>

        </div>
    );
}

export default InvoiceView;