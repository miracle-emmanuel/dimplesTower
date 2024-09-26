import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import About from "../pages/About.jsx";
import Reservation from "../pages/Reservation.jsx";
import Invest from "../pages/Invest.jsx";

import {createBrowserRouter, RouterProvider,} from "react-router-dom";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>,
  },

  {
    path: "reservation",
    element: <Reservation/>,
  },
  {
    path: "invest",
    element: <Invest/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)