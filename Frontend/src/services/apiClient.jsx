// services/apiClient.js
import Axios from "axios";

const apiClient = Axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});

export default apiClient;
