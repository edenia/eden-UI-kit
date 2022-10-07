import React from "react";
import clsx from 'clsx'
export interface IFab extends React.HTMLAttributes<HTMLButtonElement> {
  extended?: Boolean;
  externalStyles?: string;
  color?: string;
  children?: React.ReactNode;
  bgColor?: string;
}

export const Fab: React.FC<IFab> = ({
  children,
  extended,
  externalStyles,
  bgColor,
  color,
  ...props
}) => (
  <button
    type="button"
    className={clsx(externalStyles, { ["extended"]: extended, ["fab"]: !extended })}
    style={{ backgroundColor: bgColor, color: color }}
    {...props}
  >
    {children}
  </button>
);
