import React from "react";

import Avatar from "../Avatar";
import AvatarGeneralInfo from "../AvatarGeneralInfo";

const PreviewProfile = ({
  icon,
  name,
  image,
  bgColor,
  position,
  nameSize,
  nameColor,
  nameFontWeight,
  selectableItems,
}) => {
  return (
    <div className="preview-profile-container">
      <div className="preview-profile-avatar-container">
        <Avatar image={image} icon={icon} bgColor={bgColor} />
      </div>
      <AvatarGeneralInfo
        name={name}
        position={position}
        nameSize={nameSize}
        nameColor={nameColor}
        nameFontWeight={nameFontWeight}
        selectableItems={selectableItems}
      />
    </div>
  );
};

export default PreviewProfile;
