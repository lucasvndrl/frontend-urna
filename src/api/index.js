import axios from "axios";

const api = axios.create({
  baseURL: "https://52bd-179-54-213-125.ngrok.io",
});

export default api;
