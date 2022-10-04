import React from "react";
import PropTypes from "prop-types";

const defaultBackgroundColor = "rgba(0, 0, 0, 0.38)";

const Avatar = ({ image, icon, bgColor }) => {
  return (
    <div
      className="avatar-container"
      style={{ backgroundColor: bgColor || defaultBackgroundColor }}
    >
      {image && <img src={image} className="app-avatar" alt="avatar" />}
      {icon && <img src={icon} alt="avatar icon" className="avatar-icon" />}
    </div>
  );
};

Avatar.propTypes = {
  icon: PropTypes.string,
  image: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Avatar;
