import React from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  label?: string;
  shape?: "rounded";
  icon?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  label,
  shape,
  icon,
  ...props
}) => {
  const classNames = `btn btn-${variant} btn-${shape}`;

  return (
    <button className={classNames} {...props}>
      {icon && <img className="button-icon" src={icon} alt="icon button" />}
      {label}
    </button>
  );
};
