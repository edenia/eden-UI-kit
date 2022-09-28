import React from "react";
import PropTypes from "prop-types";

const AvatarGeneralInfo = ({
  name,
  nameSize,
  position,
  nameColor,
  nameFontWeight,
  selectableItems,
}) => {
  return (
    <div className="avatar-info-center-content">
      <div className="avatar-info-container">
        {position && <span className="avatar-info-position">{position}</span>}
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
  position: PropTypes.string,
  nameSize: PropTypes.string,
  nameColor: PropTypes.string,
  selectableItems: PropTypes.node,
  nameFontWeight: PropTypes.number,
};

export default AvatarGeneralInfo;
