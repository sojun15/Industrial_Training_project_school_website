import React from "react";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/notice">Notice</Link>
        <Link to="/admission">Admission</Link>
      </nav>
    </div>
  );
}
