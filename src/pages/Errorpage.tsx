import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const Errorpage = () => {
  const error = useRouteError() as any;

  // связана ли ошибка с роумингом? помогает это понять:
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status}</h1>
        <h2>{error.data.message || "Something goes wrong"}</h2>
        <h3>{error.data.reason}</h3>
      </div>
    );
  }

  throw error;
};

export default Errorpage;
