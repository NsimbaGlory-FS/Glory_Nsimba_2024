import React from "react";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div>
        <h2> 404 </h2>
        <p>
          A 404 page may be accessed very often. Server-rendering an error page
          for every visit increases the load of the Gatsby.js server. This can
          result in increased and Sorry, that page doesn't exist.
        </p>
      </div>
    </Layout>
  );
};

export default NotFound;
