import axios from "axios";
const baseUrl = "http://localhost:5000";

export const axiosInstance = axios.create({
  baseURL: `${baseUrl}`,
});
