import { Link } from "gatsby";
import React from "react";
// import "../Styles/index.css";

export default function Nav() {
  return (
    <nav>
      <h1> Gatsby exercise link</h1>
      <div className="link">
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/Projects"> Projects</Link>
      </div>
    </nav>
  );
}
