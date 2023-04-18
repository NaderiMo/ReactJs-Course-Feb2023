import axios from "axios";

const req=axios.create({
    baseURL:"https://6404753c3bdc59fa8f39554b.mockapi.io",
    timeout:30000
});
req.interceptors.request.use(function (config){
    console.log("",config);
    return config;
},function(error){
    return Promise.reject(error);
});

 