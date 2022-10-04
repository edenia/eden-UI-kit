import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import PreviewProfile from "../PreviewProfile";
import ActionItemDelegateBp from "../ActionItemDelegateBp";

const BlockProducerItem = ({
  name,
  image,
  bgColor,
  nameSize,
  nameColor,
  rankValue,
  proxyScore,
  avatarIcon,
  eosrateValue,
  positionText,
  checkboxValue,
  nameFontWeight,
  selectableItems,
}) => {
  const ref = useRef(null);
  const [isSelected, setIsSelected] = useState();

  const handleCheckboxState = () => {
    setIsSelected(ref?.current?.checked);
  };

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
          ref={ref}
          className="delegate-bp-item-checkbox"
          type="checkbox"
          id="checkbox"
          name="checkbox"
          onChange={handleCheckboxState}
          value={checkboxValue}
        />
        <div className="delegate-bp-item-rank-padding">
          <ActionItemDelegateBp
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
        <ActionItemDelegateBp
          text="EOSRate"
          headItem={<span className="h6">{eosrateValue}</span>}
        />
        <div className="delegate-bp-item-proxy-padding">
          <ActionItemDelegateBp
            text="Proxy Score"
            headItem={<span className="h6">{proxyScore}</span>}
          />
        </div>
      </div>
    </div>
  );
};

BlockProducerItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  bgColor: PropTypes.string,
  nameSize: PropTypes.string,
  rankValue: PropTypes.string,
  nameColor: PropTypes.string,
  avatarIcon: PropTypes.string,
  proxyScore: PropTypes.string,
  eosrateValue: PropTypes.string,
  positionText: PropTypes.string,
  checkboxValue: PropTypes.string,
  selectableItems: PropTypes.node,
  nameFontWeight: PropTypes.number,
};

export default BlockProducerItem;
