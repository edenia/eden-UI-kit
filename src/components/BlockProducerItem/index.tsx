import React from "react";

import { PreviewProfile } from "../PreviewProfile";
import { ActionItemDelegateBP } from "../ActionItemDelegateBP";

export interface IBlockProducerItem {
  name: string;
  image?: string;
  bgColor?: string;
  onClick(): void;
  nameSize?: string;
  rankValue: string;
  nameColor?: string;
  isSelected: boolean;
  avatarIcon?: string;
  proxyScore?: string;
  eosrateValue?: string;
  positionText?: string;
  checkboxValue: string;
  selectableItems?: React.ReactNode;
  nameFontWeight?: number;
}

export const BlockProducerItem: React.FC<IBlockProducerItem> = ({
  name,
  image,
  bgColor,
  nameSize,
  nameColor,
  rankValue,
  proxyScore,
  avatarIcon,
  isSelected,
  eosrateValue,
  positionText,
  checkboxValue,
  onClick,
  nameFontWeight,
  selectableItems,
}) => {
  return (
    <div
      className={
        isSelected
          ? "delegate-bp-item-container delegate-bp-item-seleted"
          : "delegate-bp-item-container"
      }
    >
      <div className="flex">
        <input
          checked={isSelected}
          className="delegate-bp-item-checkbox"
          type="checkbox"
          id="checkbox"
          name="checkbox"
          onChange={() => onClick()}
          value={checkboxValue}
        />
        <div className="delegate-bp-item-rank-padding">
          <ActionItemDelegateBP
            text="Rank"
            headItem={<span className="h6">{rankValue}</span>}
          />
        </div>
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
      </div>
      <div className="centerItems">
        <ActionItemDelegateBP
          text="EOSRate"
          headItem={<span className="h6">{eosrateValue}</span>}
        />
        <div className="delegate-bp-item-proxy-padding">
          <ActionItemDelegateBP
            text="Proxy Score"
            headItem={<span className="h6">{proxyScore}</span>}
          />
        </div>
      </div>
    </div>
  );
};
