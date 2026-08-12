import React, {
    useEffect
} from "react";

import {
    Link,
    useNavigate
} from "react-router-dom";

import CustomerForm from "../customers/CustomerForm";
import EmployeeDashboard from "./EmployeeDashboard";
import "../../assets/css/EmployeeMainLayout.css";

function EmployeeMainLayout() {

    const navigate = useNavigate();

    useEffect(() => {

        const role =
            sessionStorage.getItem(
                "role"
            );

        if (role !== "EMPLOYEE") {

            navigate("/login");

        }

    }, [navigate]);

    const logout = () => {

        sessionStorage.clear();

        navigate("/login");

    };

    return (

        <div>

            <div className="navbar">

                <h1 className="navbar-title">
                    Employee Dashboard
                </h1>

                <button
                    className="logout-btn"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

            <div className="container">

                <div className="left">

                    <EmployeeDashboard />

                </div>

                <div className="middle">

                    <CustomerForm />

                </div>

                <div className="quick-links">

    <h3 className="quick-title">
        Quick Links
    </h3>

    <Link
       to="/employee-customers"
        className="quick-card employee-customer"
    >
        👥 Customer List
    </Link>

    <Link
        to="/employee-jobs"
        className="quick-card employee-job"
    >
        💻 Job List
    </Link>

</div>

            </div>

        </div>
    );
}

export default EmployeeMainLayout;