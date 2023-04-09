import axios from "axios";



const req = axios.create({
    baseURL : "https://6404754a80d9c5c7bac840cc.mockapi.io",
    timeout : 30000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default req