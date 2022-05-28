import axios from "axios";

const api = axios.create({
  baseURL: "https://9204-179-54-213-125.ngrok.io",
});

export default api;
