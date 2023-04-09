import axios from "axios";



const req = axios.create({
    baseURL : "https://6404754a80d9c5c7bac840cc.mockapi.io",
    timeout : 30000,
    headers: {'X-Custom-Header': 'foobar'}
  });

req.interceptors.request.use(function (config){
  console.log("axois req log",config)
return config;
}, function(error){
  return Promise.reject(error);
});

  export default req;