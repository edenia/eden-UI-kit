import React from "react";
import PropTypes from "prop-types";

import Avatar from "../Avatar";
import AvatarGeneralInfo from "../AvatarGeneralInfo";

const PreviewProfile = ({
  icon,
  name,
  image,
  bgColor,
  positionText,
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
        positionText={positionText}
        nameSize={nameSize}
        nameColor={nameColor}
        nameFontWeight={nameFontWeight}
        selectableItems={selectableItems}
      />
    </div>
  );
};

PreviewProfile.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  bgColor: PropTypes.string,
  positionText: PropTypes.string,
  nameSize: PropTypes.string,
  nameColor: PropTypes.string,
  selectableItems: PropTypes.node,
  nameFontWeight: PropTypes.number,
};

export default PreviewProfile;
