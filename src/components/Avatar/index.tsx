import React from "react";

export interface IAvatar {
  icon?: string;
  image?: string;
  imgChild?: React.ReactElement;
  bgColor?: string;
}

export const Avatar: React.FC<IAvatar> = ({
  icon,
  image,
  imgChild,
  bgColor = "rgba(0, 0, 0, 0.38)",
}) => (
  <div className="avatar-container" style={{ backgroundColor: bgColor }}>
    {image && <img src={image} className="app-avatar" alt="avatar" />}
    {imgChild}
    {icon && <img src={icon} alt="avatar icon" className="avatar-icon" />}
  </div>
);
