import React from "react";

interface authLayoutProps {
  children: React.ReactNode;
}
const authLayoutStyle = {
  authContainer: " flex_col h-full w-full justify-center bg-transparent ",
};
const AuthLayout: React.FC<authLayoutProps> = ({ children }) => {
  return (
    <>
      <div className={authLayoutStyle.authContainer}>{children}</div>
    </>
  );
};

export default AuthLayout;
