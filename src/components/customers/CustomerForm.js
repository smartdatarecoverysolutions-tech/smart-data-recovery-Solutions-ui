import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveCustomer } from "../../services/customerService";
import "../../assets/css/CustomerForm.css";

function CustomerForm() {

    const navigate = useNavigate();

    const [customer, setCustomer] = useState({
        customerName: "",
        mobileNumber: "",
        alternateNumber: "",
        email: "",
        address: "",
        city: ""
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    };

    // VALIDATION
    const validate = () => {

    let tempErrors = {};

    // Customer Name
    if (!customer.customerName) {

        tempErrors.customerName =
            "Customer Name is required";

    } else if (
        !/^[A-Za-z ]+$/.test(
            customer.customerName
        )
    ) {

        tempErrors.customerName =
            "Customer Name should contain only letters";
    }

    // Mobile Number
    if (!customer.mobileNumber) {

        tempErrors.mobileNumber =
            "Mobile Number is required";

    } else if (
        !/^[0-9]{10}$/.test(
            customer.mobileNumber
        )
    ) {

        tempErrors.mobileNumber =
            "Mobile Number must be 10 digits";
    }

    // Alternate Number (Optional)
    if (customer.alternateNumber) {

        if (
            !/^[0-9]{10}$/.test(
                customer.alternateNumber
            )
        ) {

            tempErrors.alternateNumber =
                "Alternate Number must be 10 digits";
        }
    }

    // Email
    if (!customer.email) {

        tempErrors.email =
            "Email is required";

    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
            customer.email
        )
    ) {

        tempErrors.email =
            "Please enter a valid Email Address";
    }

    // Address
    if (!customer.address) {

        tempErrors.address =
            "Address is required";
    }

    // City
    if (!customer.city) {

        tempErrors.city =
            "City is required";

    } else if (
        !/^[A-Za-z ]+$/.test(
            customer.city
        )
    ) {

        tempErrors.city =
            "City should contain only letters";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
};

    // SAVE CUSTOMER
    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!validate()) return;

       try {

    const response =
        await saveCustomer(customer);

    sessionStorage.setItem(
        "customerName",
        customer.customerName
    );

    sessionStorage.setItem(
        "customerData",
        JSON.stringify(response.data)
    );

    setSuccessMessage(
        "Customer saved successfully. Please continue to add Job Details."
    );

    setTimeout(() => {
        navigate("/jobs");
    }, 2000);



        } catch (error) {

            console.error(error);

            setSuccessMessage(
                "Failed to save customer."
            );
        }
    };

    return (
        <div className="customer-container">

            <div className="customer-card">

                <h2>Add New Customer</h2>

                <form onSubmit={handleSubmit}>

                    {/* CUSTOMER NAME */}
                    <label>
                        Customer Name
                        <span style={{ color: "red" }}> *</span>
                    </label>

                    <input
                        type="text"
                        name="customerName"
                        value={customer.customerName}
                        onChange={handleChange}
                    />

                    <p style={{ color: "red" }}>
                        {errors.customerName}
                    </p>

                    {/* MOBILE NUMBER */}
                    <label>
                        Mobile Number
                        <span style={{ color: "red" }}> *</span>
                    </label>

                    <input
                        type="text"
                        name="mobileNumber"
                        value={customer.mobileNumber}
                        onChange={handleChange}
                    />

                    <p style={{ color: "red" }}>
                        {errors.mobileNumber}
                    </p>

                    {/* ALTERNATE NUMBER */}
                    <label>
                        Alternate Number
                    </label>

                    <input
                        type="text"
                        name="alternateNumber"
                        value={customer.alternateNumber}
                        onChange={handleChange}
                    />

                    {/* EMAIL */}
                    <label>
                        Email
                        <span style={{ color: "red" }}> *</span>
                    </label>

                    <input
                        type="email"
                        name="email"
                        value={customer.email}
                        onChange={handleChange}
                    />

                    <p style={{ color: "red" }}>
                        {errors.email}
                    </p>

                    {/* ADDRESS */}
                    <label>
                        Address
                        <span style={{ color: "red" }}> *</span>
                    </label>

                    <textarea
                        name="address"
                        value={customer.address}
                        onChange={handleChange}
                    />

                    <p style={{ color: "red" }}>
                        {errors.address}
                    </p>

                    {/* CITY */}
                    <label>
                        City
                        <span style={{ color: "red" }}> *</span>
                    </label>

                    <input
                        type="text"
                        name="city"
                        value={customer.city}
                        onChange={handleChange}
                    />

                    <p style={{ color: "red" }}>
                        {errors.city}
                    </p>

                    {/* BUTTON */}
                    <button
                        type="submit"
                        className="save-btn"
                    >
                        Continue to Job
                    </button>

                    {/* SUCCESS MESSAGE */}
                    {successMessage && (
                        <p
                            style={{
                                color: successMessage.includes("Failed")
                                    ? "red"
                                    : "green",
                                marginTop: "10px",
                                fontWeight: "bold",
                                textAlign: "center"
                            }}
                        >
                            {successMessage}
                        </p>
                    )}

                </form>

            </div>

        </div>
    );
}

export default CustomerForm;