import React from "react";
import Nav from "./Nav";
import "../styles/global.css";
import { graphql, useStaticQuery } from "gatsby";

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `);
  const { copyright } = data.site.siteMetadata;
  return (
    <div className="layout">
      <Nav />
      <div className="content">{children}</div>
      <footer>
        <p>{copyright}</p>
      </footer>
    </div>
  );
}
