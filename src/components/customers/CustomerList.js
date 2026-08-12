import React, {
    useEffect,
    useState
} from "react";

import {
    useNavigate
} from "react-router-dom";

import {
    getCustomers,
    deleteCustomer
} from "../../services/customerService";

import "../../assets/css/CustomerList.css";

function CustomerList() {

    const navigate = useNavigate();

    const [customers,
        setCustomers] =
        useState([]);

    const [searchTerm,
        setSearchTerm] =
        useState("");

    const loadCustomers =
        async () => {

            try {

                const response =
                    await getCustomers();

                setCustomers(
                    response.data
                );

            } catch (error) {

                console.error(error);
            }
        };

    useEffect(() => {

        loadCustomers();

    }, []);

    const removeCustomer =
        async (id) => {

            if (
                !window.confirm(
                    "Are you sure you want to delete this customer?"
                )
            ) {
                return;
            }

            try {

                await deleteCustomer(id);

                loadCustomers();

            } catch (error) {

                console.error(error);
            }
        };

    // Filter Customers
    const filteredCustomers = customers.filter(customer =>

        customer.customerName
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase())

        ||

        customer.mobileNumber
            ?.includes(searchTerm)

        ||

        customer.customerCode
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase())

    );

    return (

        <div className="customer-list-container">

            {/* NAVBAR */}

            <div className="customer-navbar">

                <button
                    className="nav-btn"
                    onClick={() =>
                        navigate("/main")
                    }
                >
                    🏠 Home
                </button>

                <h2>
                    Customer List
                </h2>

                <div></div>

            </div>

            {/* SEARCH */}

            <div className="search-container">

                <input
                    type="text"
                    placeholder="Search Customer Name / Mobile / Customer Code..."
                    value={searchTerm}
                    onChange={(e) =>
                        setSearchTerm(
                            e.target.value
                        )
                    }
                    className="search-box"
                />

            </div>

            {/* TABLE */}

            <div className="table-wrapper">

                <table className="customer-table">

                    <thead>

                        <tr>

                            <th>Customer Code</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredCustomers.length > 0 ? (

                            filteredCustomers.map(customer => (

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

                                    <td>

                                        <button
                                            className="edit-btn"
                                            onClick={() =>
                                                navigate(
                                                    `/edit-customer/${customer.customerId}`
                                                )
                                            }
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() =>
                                                removeCustomer(
                                                    customer.customerId
                                                )
                                            }
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="6"
                                    style={{
                                        textAlign: "center",
                                        padding: "25px",
                                        fontSize: "18px",
                                        color: "#ed171e",
                                        fontWeight: "bold"
                                    }}
                                >
                                    No customers found.
                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );
}

export default CustomerList;