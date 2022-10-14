import React from "react";

export interface IActionItemDelegateBP {
  headItem?: React.ReactNode;
  target?: string;
  text?: string;
  icon?: string;
  link?: string;
  containerclasses?: string;
}

export const ActionItemDelegateBP: React.FC<IActionItemDelegateBP> = ({
  headItem,
  text,
  icon,
  link,
  target,
  containerclasses,
}) => {
  return (
    <div className={containerclasses}>
      <div className="alignCenter">{headItem}</div>
      <div className="centerItems">
        <span className="body1">{text}</span>
        {icon && (
          <a className="linkPadding" href={link} target={target}>
            <img src={icon} alt="action item icon" />
          </a>
        )}
      </div>
    </div>
  );
};
