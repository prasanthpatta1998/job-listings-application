import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Bookmarks from "./components/Bookmarks";
import JobDetails from "./components/JobDetails";
import ErrorPage from "./components/ErrorPage";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "bookmarks",
    element: <Bookmarks />,
  },
  {
    path: "job/:id",
    element: <JobDetails />,
  },
  {
    path: "bookmarks/job/:id",
    element: <JobDetails />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  }
]);

export default App;
