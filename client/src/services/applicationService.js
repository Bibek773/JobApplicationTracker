import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/applications`;

export const getApplications = async (status = "") => {
  const response = await axios.get(API_URL, {
    params: status ? { status: status } : {}
  });
  return response.data;
};
export const createApplication = async (applicationData) => {
  const response = await axios.post(API_URL, applicationData);
  return response.data;
};
export const deleteApplication = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
export const updateApplication = async (id, applicationData) => {
  const response = await axios.patch(`${API_URL}/${id}`, applicationData);
  return response.data;
};