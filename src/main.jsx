import React from "react";
import ReactDOM from "react-dom/client";
import "../src/../index.css";
import { router } from "./routes/Router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
