import React from "react";

import { PreviewProfile } from "../PreviewProfile";
import { ActionItemDelegateBP } from "../ActionItemDelegateBP";

export interface IDelegateItem {
  text?: string;
  link?: string;
  name?: string;
  image?: string;
  target?: string;
  bgColor?: string;
  linkIcon?: string;
  nameSize?: string;
  nameColor?: string;
  avatarIcon?: string;
  profileLink?: string;
  targetProfile: string;
  positionText?: string;
  checkboxValue?: string;
  nameFontWeight?: number;
  actionItemStyles?: string;
  headItem?: React.ReactNode;
  imgChild?: React.ReactElement;
  selectableItems?: React.ReactNode;
}

export const DelegateItem: React.FC<IDelegateItem> = ({
  text,
  link,
  name,
  image,
  target,
  bgColor,
  headItem,
  imgChild,
  nameSize,
  linkIcon,
  nameColor,
  avatarIcon,
  profileLink,
  positionText,
  targetProfile,
  nameFontWeight,
  selectableItems,
  actionItemStyles,
}) => (
  <div className="delegate-bp-item-container">
    <PreviewProfile
      name={name}
      image={image}
      bgColor={bgColor}
      icon={avatarIcon}
      imgChild={imgChild}
      positionText={positionText}
      profileLink={profileLink}
      targetProfile={targetProfile}
      nameSize={nameSize}
      nameColor={nameColor}
      nameFontWeight={nameFontWeight}
      selectableItems={selectableItems}
    />
    <ActionItemDelegateBP
      text={text}
      link={link}
      icon={linkIcon}
      target={target}
      headItem={headItem}
      containerclasses={actionItemStyles}
    />
  </div>
);
