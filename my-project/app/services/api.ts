import axios from "axios";

const api = axios.create({
  baseURL: "https://admindev.orbitskills.id/api",
});

export default api;