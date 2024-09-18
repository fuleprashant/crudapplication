import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GetUser from "./components/getUser";
import AddUser from "./components/addUser";
import UpdateUser from "./components/updateUser";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GetUser />,
    },
    {
      path: "/createuser",
      element: <AddUser />,
    },
    {
      path: "/updateuser/:id",
      element: <UpdateUser />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
