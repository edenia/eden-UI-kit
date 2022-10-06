import React from "react";

import { PreviewProfile } from "../PreviewProfile";
import { ActionItemDelegateBP } from "../ActionItemDelegateBP";

export interface IDelegateItem {
  text: string;
  link: string;
  name: string;
  image: string;
  headItem: React.ReactNode;
  target: string;
  bgColor: string;
  linkIcon: string;
  nameSize: string;
  nameColor: string;
  avatarIcon: string;
  positionText: string;
  checkboxValue: string;
  selectableItems: React.ReactNode;
  nameFontWeight: number;
}

export const DelegateItem: React.FC<IDelegateItem> = ({
  text,
  link,
  name,
  image,
  target,
  bgColor,
  headItem,
  nameSize,
  linkIcon,
  nameColor,
  avatarIcon,
  positionText,
  nameFontWeight,
  selectableItems,
}) => (
  <div className="delegate-bp-item-container">
    <PreviewProfile
      name={name}
      image={image}
      bgColor={bgColor}
      icon={avatarIcon}
      positionText={positionText}
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
    />
  </div>
);
