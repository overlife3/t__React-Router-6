import React, { FC } from "react";
import { Link, useMatch } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  to: string;
}

const CustomLink: FC<Props> = ({ children, to, ...props }) => {
  const match = useMatch({
    path: to,
    end: false, // чтобы на вложенные пути, также делали якорь активным
  });

  return (
    <Link
      to={to}
      {...props}
      style={{
        color: match ? "var(--color-active)" : "white",
      }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
