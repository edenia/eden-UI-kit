import React from "react";

export interface ILogo {
  logo: string;
}

export const Logo: React.FC<ILogo> = ({ logo }) => (
  <img src={logo} className="app-logo" alt="logo" />
);
