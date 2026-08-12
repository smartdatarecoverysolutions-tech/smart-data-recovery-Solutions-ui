  import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/QuickLinks.css";

function QuickLinks() {

    const navigate = useNavigate();

    return (

        <div className="quicklinks-container">

            <h2 className="quicklinks-title">
                Quick Links
            </h2>

            <div className="quicklinks-grid">

                <div
                    className="quick-card customer-add"
                    onClick={() =>
                        navigate("/customers/add")
                    }
                >
                    Add Customer
                </div>

                <div
                    className="quick-card customer-list"
                    onClick={() =>
                        navigate("/customers/list")
                    }
                >
                    Customer List
                </div>

                <div
                    className="quick-card job-add"
                    onClick={() =>
                        navigate("/jobs")
                    }
                >
                    Add Job
                </div>

                <div
                    className="quick-card job-list"
                    onClick={() =>
                        navigate("/jobs/list")
                    }
                >
                    Job List
                </div>

                <div
                    className="quick-card payment-add"
                    onClick={() =>
                        navigate("/payments")
                    }
                >
                    Add Payment
                </div>

                <div
                    className="quick-card payment-list"
                    onClick={() =>
                        navigate("/payments/list")
                    }
                >
                    Payment List
                </div>
<div
    className="quick-card invoice-list"
    onClick={() => navigate("/invoice/list")}
>
    Invoice List
</div>

<div
    className="quick-card feedback-list"
    onClick={() => navigate("/feedback/list")}
>
    Feedback List
</div>
                <div
                    className="quick-card reports"
                    onClick={() =>
                        navigate("/reports")
                    }
                >
                    Reports
                </div>

                <div
                    className="quick-card invoice"
                    onClick={() =>
                        navigate("/invoice")
                    }
                >
                    Invoice
                </div>

            </div>

        </div>

    );
}

export default QuickLinks;