import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home2 from "../../pages/Home2";
import PostPage2 from "../../pages/PostPage2";
import LoginTwo from "../../pages/auth/LoginTwo";
import AdminLayout from "./layouts/AdminLayout";
import CreatePost from "../../pages/CreatePost";
import AuthLayout from "./layouts/AuthLayout ";
import ErrorPage from "../../components/ErrorPage";
// import UpdatePost from "../../pages/UpdatePost";

const RouterFile = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [ 
      {
        index: true,
        element: <Home2 />,
      },
      {
        path: "post/:postSlug",
        element: <PostPage2 />,
      },
    ],
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      
      {
        path: "create-post",
        element: <CreatePost />,
      },
      // {
      //   path: "update-post/:postId",
      //   element: <UpdatePost />,
      // },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <LoginTwo />,
      },
    ],
  },
]);

export default RouterFile;
