import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, icon, onClick, variant, bgColor, color }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={variant}
      style={{ backgroundColor: bgColor, color: color }}
    >
      {icon && <img className="button-icon" src={icon} alt="icon button" />}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  onclick: PropTypes.func,
  bgColor: PropTypes.string,
  variant: PropTypes.string,
};

export default Button;
