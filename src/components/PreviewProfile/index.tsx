import React from "react";

import { Avatar } from "../Avatar";
import { AvatarGeneralInfo } from "../AvatarGeneralInfo";

export interface IPreviewProfile {
  icon?: string;
  name?: string;
  image?: string;
  imgChild?: React.ReactElement;
  bgColor?: string;
  nameSize?: string;
  nameColor?: string;
  profileLink?: string;
  targetProfile?: string;
  positionText?: string;
  nameFontWeight?: number;
  selectableItems?: React.ReactNode;
}

export const PreviewProfile: React.FC<IPreviewProfile> = ({
  icon,
  name,
  image,
  bgColor,
  nameSize,
  imgChild,
  nameColor,
  profileLink,
  positionText,
  targetProfile,
  nameFontWeight,
  selectableItems,
}) => (
  <a
    href={profileLink}
    rel="noreferrer"
    target={targetProfile}
    className="linkStyle"
  >
    <div className="preview-profile-container">
      <div className="preview-profile-avatar-container">
        <Avatar
          image={image}
          icon={icon}
          bgColor={bgColor}
          imgChild={imgChild}
        />
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
  </a>
);
