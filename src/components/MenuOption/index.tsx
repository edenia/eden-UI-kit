import React from "react";

export interface IMenuOption extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: string;
  isSelected: Boolean;
}

export const MenuOption: React.FC<IMenuOption> = ({
  icon,
  text,
  isSelected,
  ...props
}) => (
  <button
    className={!isSelected ? "menu-option" : "menu-option selected"}
    {...props}
  >
    <img src={icon} alt={text} className="menu-option-icon" />
    {text}
  </button>
);
