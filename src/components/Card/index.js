import React from "react";
import PropTypes from "prop-types";

import BodyCard from "../BodyCard";
import HeaderFooterCard from "../HeaderFooterCard";

const Card = ({ headerContent, bobyContent, footerContent, width, height }) => {
  return (
    <div className="card-container" style={{ width: width, height: height }}>
      <HeaderFooterCard content={headerContent} />
      <BodyCard content={bobyContent} />
      <HeaderFooterCard content={footerContent} />
    </div>
  );
};

Card.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  bobyContent: PropTypes.node,
  headerContent: PropTypes.node,
  footerContent: PropTypes.node,
};

export default Card;
