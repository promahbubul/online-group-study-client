import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/About";
import AllAssignment from "../pages/AllAssignment";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateAssignment from "../pages/CreateAssignment";
import MyAssignment from "../pages/MyAssignment";
import UpdateAssignment from "../pages/UpdateAssignment";
import App from "../App";
import SingleAssignment from "../pages/SingleAssignment";
import PrivetRoute from "./PrivetRoute";
import Loading from "../hook/Loading";

export const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/category.json"),
      },
      {
        path: "/category/:id",
        loader: () => fetch(""),
      },
      {
        path: "/assignments",
        element: (
          <Loading>
            <AllAssignment />
          </Loading>
        ),
      },
      {
        path: "/assignment/:id",
        element: <SingleAssignment></SingleAssignment>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/api/v1/assignment/${params.id}`),
      },
      {
        path: "/create-assignment",
        element: (
          <Loading>
            <CreateAssignment />
          </Loading>
        ),
      },
      {
        path: "/my-assignments/",
        element: (
          <PrivetRoute>
            <MyAssignment />
          </PrivetRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateAssignment />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/api/v1/assignment/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);

// TODO:
/**
 * 1. Email
 * 2. Email Mach
 * 3. Backend
 * 4. Databse
 * 5. Fontend
 */
