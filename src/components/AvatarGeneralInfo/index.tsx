import React from "react";

export interface IAvatarGeneralInfo {
  name?: string;
  positionText?: string;
  nameSize?: string;
  nameColor?: string;
  selectableItems?: React.ReactNode;
  nameFontWeight?: number;
}

const AvatarGeneralInfo: React.FC<IAvatarGeneralInfo> = ({
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

export default AvatarGeneralInfo;
