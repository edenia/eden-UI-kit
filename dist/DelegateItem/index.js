"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PreviewProfile = _interopRequireDefault(require("../PreviewProfile"));

var _ActionItemDelegateBp = _interopRequireDefault(require("../ActionItemDelegateBp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DelegateItem = _ref => {
  let {
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
    selectableItems
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "delegate-bp-item-container"
  }, /*#__PURE__*/_react.default.createElement(_PreviewProfile.default, {
    name: name,
    image: image,
    bgColor: bgColor,
    icon: avatarIcon,
    positionText: positionText,
    nameSize: nameSize,
    nameColor: nameColor,
    nameFontWeight: nameFontWeight,
    selectableItems: selectableItems
  }), /*#__PURE__*/_react.default.createElement(_ActionItemDelegateBp.default, {
    text: text,
    link: link,
    icon: linkIcon,
    target: target,
    headItem: headItem
  }));
};

DelegateItem.propTypes = {
  text: _propTypes.default.string,
  link: _propTypes.default.string,
  name: _propTypes.default.string,
  image: _propTypes.default.string,
  headItem: _propTypes.default.node,
  target: _propTypes.default.string,
  bgColor: _propTypes.default.string,
  linkIcon: _propTypes.default.string,
  nameSize: _propTypes.default.string,
  nameColor: _propTypes.default.string,
  avatarIcon: _propTypes.default.string,
  positionText: _propTypes.default.string,
  checkboxValue: _propTypes.default.string,
  selectableItems: _propTypes.default.node,
  nameFontWeight: _propTypes.default.number
};
var _default = DelegateItem;
exports.default = _default;