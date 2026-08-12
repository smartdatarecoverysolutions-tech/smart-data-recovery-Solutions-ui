import React, {
    useEffect,
    useState
} from "react";

import {
    useParams,
    useNavigate
} from "react-router-dom";

import axios from "axios";

import "../assets/css/EditCustomer.css";

function EditCustomerPage() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [customer, setCustomer] = useState({
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
                    await axios.get(
                        `http://localhost:8080/api/customers/${id}`
                    );

                setCustomer(
                    response.data
                );

            } catch (error) {

                console.error(
                    "Error loading customer:",
                    error
                );
            }
        };

        loadCustomer();

    }, [id]);

    const handleChange = (e) => {

        setCustomer({
            ...customer,
            [e.target.name]:
                e.target.value
        });
    };

    const handleUpdate = async () => {

        try {

            await axios.put(
                `http://localhost:8080/api/customers/${id}`,
                customer
            );

            alert(
                "Customer Updated Successfully"
            );

            navigate(
                "/customers/list"
            );

        } catch (error) {

            console.error(
                "Update Error:",
                error
            );

            alert(
                "Failed to Update Customer"
            );
        }
    };

    return (

        <div className="edit-customer-container">

            <div className="edit-customer-navbar">

    <button
        className="nav-btn"
        onClick={() =>
            navigate("/customers/list")
        }
    >
      ← Back
    </button>

    <h2>
        Edit Customer
    </h2>

    <div className="navbar-space"></div>

</div>

<div className="edit-customer-card">

                <div className="form-group">

                    <label>
                        Customer Name
                    </label>

                    <input
                        type="text"
                        name="customerName"
                        value={customer.customerName}
                        onChange={handleChange}
                    />

                </div>

                <div className="form-group">

                    <label>
                        Mobile Number
                    </label>

                    <input
                        type="text"
                        name="mobileNumber"
                        value={customer.mobileNumber}
                        onChange={handleChange}
                    />

                </div>

                <div className="form-group">

                    <label>
                        Alternate Number
                    </label>

                    <input
                        type="text"
                        name="alternateNumber"
                        value={customer.alternateNumber}
                        onChange={handleChange}
                    />

                </div>

                <div className="form-group">

                    <label>
                        Email
                    </label>

                    <input
                        type="email"
                        name="email"
                        value={customer.email}
                        onChange={handleChange}
                    />

                </div>

                <div className="form-group">

                    <label>
                        Address
                    </label>

                    <textarea
                        name="address"
                        value={customer.address}
                        onChange={handleChange}
                        rows="3"
                    />

                </div>

                <div className="form-group">

                    <label>
                        City
                    </label>

                    <input
                        type="text"
                        name="city"
                        value={customer.city}
                        onChange={handleChange}
                    />

                </div>

                <div className="button-group">

                    <button
                        className="update-btn"
                        onClick={handleUpdate}
                    >
                        Update Customer
                    </button>

                      
                  

                </div>

            </div>

        </div>

    );
}

export default EditCustomerPage;