import { createBrowserRouter, Outlet } from "react-router-dom"
import Clock from "../components/Clock"
import Counter from "../components/Counter"
import Login from "../components/Login"
import CardList from "../components/CardList"



const router = createBrowserRouter([
  {
    path : "/",element : (<div>Header <hr /><Outlet /></div>), children: [
    {path : "/login",element : (<Login/>)},
    {path : "/signup",element : (<div><h1>Signup</h1></div>)}
    ]
  },
  {path : "/CardList",
  element : (<CardList/>)}
  ,
  {path : "/Counter",
  element : (<Counter/>)}

  ,
  {path : "/clock",
  element : (<Clock/>)}

])
export default router