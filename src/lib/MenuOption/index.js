import React from "react";
import PropTypes from "prop-types";

const MenuOption = ({ onClick, icon, text, isSelected }) => {
  return (
    <button
      onClick={onClick}
      className={!isSelected ? "menu-option" : "menu-option selected"}
    >
      <img src={icon} alt={text} className="menu-option-icon" />
      {text}
    </button>
  );
};

MenuOption.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
};

export default MenuOption;
