import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import AddBlog from "../Pages/AddBlog";
import BlogDetails from "../Pages/BlogDetails";
import UpdateBlog from "../Pages/UpdateBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/blogs",
        element: <Contact></Contact>
      },
      {
        path: "/addBlog",
        element: <AddBlog></AddBlog>
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />
      },
      {
        path: "/updateBlog/:id",
        element: <UpdateBlog />,
      }

    ]
  },
]);

export default router;