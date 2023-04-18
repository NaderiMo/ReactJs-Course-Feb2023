import { Outlet } from "react-router-dom";
import CardList from "../components/CardList";
import Clock from "../components/Clock";
import Counter from "../components/Counter";
import Login from "../components/Login";
import Timer from "../components/hooks/Timer";
import UseReducer from "../components/hooks/UseReducer";

const router = createBrowserRouter([
    {path:"/",
    element:(<div>hello<hr/><Outlet/></div>),children: [
        {path:"/login",element:(<Login/>)},
        {path:"/signup",element:(<div><h1>signup</h1></div>)}
    ]
  },
  {path:"/cardlist",element:(<CardList/>)},
  {path:"/counter",element:(<Counter/>)},
  {path:"/clock",element:(<Clock/>)},
  {path:"/components/hooks/Timer",element:(<Timer/>)},
  {path:"/components/hooks/UseReducer",element:(<UseReducer/>)}
  ])
  export default router