import React from "react";
import PropTypes from "prop-types";

const BodyCard = ({ content }) => {
  return <div className="card-body">{content}</div>;
};

BodyCard.propTypes = {
  content: PropTypes.node,
};

export default BodyCard;
