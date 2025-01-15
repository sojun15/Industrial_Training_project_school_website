import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import Academic from "./Academic.jsx";
import About from "./About.jsx";
import Navigation from "./Navigation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/academic",
    element: <Academic />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navigation />
    <RouterProvider router={router} />
  </StrictMode>
);
