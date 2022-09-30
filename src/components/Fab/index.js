import React from "react";
import PropTypes from "prop-types";

const Fab = ({ onClick, children, extended, bgColor, color }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={extended ? "extended" : "fab"}
      style={{ backgroundColor: bgColor, color: color }}
    >
      {children}
    </button>
  );
};

Fab.propTypes = {
  extende: PropTypes.bool,
  color: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  bgColor: PropTypes.string,
};

export default Fab;
