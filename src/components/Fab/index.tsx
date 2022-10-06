import React from "react";

export interface IFab extends React.HTMLAttributes<HTMLButtonElement> {
  extended: Boolean;
  color: string;
  children: React.ReactNode;
  bgColor: string;
}

export const Fab: React.FC<IFab> = ({
  children,
  extended,
  bgColor,
  color,
  ...props
}) => (
  <button
    type="button"
    className={extended ? "extended" : "fab"}
    style={{ backgroundColor: bgColor, color: color }}
    {...props}
  >
    {children}
  </button>
);
