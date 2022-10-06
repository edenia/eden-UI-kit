import React from "react";

import Avatar from "../Avatar";
import AvatarGeneralInfo from "../AvatarGeneralInfo";

export interface IPreviewProfile {
  icon?: string;
  name?: string;
  image?: string;
  bgColor?: string;
  positionText?: string;
  nameSize?: string;
  nameColor?: string;
  selectableItems?: React.ReactNode;
  nameFontWeight?: number;
}

export const PreviewProfile: React.FC<IPreviewProfile> = ({
  icon,
  name,
  image,
  bgColor,
  positionText,
  nameSize,
  nameColor,
  nameFontWeight,
  selectableItems,
}) => (
  <div className="preview-profile-container">
    <div className="preview-profile-avatar-container">
      <Avatar image={image} icon={icon} bgColor={bgColor} />
    </div>
    <AvatarGeneralInfo
      name={name}
      positionText={positionText}
      nameSize={nameSize}
      nameColor={nameColor}
      nameFontWeight={nameFontWeight}
      selectableItems={selectableItems}
    />
  </div>
);
