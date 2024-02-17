import { Link } from "gatsby";
import React from "react";
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
          {/* <Link className={styles.btn} to="/Projects">
            Projects
          </Link> */}
        </div>
      </section>
    </Layout>
  );
}
