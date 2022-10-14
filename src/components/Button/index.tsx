import React from "react";
import clsx from "clsx";

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  label?: string;
  shape?: "rounded";
  icon?: string;
  externalStyles: string;
}

export const Button: React.FC<IButton> = ({
  variant,
  label,
  shape,
  icon,
  externalStyles,
  ...props
}) => {
  const classNames = `btn btn-${variant} btn-${shape}`;

  return (
    <button className={clsx(externalStyles, classNames)} {...props}>
      {icon && <img className="button-icon" src={icon} alt="icon button" />}
      {label}
    </button>
  );
};
