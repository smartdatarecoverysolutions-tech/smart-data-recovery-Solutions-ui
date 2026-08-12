import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { savePayment } from "../../services/paymentService";
import "../../assets/css/PaymentForm.css";

function PaymentForm() {

    const navigate = useNavigate();

    const savedJob = JSON.parse(
        sessionStorage.getItem("jobData")
    );

    const jobId = savedJob?.jobId || "";
    const jobNumber = savedJob?.jobNumber || "";

    const [payment, setPayment] = useState({
        jobId: jobId,
        paymentDate: "",
        amount: "",
        paymentType: "",
        paymentMethod: "",
        transactionId: "",
        remarks: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setPayment({
            ...payment,
            [e.target.name]: e.target.value
        });
    };

    const goBack = () => {
        navigate("/jobs");
    };

  

    const validate = () => {

        let temp = {};

        if (!payment.jobId)
            temp.jobId = "Job ID is required";

        if (!payment.paymentDate)
            temp.paymentDate = "Payment Date is required";

        if (!payment.amount)
            temp.amount = "Amount is required";

        if (!payment.paymentType)
            temp.paymentType = "Payment Type is required";

        if (!payment.paymentMethod)
            temp.paymentMethod = "Payment Method is required";

        setErrors(temp);

        return Object.keys(temp).length === 0;
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!validate()) return;

        const payload = {

            recoveryJob: {
                jobId: payment.jobId
            },

            paymentDate: payment.paymentDate,
            amount: payment.amount,
            paymentType: payment.paymentType,
            paymentMethod: payment.paymentMethod,
            transactionId: payment.transactionId,
            remarks: payment.remarks
        };

        try {

            await savePayment(payload);

            navigate("/invoice");

        } catch (error) {

            console.error(error);

            alert("Failed to save payment");
        }
    };

    return (
        <div className="payment-container">

            <div className="payment-card">

                {/* HEADER */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        background: "#1976d2",
                        padding: "12px",
                        borderRadius: "8px",
                        marginBottom: "20px"
                    }}
                >

                    <button
                        type="button"
                        onClick={goBack}
                        style={{
                            background: "#fff",
                            color: "#1976d2",
                            border: "none",
                            padding: "8px 15px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}
                    >
                        ⬅ Back
                    </button>

                    <h2
                        style={{
                            color: "#fff",
                            margin: 0
                        }}
                    >
                        Payment Entry
                    </h2>

                    
                </div>

                <form onSubmit={handleSubmit}>

                    {/* JOB NUMBER */}
                    <div className="form-group">
                        <label>
                            Job Number
                        </label>

                        <input
                            type="text"
                            value={jobNumber}
                            readOnly
                        />
                    </div>

                    {/* PAYMENT DATE */}
                    <div className="form-group">

                        <label>
                            Payment Date
                            <span style={{ color: "red" }}> *</span>
                        </label>

                        <input
                            type="date"
                            name="paymentDate"
                            value={payment.paymentDate}
                            onChange={handleChange}
                        />

                        <p className="error">
                            {errors.paymentDate}
                        </p>

                    </div>

                    {/* AMOUNT */}
                    <div className="form-group">

                        <label>
                            Amount
                            <span style={{ color: "red" }}> *</span>
                        </label>

                        <input
                            type="number"
                            name="amount"
                            value={payment.amount}
                            onChange={handleChange}
                        />

                        <p className="error">
                            {errors.amount}
                        </p>

                    </div>

                    {/* PAYMENT TYPE */}
                    <div className="form-group">

                        <label>
                            Payment Type
                            <span style={{ color: "red" }}> *</span>
                        </label>

                        <select
                            name="paymentType"
                            value={payment.paymentType}
                            onChange={handleChange}
                        >
                            <option value="">
                                Select Payment Type
                            </option>

                            <option value="Advance">
                                Advance
                            </option>

                            <option value="Partial">
                                Partial
                            </option>

                            <option value="Final">
                                Final
                            </option>

                            <option value="Refund">
                                Refund
                            </option>
                        </select>

                        <p className="error">
                            {errors.paymentType}
                        </p>

                    </div>

                    {/* PAYMENT METHOD */}
                    <div className="form-group">

                        <label>
                            Payment Method
                            <span style={{ color: "red" }}> *</span>
                        </label>

                        <select
                            name="paymentMethod"
                            value={payment.paymentMethod}
                            onChange={handleChange}
                        >
                            <option value="">
                                Select Payment Method
                            </option>

                            <option value="Cash">
                                Cash
                            </option>

                            <option value="UPI">
                                UPI
                            </option>

                            <option value="PhonePe">
                                PhonePe
                            </option>

                            <option value="Google Pay">
                                Google Pay
                            </option>

                            <option value="Paytm">
                                Paytm
                            </option>

                            <option value="Bank Transfer">
                                Bank Transfer
                            </option>
                        </select>

                        <p className="error">
                            {errors.paymentMethod}
                        </p>

                    </div>

                    {/* TRANSACTION ID */}
                    <div className="form-group">

                        <label>
                            Transaction ID
                        </label>

                        <input
                            type="text"
                            name="transactionId"
                            value={payment.transactionId}
                            onChange={handleChange}
                        />

                    </div>

                    {/* REMARKS */}
                    <div className="form-group">

                        <label>
                            Remarks
                        </label>

                        <textarea
                            name="remarks"
                            value={payment.remarks}
                            onChange={handleChange}
                        />

                    </div>

                    {/* SAVE BUTTON */}
                    <button
                        type="submit"
                        className="save-payment-btn"
                    >
                        Save Payment
                    </button>

                </form>

            </div>

        </div>
    );
}

export default PaymentForm;