import axios from "axios";

const req = axios.create({
    baseURL: 'https://6404753c3bdc59fa8f39554b.mockapi.io',
    timeout: 30000
});

// Add a request interceptor
req.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("intercept request log ", config);
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

export default req;