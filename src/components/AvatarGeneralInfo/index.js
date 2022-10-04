import React from "react";
import PropTypes from "prop-types";

const AvatarGeneralInfo = ({
  name,
  nameSize,
  positionText,
  nameColor,
  nameFontWeight,
  selectableItems,
}) => {
  return (
    <div className="avatar-info-center-content">
      <div className="avatar-info-container">
        {positionText && (
          <span className="body1 avatar-info-position-text">
            {positionText}
          </span>
        )}
        {name && (
          <span
            className="avatar-info-name"
            style={{
              fontSize: nameSize,
              color: nameColor,
              fontWeight: nameFontWeight,
            }}
          >
            {name}
          </span>
        )}
        {selectableItems && <div>{selectableItems}</div>}
      </div>
    </div>
  );
};

AvatarGeneralInfo.propTypes = {
  name: PropTypes.string,
  positionText: PropTypes.string,
  nameSize: PropTypes.string,
  nameColor: PropTypes.string,
  selectableItems: PropTypes.node,
  nameFontWeight: PropTypes.number,
};

export default AvatarGeneralInfo;
