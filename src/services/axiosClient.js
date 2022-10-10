import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {},
});

export default axiosClient;
