import { useState } from "react";
import "./App.css";
import About from "./About";
import Navigation from "./Navigation";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notice from "./Notice";
import Admission from "./Admission";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navigation />
          <Home />
        </>
      ),
    },
    {
      path: "/notice",
      element: (
        <>
          <Navigation />
          <Notice />
        </>
      ),
    },
    {
      path: "/admission",
      element: (
        <>
          <Navigation />
          <Admission />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <About />
    </>
  );
}

export default App;
