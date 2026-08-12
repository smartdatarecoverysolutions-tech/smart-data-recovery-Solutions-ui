import axios from "axios";

const API_URL =
    "http://localhost:8080/api/invoices";

export const saveInvoice = (invoice) =>
    axios.post(API_URL, invoice);

export const getInvoices = () =>
    axios.get(API_URL);