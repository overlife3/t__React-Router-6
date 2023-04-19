import React from "react";
import { Link } from "react-router-dom";
const Layout = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/posts">Blog</Link>
      <Link to="/about">About</Link>
    </header>
  );
};

export default Layout;
