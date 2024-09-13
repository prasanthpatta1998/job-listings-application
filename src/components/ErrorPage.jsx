import React from "react";
import errorPage from "../assets/images/error_page.svg";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Footer />
      <main>
        <section className="error-page-container">
          <div>
            <img src={errorPage} alt="error image" className="error-image" />
          </div>
          <h1>Sorry, the page you're trying to reach doesn't seem to exist.</h1>
          <h3 className="error-back-home">
            <Link to="/">Back Home</Link>
          </h3>
        </section>
      </main>
    </>
  );
};

export default ErrorPage;
