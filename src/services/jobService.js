import axios from "axios";

const API_URL =
    "http://localhost:8080/api/jobs";

export const saveJob = (job) =>
    axios.post(API_URL, job);

export const getJobs = () =>
    axios.get(API_URL);

export const getJobById = (id) =>
    axios.get(`${API_URL}/${id}`);

export const deleteJob = (id) =>
    axios.delete(`${API_URL}/${id}`);

/* ADMIN UPDATE */
export const updateJob = (id, job) =>
    axios.put(
        `${API_URL}/${id}`,
        job
    );

/* EMPLOYEE STATUS UPDATE */
export const updateRecoveryStatus = (
    id,
    recoveryStatus
) =>
    axios.put(
        `${API_URL}/${id}/status`,
        {
            recoveryStatus
        }
    );