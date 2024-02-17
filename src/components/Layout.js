import React from "react";
import Nav from "./Nav";
import "../styles/global.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Nav />
      <div className="content">{children}</div>
      <footer>
        <p>This Gatsby website is copyright 2024 Web deploy</p>
      </footer>
    </div>
  );
}
