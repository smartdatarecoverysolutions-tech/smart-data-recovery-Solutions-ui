import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    getCustomerById,
    updateCustomer
} from "../services/customerService";

import "../assets/css/EmployeeEditCustomerPage.css";

function EmployeeEditCustomerPage() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [customer, setCustomer] = useState({

        customerCode: "",
        customerName: "",
        mobileNumber: "",
        alternateNumber: "",
        email: "",
        address: "",
        city: ""

    });
useEffect(() => {

    const loadCustomer = async () => {

        try {

            const response =
                await getCustomerById(id);

            setCustomer(response.data);

        } catch (error) {

            console.error(error);

            alert("Failed to load customer.");

        }

    };

    loadCustomer();

}, [id]);

    const saveCustomer = async (e) => {

        e.preventDefault();

        try {

            await updateCustomer(
                id,
                customer
            );

            alert("Customer Updated Successfully");

            navigate("/employee-customers");

        } catch (error) {

            console.error(error);

            alert("Update Failed");

        }

    };

    return (

        <div className="employee-edit-container">

             <div className="employee-navbar">

            <button
                className="nav-btn"
                onClick={() =>
                    navigate("/employee-customers")
                }
            >
                ← Back
            </button>

            <h2>
                Edit Customer
            </h2>

            <div></div>

        </div>

            <form
                className="employee-edit-form"
                onSubmit={saveCustomer}
            >

                <label>Customer Code</label>

                <input
                    value={customer.customerCode}
                    readOnly
                />

                <label>Customer Name</label>

                <input
                    value={customer.customerName}
                    onChange={(e) =>
                        setCustomer({
                            ...customer,
                            customerName:
                                e.target.value
                        })
                    }
                />

                <label>Mobile Number</label>

                <input
                    value={customer.mobileNumber}
                    onChange={(e) =>
                        setCustomer({
                            ...customer,
                            mobileNumber:
                                e.target.value
                        })
                    }
                />

                <label>Alternate Number</label>

                <input
                    value={customer.alternateNumber}
                    onChange={(e) =>
                        setCustomer({
                            ...customer,
                            alternateNumber:
                                e.target.value
                        })
                    }
                />

                <label>Email</label>

                <input
                    value={customer.email}
                    onChange={(e) =>
                        setCustomer({
                            ...customer,
                            email:
                                e.target.value
                        })
                    }
                />

                <label>Address</label>

                <textarea
                    value={customer.address}
                    onChange={(e) =>
                        setCustomer({
                            ...customer,
                            address:
                                e.target.value
                        })
                    }
                />

                <label>City</label>

                <input
                    value={customer.city}
                    onChange={(e) =>
                        setCustomer({
                            ...customer,
                            city:
                                e.target.value
                        })
                    }
                />

                <button
                    className="save-btn"
                    type="submit"
                >
                    Update Customer
                </button>

            </form>

        </div>

    );

}

export default EmployeeEditCustomerPage;