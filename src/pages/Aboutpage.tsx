import React from "react";
import { Link, Outlet } from "react-router-dom";

const Aboutpage = () => {
  return (
    <div>
      <h1>Aboutpage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellat
      </p>

      <ul>
        <li>
          <Link to="/about/contacts">Our Contacts</Link>
        </li>
        <li>
          <Link to="team">Our Team</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Aboutpage;
