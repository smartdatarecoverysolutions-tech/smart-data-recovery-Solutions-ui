import React,
{
    useEffect,
    useState
}
from "react";

import {
    getPayments
}
from "../../services/paymentService";

function RecentPayments() {

    const [payments,
        setPayments] =
        useState([]);

    useEffect(() => {

        loadPayments();

    }, []);

    const loadPayments =
        async () => {

            const response =
                await getPayments();

            setPayments(
                response.data
                    .slice(-5)
                    .reverse()
            );
        };

    return (

        <div>

            <h2>
                Recent Payments
            </h2>

            <table border="1">

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Amount</th>

                        <th>Type</th>

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

export default RecentPayments;