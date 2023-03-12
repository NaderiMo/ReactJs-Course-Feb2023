import "./App.css";
import Login from "./components/Login";
import Users from "./components/Users";
import {
  BrowserRouter as createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import NoPage from "./NoPage";
import User from "./components/User";
import React from "react";

function App() {
  //   const router = createBrowserRouter([
  //     { path: "/", element: <Layout /> },
  //     { path: "*", element: <NoPage /> },
  //     { path: "/login", element: <Login /> },
  //     { path: "/Users", element: <Users /> },
  //     { path: "/User", element: <User /> },
  //   ]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          Header
          <Outlet />
        </div>
      ),
      children: [{ path: "/login", element: <Login /> }],
    },
    { path: "*", element: <NoPage /> },
    // { path: "/Users", element: <Users /> },
    //   { path: "/User", element: <User /> },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>

    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="*" element={<NoPage />} />
    //       <Route
    //         path="Login"
    //         element={
    //           <Container fluid>
    //             <Row>
    //               <Col md={3} xs={6}>
    //                 <Login />
    //               </Col>
    //             </Row>
    //           </Container>
    //         }
    //       />
    //       <Route path="Users" element={<Users />} />
    //       <Route path="User" element={<User />} />
    //     </Route>
    //   </Routes>
    // </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

export default App;
