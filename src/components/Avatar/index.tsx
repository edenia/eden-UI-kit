import React from "react";

export interface IAvatar {
  icon: string;
  image: string;
  bgColor: string;
}

const defaultBackgroundColor = "rgba(0, 0, 0, 0.38)";

const Avatar: React.FC<IAvatar> = ({ icon, image, bgColor }) => (
  <div
    className="avatar-container"
    style={{ backgroundColor: bgColor || defaultBackgroundColor }}
  >
    {image && <img src={image} className="app-avatar" alt="avatar" />}
    {icon && <img src={icon} alt="avatar icon" className="avatar-icon" />}
  </div>
);

export default Avatar;
