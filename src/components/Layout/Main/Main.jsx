import React from "react";

import "./Main.scss";
import PropTypes from "prop-types";

const Main = ({ children }) => <main>{children}</main>;

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Main };
