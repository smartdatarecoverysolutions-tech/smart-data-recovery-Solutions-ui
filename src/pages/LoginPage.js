import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../assets/css/Login.css";

function LoginPage() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleClear = () => {
        if (loading) return;

        setUsername("");
        setPassword("");
        setError("");
    };

    const handleLogin = async (e) => {

        e.preventDefault();

        setError("");
        setLoading(true);

        try {

            const response = await axios.post(
                "http://localhost:8080/api/users/login",
                {
                    username,
                    password
                }
            );

            setLoading(false);

            if (response.data) {

                sessionStorage.setItem(
                    "role",
                    response.data.role
                );

                sessionStorage.setItem(
                    "username",
                    response.data.username
                );

                if (response.data.role === "ADMIN") {

                    navigate("/main");

                } else if (response.data.role === "EMPLOYEE") {

                    navigate("/employee-main");
                }
            }

        } catch (error) {

            setLoading(false);

            setError("Invalid Username or Password");
        }
    };

    return (

        <div className="login-container">

            <div className="login-card">

                <div className="logo-circle">
                    💾
                </div>

                <h1>
                    Smart Data Recovery Solutions
                </h1>

                <p className="subtitle">
                    Data Recovery Company
                </p>

                <form onSubmit={handleLogin}>

                    <div className="input-group">

                        <label>
                            Username
                        </label>

                        <input
                            type="text"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) =>
                                setUsername(e.target.value)
                            }
                            disabled={loading}
                            required
                        />

                    </div>

                    <div className="input-group">

                        <label>
                            Password
                        </label>

                        <div className="password-wrapper">

                            <input
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                disabled={loading}
                                required
                            />

                            <span
                                className="eye-icon"
                                onClick={() =>
                                    !loading &&
                                    setShowPassword(
                                        !showPassword
                                    )
                                }
                            >
                                {showPassword ? (
                                    <FaEyeSlash />
                                ) : (
                                    <FaEye />
                                )}
                            </span>

                        </div>

                    </div>

                    <div className="button-group">

                        <button
                            type="submit"
                            className="login-btn"
                            disabled={loading}
                        >
                            {loading
                                ? "Checking..."
                                : "Login"}
                        </button>

                        <button
                            type="button"
                            className="clear-btn"
                            onClick={handleClear}
                            disabled={loading}
                        >
                            Clear
                        </button>

                    </div>

                </form>

                {loading && (

                    <div className="loading-box">

                        <span className="loader"></span>

                        <div>
                            <strong>
                                Checking Username &
                                Password...
                            </strong>
                            <br />
                            Please wait...
                        </div>

                    </div>

                )}

                {error && (

                    <div className="error-box">
                        {error}
                    </div>

                )}

            </div>

        </div>
    );
}

export default LoginPage;