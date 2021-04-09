import axios from "axios";

const api = axios.create({
  baseURL: "https://capstone-grupo-dois.herokuapp.com/",
});

export default api;
