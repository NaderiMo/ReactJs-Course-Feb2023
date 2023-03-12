import axios from "axios";

const req = axios.create({
  baseURL: "https://6408e3ead16b1f3ed6c5a495.mockapi.io",
  timeout: 3000,
});

req.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log(config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default req;
