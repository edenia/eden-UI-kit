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
    <div className="avatar-info-container">
      <span className="avatar-info-position">{position}</span>
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
      <div>{selectableItems}</div>
    </div>
  );
};

export default AvatarGeneralInfo;
