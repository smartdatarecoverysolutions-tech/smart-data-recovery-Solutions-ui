import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDashboard } from "../../services/dashboardService";
import "../../assets/css/EmployeeDashboard.css";

function EmployeeDashboard() {

    const navigate = useNavigate();

    const [data, setData] = useState({});

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {

        try {

            const response =
                await getDashboard();

            setData(response.data);

        } catch (error) {

            console.error(error);

        }
    };

    return (

        <div className="dashboard-main">

          

            <div className="dashboard-container">

                <div
                    className="dashboard-card customers"
                    onClick={() =>
                        navigate("/customers/list")
                    }
                >
                    <h3>Total Customers</h3>
                    <h1>{data.totalCustomers || 0}</h1>
                </div>

                <div
                    className="dashboard-card jobs"
                    onClick={() =>
                        navigate("/jobs/list")
                    }
                >
                    <h3>Total Jobs</h3>
                    <h1>{data.totalJobs || 0}</h1>
                </div>

                <div
                    className="dashboard-card received"
                    onClick={() =>
                        navigate("/jobs/list")
                    }
                >
                    <h3>Received Jobs</h3>
                    <h1>{data.receivedJobs || 0}</h1>
                </div>

                <div
                    className="dashboard-card diagnosis"
                    onClick={() =>
                        navigate("/jobs/list")
                    }
                >
                    <h3>Diagnosis Jobs</h3>
                    <h1>{data.diagnosisJobs || 0}</h1>
                </div>

                <div
                    className="dashboard-card recovery"
                    onClick={() =>
                        navigate("/jobs/list")
                    }
                >
                    <h3>Recovery Started</h3>
                    <h1>{data.recoveryStartedJobs || 0}</h1>
                </div>

                <div
                    className="dashboard-card completed"
                    onClick={() =>
                        navigate("/jobs/list")
                    }
                >
                    <h3>Completed Jobs</h3>
                    <h1>{data.completedJobs || 0}</h1>
                </div>

                <div
                    className="dashboard-card delivered"
                    onClick={() =>
                        navigate("/jobs/list")
                    }
                >
                    <h3>Delivered Jobs</h3>
                    <h1>{data.deliveredJobs || 0}</h1>
                </div>

                <div
                    className="dashboard-card failed"
                    onClick={() =>
                        navigate("/jobs/list")
                    }
                >
                    <h3>Failed Jobs</h3>
                    <h1>{data.failedJobs || 0}</h1>
                </div>

              
                    
               

            </div>

        </div>

    );
}

export default EmployeeDashboard;