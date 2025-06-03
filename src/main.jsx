import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "../src/../index.css";
import { router } from "./routes/Router";
import { RouterProvider } from "react-router-dom";
import Loading from "./components/common/loading/Loading";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Loading />
    <RouterProvider router={router} />
  </React.StrictMode>
);
