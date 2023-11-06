import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Blogs from "../pages/Blogs/Blogs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AppliedJob from "../pages/AppliedJob/AppliedJob";
import Alljob from "../pages/AllJob/Alljob";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>
        },
        {
          path: 'alljobs',
          element: <Alljob></Alljob>
        },
        {
          path: 'applied/:id',
          element: <AppliedJob></AppliedJob>,
          loader: ({params}) => fetch(`http://localhost:5000/jobcategory/${params.id}`)
        }
      ]
    },
  ]);

  export default router;