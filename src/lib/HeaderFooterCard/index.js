import React from "react";
import PropTypes from "prop-types";

const HeaderFooterCard = ({ content }) => {
  return <div className="card-header-footer">{content}</div>;
};

HeaderFooterCard.propTypes = {
  content: PropTypes.node,
};

export default HeaderFooterCard;
