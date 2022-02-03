import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials:true
});

instance.defaults.headers.common["Access-Control-Allow-Origin"] = `*`;

export default instance;
