import React,
{
    useState
}
from "react";

import {
    getPaymentsByJob
}
from "../../services/paymentService";

function SearchPayment() {

    const [jobId,
        setJobId] =
        useState("");

    const [payments,
        setPayments] =
        useState([]);

    const handleSearch =
        async () => {

            const response =
                await getPaymentsByJob(
                    jobId
                );

            setPayments(
                response.data
            );
        };

    return (

        <div>

            <h2>
                Search Payment
            </h2>

            <input
                type="number"
                placeholder="Job ID"
                value={jobId}
                onChange={(e) =>
                    setJobId(
                        e.target.value
                    )
                }
            />

            <button
                onClick={
                    handleSearch
                }
            >
                Search
            </button>

            <table border="1">

                <thead>

                    <tr>

                        <th>
                            Payment ID
                        </th>

                        <th>
                            Amount
                        </th>

                        <th>
                            Type
                        </th>

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
                                {
                                    payment.paymentId
                                }
                            </td>

                            <td>
                                {
                                    payment.amount
                                }
                            </td>

                            <td>
                                {
                                    payment.paymentType
                                }
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
}

export default SearchPayment;