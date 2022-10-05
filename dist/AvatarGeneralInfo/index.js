"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AvatarGeneralInfo = _ref => {
  let {
    name,
    nameSize,
    positionText,
    nameColor,
    nameFontWeight,
    selectableItems
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "avatar-info-center-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "avatar-info-container"
  }, positionText && /*#__PURE__*/_react.default.createElement("span", {
    className: "body1 avatar-info-position-text"
  }, positionText), name && /*#__PURE__*/_react.default.createElement("span", {
    className: "avatar-info-name",
    style: {
      fontSize: nameSize,
      color: nameColor,
      fontWeight: nameFontWeight
    }
  }, name), selectableItems && /*#__PURE__*/_react.default.createElement("div", null, selectableItems)));
};

AvatarGeneralInfo.propTypes = {
  name: _propTypes.default.string,
  positionText: _propTypes.default.string,
  nameSize: _propTypes.default.string,
  nameColor: _propTypes.default.string,
  selectableItems: _propTypes.default.node,
  nameFontWeight: _propTypes.default.number
};
var _default = AvatarGeneralInfo;
exports.default = _default;