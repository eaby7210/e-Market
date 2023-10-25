// import React from "react";

import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import PropTypes from "prop-types";
const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen ">
      <Navbar className="fixed top-0 left-0 w-full z-50" />
      <div className="content relative z-0">{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node, // Add PropTypes validation for 'children'
};
export default Layout;
