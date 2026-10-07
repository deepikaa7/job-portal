
import React from "react";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Home from "./components/components_lite/Home";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;

