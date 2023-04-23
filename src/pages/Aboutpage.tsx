import React from "react";
import { Route, Routes, Link } from "react-router-dom";

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

      {/* путь /about/contacts работать не будет */}
      <Routes>
        <Route path="contacts" element={<p>Our contacts</p>} />
        <Route path="team" element={<p>Our team</p>} />
      </Routes>
    </div>
  );
};

export default Aboutpage;
