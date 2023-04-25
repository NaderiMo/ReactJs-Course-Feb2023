
import { Container } from "react-bootstrap";
import { createBrowserRouter, Outlet } from "react-router-dom";
import CardList from '../components/CardList';
import Clock from '../components/Clock';
import Counter from '../components/Counter';
import Timer from "../components/hooks/Timer";
import Calculation from "../components/hooks/Calculation";
import CheckUseState from "../components/hooks/UseState";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Login1 from "../components/Login1";
import Login2 from "../components/Login2";
import UserManagement from "../components/UserManagement";
import RenderLogger from "../components/hooks/RenderLogger";
import TodoContainer from "../components/hooks/TodoContainer";
import UseReducerComponent from "../components/hooks/UseReducer";
import TabContainer from "../components/hooks/tabs/TabContainer";
import ComponentA from "../components/hooks/useContext/ComponentA";

const router = createBrowserRouter([
    {
        path: "/", element: (
            <>
                <Header />
                <Container >
                    <Outlet />
                </Container>
                <Footer />
            </>
        ),
        
        children: [
            { path: "/login1/:id?", element: (<Login1 />) },
            { path: "/login2", element: (<Login2 />) },
            { path: "/UserManagement", element: (<UserManagement />) },
            { path: "/signup", element: (<div><h1>SignUp</h1></div>) }
        ]
    },
    { path: "/CardList", element: (<CardList />) },
    { path: "/Clock", element: (<Clock />) },
    { path: "/Counter", element: (<Counter />) },
    { path: "/CheckUseState", element: (<CheckUseState />) },
    { path: "/Timer", element: (<Timer />) },
    { path: "/Calculation", element: (<Calculation />) },
    { path: "/RenderLogger", element: (<RenderLogger />) },
    { path: "/todo", element: (<TodoContainer />) },
    { path: "/useReducer", element: (<UseReducerComponent />) },
    { path: "/tabs", element: (<TabContainer />) },
    { path: "/a", element: (<ComponentA />) },
])

export default router;
