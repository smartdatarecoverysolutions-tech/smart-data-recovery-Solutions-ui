import React, {
    useEffect,
    useState
} from "react";

import {
    useNavigate
} from "react-router-dom";

import {
    getCustomers,
    
} from "../../services/customerService";

import "../../assets/css/CustomerList.css";

function EmployeeCustomerList() {

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

 

     return (

        <div className="customer-list-container">

            {/* NAVBAR */}

            <div className="customer-navbar">

                <button
       className="nav-btn"
      onClick={() =>
        navigate("/employee-main")
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
                    placeholder="Search Customer Name / Mobile..."
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

                        {customers

                            .filter(customer =>

                                customer.customerName
                                    ?.toLowerCase()
                                    .includes(
                                        searchTerm.toLowerCase()
                                    )

                                ||

                                customer.mobileNumber
                                    ?.includes(
                                        searchTerm
                                    )

                                ||

                                customer.customerCode
                                    ?.toLowerCase()
                                    .includes(
                                        searchTerm.toLowerCase()
                                    )
                            )

                            .map(customer => (

                                <tr
                                    key={
                                        customer.customerId
                                    }
                                >

                                    <td>
                                        {
                                            customer.customerCode
                                        }
                                    </td>

                                    <td>
                                        {
                                            customer.customerName
                                        }
                                    </td>

                                    <td>
                                        {
                                            customer.mobileNumber
                                        }
                                    </td>

                                    <td>
                                        {
                                            customer.email
                                        }
                                    </td>

                                    <td>
                                        {
                                            customer.city
                                        }
                                    </td>

                                    <td>

                                        <button
                                            className="edit-btn"
                                            onClick={() =>
                                                navigate(`/employee-edit-customer/${customer.customerId}`)
                                            }
                                        >
                                            Edit
                                        </button>

                                        

                                    </td>

                                </tr>

                            ))}

                    </tbody>

                </table>

            </div>

        </div>

    );
}

export default EmployeeCustomerList;