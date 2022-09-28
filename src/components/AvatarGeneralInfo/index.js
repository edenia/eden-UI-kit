import React from "react";

const AvatarGeneralInfo = ({
  position,
  name,
  nameSize,
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

export default AvatarGeneralInfo;
