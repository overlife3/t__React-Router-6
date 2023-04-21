import React, { createContext, useState, FC } from "react";

export const AuthContext = createContext<any>(null);

type Props = {
  children: JSX.Element;
};

type User = {
  name: string;
};

const AuthProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const signin = (newUser: User, cb: () => void) => {
    setUser(newUser);
    cb();
  };
  const signout = (cb: () => void) => {
    setUser(null);
    cb();
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
