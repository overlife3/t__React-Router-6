import React from "react";
import { useRouteError } from "react-router-dom";

const Errorpage = () => {
  const error = useRouteError() as any;
  return (
    <div>
      <h1>{error.status}</h1>
      <h2>{error.statusText || "Something goes wrong"}</h2>
    </div>
  );
};

export default Errorpage;
