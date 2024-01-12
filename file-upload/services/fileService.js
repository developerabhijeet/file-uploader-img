import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

export const uploadFile = async (file) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/files/upload`, file, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (e) {
    console.error("Error uploading file", error);
  }
};

export const fetchFiles = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/files/list`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
