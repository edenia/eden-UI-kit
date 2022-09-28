import React from "react";
import PropTypes from "prop-types";

import PreviewProfile from "../PreviewProfile";
import ActionItemDelegateBp from "../ActionItemDelegateBp";

const DelegateBPItem = ({
  text,
  link,
  name,
  image,
  target,
  bgColor,
  headItem,
  positionText,
  nameSize,
  linkIcon,
  nameColor,
  avatarIcon,
  checkboxValue,
  nameFontWeight,
  selectableItems,
}) => {
  return (
    <div className="delegate-bp-item-container">
      <div className="flex">
        <input
          className="delegate-bp-item-checkbox"
          type="checkbox"
          id="checkbox"
          name="checkbox"
          value={checkboxValue}
        />
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
      <ActionItemDelegateBp
        text={text}
        link={link}
        icon={linkIcon}
        target={target}
        headItem={headItem}
      />
    </div>
  );
};

DelegateBPItem.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  headItem: PropTypes.node,
  target: PropTypes.string,
  bgColor: PropTypes.string,
  linkIcon: PropTypes.string,
  positionText: PropTypes.string,
  nameSize: PropTypes.string,
  nameColor: PropTypes.string,
  avatarIcon: PropTypes.string,
  checkboxValue: PropTypes.string,
  selectableItems: PropTypes.node,
  nameFontWeight: PropTypes.number,
};

export default DelegateBPItem;
