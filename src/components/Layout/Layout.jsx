import React from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";

const Layout = ({ children }) => (
  <div className="container">
    <Header />
    <Main>{children}</Main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout };
