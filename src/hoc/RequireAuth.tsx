import React, { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

//сделаем абстракцию, которая будет оберткой для какой-то конкретной страницы

type Props = {
  children: JSX.Element | null;
};

const RequireAuth: FC<Props> = ({ children }) => {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
