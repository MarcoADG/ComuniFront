import axios from "axios";

const api = axios.create({
  baseURL: "http://35.184.203.56:8005/api",
});

export default api;
