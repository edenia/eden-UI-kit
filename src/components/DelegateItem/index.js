import React from "react";
import PropTypes from "prop-types";

import PreviewProfile from "../PreviewProfile";
import ActionItemDelegateBp from "../ActionItemDelegateBp";

const DelegateItem = ({
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
}) => {
  return (
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

DelegateItem.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  headItem: PropTypes.node,
  target: PropTypes.string,
  bgColor: PropTypes.string,
  linkIcon: PropTypes.string,
  nameSize: PropTypes.string,
  nameColor: PropTypes.string,
  avatarIcon: PropTypes.string,
  positionText: PropTypes.string,
  checkboxValue: PropTypes.string,
  selectableItems: PropTypes.node,
  nameFontWeight: PropTypes.number,
};

export default DelegateItem;
