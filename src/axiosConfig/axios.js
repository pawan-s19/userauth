import axios from "axios";

const instance = axios.create({
  baseURL: "https://user2232f.onrender.com/",
  withCredentials: true,
});

export default instance;
