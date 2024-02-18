import React from "react";
// import { Link } from "gatsby";
import Layout from "../components/Layout";
// import styles from "../styles/global.css";

export default function Home() {
  return (
    <Layout>
      <section>
        <div>
          <h2>web deploy for Gatsby</h2>
          <h3>Develop & Deploy</h3>
          <p>web designer & web developer and deploy Article to Gatsby.</p>
          <p>
            <button onclick="document.location='https://www.gatsbyjs.com/'">
              HTML Tutorial
            </button>
          </p>
        </div>
        <img
          src="/image1.webp"
          alt="site banner"
          style={{ maxWidth: "100%" }}
        />
      </section>
    </Layout>
  );
}