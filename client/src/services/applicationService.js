import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/applications`;

export const getApplications = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
export const createApplication = async (applicationData) => {
  const response = await axios.post(API_URL, applicationData);
  return response.data;
};