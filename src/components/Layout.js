import React from "react";
import Nav from "./Nav";
import "../styles/global.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Nav />
      <div className="content">{children}</div>
      <footer>
        <p>This website is more componets example</p>
      </footer>
    </div>
  );
}
