// services/apiClient.js
import Axios from "axios";

const apiClient = Axios.create({
// <<<<<<< HEAD
  // baseURL: "http://localhost:3000",
  baseURL: "https://email-builder-app.onrender.com",
// =======
  baseURL: "https://email-builder-app.onrender.com",
// >>>>>>> d29e1455cf410b7f0959b0cf20c9c8a556246733
  headers: { "Content-Type": "application/json" },
});

export default apiClient;
