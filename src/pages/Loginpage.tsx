import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const Loginpage = () => {
  const [inputName, setInputName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const fromPage = location.state?.from?.pathname || "/";

  const hadnleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const user = {
      name: inputName,
    };
    signin(user, () => navigate(fromPage, { replace: true }));
  };
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={hadnleSubmit}>
        <label>
          name:{" "}
          <input
            name="username"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Loginpage;
