import React,
{
    useEffect,
    useState
}
from "react";

import {
    useNavigate
}
from "react-router-dom";

import {
    getPayments,
    deletePayment
}
from "../../services/paymentService";

import "../../assets/css/PaymentList.css";

function PaymentList() {

    const navigate = useNavigate();
      const [searchTerm,
            setSearchTerm] =
            useState("");
    

    const [payments,
        setPayments] =
        useState([]);

    const loadPayments =
        async () => {

            try {

                const response =
                    await getPayments();

                setPayments(
                    response.data
                );

            } catch (error) {

                console.error(error);

            }
        };

    useEffect(() => {
        loadPayments();
    }, []);

    const removePayment =
        async (id) => {

            if (
                !window.confirm(
                    "Are you sure you want to delete this payment?"
                )
            ) {
                return;
            }

            try {

                await deletePayment(id);

                loadPayments();

            } catch (error) {

                console.error(error);

            }
        };

    return (

        <div className="payment-list-container">

            <div className="payment-navbar">

                <button
                    className="nav-btn"
                    onClick={() => navigate("/main")}
                >
                     🏠 Home
                </button>

                <h2>
                    Payment List
                </h2>

                <div></div>

            </div>
{/* SEARCH */}

            <div className="search-container">

                <input
                    type="text"
                    placeholder="Search Customer Name..."
                    value={searchTerm}
                    onChange={(e) =>
                        setSearchTerm(
                            e.target.value
                        )
                    }
                    className="search-box"
                />

            </div>
            <div className="table-wrapper">

                <table className="payment-table">

                    <thead>

                        <tr>

                            <th>ID</th>
                            <th>Job No</th>
                            <th>Customer</th>
                            <th>Amount</th>
                            <th>Type</th>
                            <th>Method</th>
                            <th>Delete</th>

                        </tr>

                    </thead>

                    <tbody>

                        {payments.length > 0 ? (

                            payments.map(
                                payment => (

                                    <tr
                                        key={
                                            payment.paymentId
                                        }
                                    >

                                        <td>
                                            {
                                                payment.paymentId
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
                                            {
                                                payment
                                                    .recoveryJob
                                                    ?.customer
                                                    ?.customerName
                                                || "-"
                                            }
                                        </td>

                                        <td>
                                            ₹ {
                                                payment.amount
                                            }
                                        </td>

                                        <td>
                                            {
                                                payment.paymentType
                                            }
                                        </td>

                                        <td>
                                            {
                                                payment.paymentMethod
                                            }
                                        </td>

                                        <td>

                                            <button
                                                className="delete-btn"
                                                onClick={() =>
                                                    removePayment(
                                                        payment.paymentId
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                )
                            )

                        ) : (

                            <tr>

                                <td
                                    colSpan="7"
                                style={{
                                        textAlign: "center",
                                        padding: "25px",
                                        fontSize: "18px",
                                        color: "#ed171e",
                                        fontWeight: "bold"
                                    }}
                                >
                                    No Payments Found
                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );
}

export default PaymentList;