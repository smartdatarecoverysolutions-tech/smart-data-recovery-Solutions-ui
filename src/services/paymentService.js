import axios from "axios";

const API_URL = "http://localhost:8080/api/payments";

export const savePayment = (payment) =>
    axios.post(API_URL, payment);

export const getPayments = () =>
    axios.get(API_URL);

export const deletePayment = (id) =>
    axios.delete(`${API_URL}/${id}`);

export const getPaymentsByJob = (jobId) =>
    axios.get(`${API_URL}/job/${jobId}`);

export const getTotalPaid = (jobId) =>
    axios.get(
        `http://localhost:8080/api/payments/total-paid/${jobId}`
    );