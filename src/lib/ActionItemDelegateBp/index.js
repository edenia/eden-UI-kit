import React from "react";
import PropTypes from "prop-types";

const ActionItemDelegateBp = ({ headItem, text, icon, link, target }) => {
  return (
    <div>
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

ActionItemDelegateBp.propTypes = {
  headItem: PropTypes.node,
  target: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  link: PropTypes.string,
};

export default ActionItemDelegateBp;
