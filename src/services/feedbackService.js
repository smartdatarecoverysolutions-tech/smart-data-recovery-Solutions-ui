import axios from "axios";

const API_URL =
    "http://localhost:8080/api/feedback";

export const saveFeedback =
    (feedback) =>
        axios.post(
            API_URL,
            feedback
        );

export const getFeedbacks =
    () =>
        axios.get(API_URL);