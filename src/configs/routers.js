import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { createBrowserRouter, Outlet } from "react-router-dom";
import CardList from "../components/CardList";
import Clock from "../components/Clock";
import Counter from "../components/hooks/Counter";
import RenderLogger from "../components/hooks/RenderLog";
// import Counter from "../components/Counter";
import Timer from "../components/hooks/Timer";
import TodoContainer from "../components/hooks/TodoContainer";
import ComponentA from "../components/hooks/useContext/ComponentA";
import UseReducerComponent from "../components/hooks/UseReducer";
import CheckUseState from "../components/hooks/UseState";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Login from "../components/Login";
import Login1 from "../components/Login1";
import UserManagement from "../components/UserManagement";

const router = createBrowserRouter([
    // { path: "/", element: (<div>Hello</div>)},
    {
        path: "/", element: (
            <>
                <Header />

                <Outlet />

                <Footer />
            </>
        )
        , children: [
            // { path: "/login1/:id", element: (<Login1 />)},//mandatory
            { path: "/login1/:id?", element: (<Login1 />) },//optional
            { path: "/login", element: (<Login />) },
            { path: "/signup", element: (<div><h1>SignUp</h1></div>) },
            // { path: "/users", element: (<div><h1>UserManagement</h1></div>)},
            { path: "/users", element: (<UserManagement />) },
        ]
    },


    // { path: "/Counter", element: (<Counter />)},
    { path: "/CardList", element: (<CardList />) },
    { path: "/Clock", element: (<Clock />) },
    { path: "/check", element: (<CheckUseState />) },
    { path: "/timer", element: (<Timer />) },
    { path: "/counter", element: (<Counter />) },
    { path: "/renderLog", element: (<RenderLogger />) },
    { path: "/todo", element: (<TodoContainer />) },
    { path: "/reducer", element: (<UseReducerComponent />) },
    { path: "/a", element: (<ComponentA />) },
    { path: "/users", element: (<UserManagement />) },
])

export default router;