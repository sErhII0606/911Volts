import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section">
      <h2>404</h2>
      <p>Something went wrong</p>
      <p>Please try again</p>
      <Link className="btn btn-outline-secondary" to="/">
        home
      </Link>
    </section>
  );
};

export default Error;
