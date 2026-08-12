import axios from "axios";

const API_URL =
  "http://localhost:8080/api/receipt";

export const generateReceipt = async (jobId) => {

    const response =
      await axios.get(
        `${API_URL}/${jobId}`,
        {
            responseType: "blob"
        }
      );

    return response.data;
};