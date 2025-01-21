// services/apiClient.js
import Axios from "axios";

const apiClient = Axios.create({
  baseURL: "https://email-builder-app.onrender.com",
  headers: { "Content-Type": "application/json" },
});

export default apiClient;
