import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials:true
});

instance.interceptors.request.use(function (config) {
  // Do something before request is sent  
  return config;
}, function (error) {
  // Do something with request error  
  return Promise.reject(error);
});
instance.defaults.headers.common["Access-Control-Allow-Origin"] = `*`;

export default instance;
