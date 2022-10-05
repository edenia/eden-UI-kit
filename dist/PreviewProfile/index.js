"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _AvatarGeneralInfo = _interopRequireDefault(require("../AvatarGeneralInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PreviewProfile = _ref => {
  let {
    icon,
    name,
    image,
    bgColor,
    positionText,
    nameSize,
    nameColor,
    nameFontWeight,
    selectableItems
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "preview-profile-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "preview-profile-avatar-container"
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    image: image,
    icon: icon,
    bgColor: bgColor
  })), /*#__PURE__*/_react.default.createElement(_AvatarGeneralInfo.default, {
    name: name,
    positionText: positionText,
    nameSize: nameSize,
    nameColor: nameColor,
    nameFontWeight: nameFontWeight,
    selectableItems: selectableItems
  }));
};

PreviewProfile.propTypes = {
  icon: _propTypes.default.string,
  name: _propTypes.default.string,
  image: _propTypes.default.string,
  bgColor: _propTypes.default.string,
  positionText: _propTypes.default.string,
  nameSize: _propTypes.default.string,
  nameColor: _propTypes.default.string,
  selectableItems: _propTypes.default.node,
  nameFontWeight: _propTypes.default.number
};
var _default = PreviewProfile;
exports.default = _default;