import React from "react";
// import { Link } from "gatsby";
import Layout from "../components/Layout";
// import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <Layout>
      <section>
        <div>
          <h2>My Exercise week 1.</h2>
          <h3>I develop my coding & Deploy.</h3>
          <p>
            Web design & web developer is better to create the different
            application.
          </p>
          {/* <Link className={styles.btn} to="/projects">
            Projects
          </Link> */}
        </div>
        <img
          src="/Future-of-Water-iS-1401109426 (2).jpeg"
          alt="site banner"
          style={{ maxWidth: "100%" }}
        />
      </section>
    </Layout>
  );
}
