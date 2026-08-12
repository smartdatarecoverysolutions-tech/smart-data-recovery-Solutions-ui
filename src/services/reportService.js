import axios from "axios";

const API_URL =
    "http://localhost:8080/api/reports";

export const getDashboardReport = () =>
    axios.get(
        `${API_URL}/dashboard`
    );