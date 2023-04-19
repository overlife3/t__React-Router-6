import React, { FC } from "react";
import { Link, useMatch } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  to: string;
}

const CustomLink: FC<Props> = ({ children, to, ...props }) => {
  const match = useMatch(to);
  console.log(match);

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
