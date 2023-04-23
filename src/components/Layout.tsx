import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import CustomLink from "./CustomLink";
const Layout = () => {
  const setActive: (props: {
    isActive: boolean;
    isPending: boolean;
  }) => string | undefined = ({ isActive }) => (isActive ? "active-link" : "");

  const setStyle: (obj: any) => any = ({ isActive }) => ({
    color: isActive ? "var(--color-active)" : "white",
  });
  return (
    <>
      <header>
        <NavLink to="/" className={setActive}>
          Home
        </NavLink>
        <NavLink to="/posts" style={setStyle}>
          Blog
        </NavLink>
        <CustomLink to="/about">About</CustomLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">year 2021</footer>
    </>
  );
};

export default Layout;
