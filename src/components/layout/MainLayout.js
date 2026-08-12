import React, {
    useEffect
} from "react";

import {
    Link,
    useNavigate
} from "react-router-dom";

import CustomerForm from "../customers/CustomerForm";
import Dashboard from "../dashboard/Dashboard";

import "../../assets/css/Mainlayout.css";

function MainLayout() {

    const navigate = useNavigate();

    useEffect(() => {

        const role =
            sessionStorage.getItem(
                "role"
            );

        if (role !== "ADMIN") {

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

    <div className="navbar-left"></div>

    <h1 className="navbar-title">
        💾 SMART DATA RECOVERY SOLUTIONS
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

                    <h2>
                        Dashboard
                    </h2>

                    <div className="dashboardBox">

                        <Dashboard />

                    </div>

                </div>

                <div className="middle">

                    <CustomerForm />

                </div>

                <div className="quick-links">

                    <h3 className="quick-title">
                        Quick Links
                    </h3>

                    <Link
                        to="/customers/list"
                        className="quick-card customer"
                    >
                        👥 Customer List
                    </Link>

                    <Link
                        to="/jobs/list"
                        className="quick-card jobs"
                    >
                        💻 Job List
                    </Link>

                    <Link
                        to="/payments/list"
                        className="quick-card payments"
                    >
                        💰 Payment List
                    </Link>
                       <Link
                           to="/invoice/list"
                            className="quick-card invoice"
                        >
                          📄 Invoice List
                            </Link>

<Link
    to="/feedback/list"
    className="quick-card feedback"
>
    ⭐ Feedback List
</Link>
                    <Link
                        to="/reports"
                        className="quick-card reports"
                    >
                        📊 Reports
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default MainLayout;