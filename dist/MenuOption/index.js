"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MenuOption = _ref => {
  let {
    onClick,
    icon,
    text,
    isSelected
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    className: !isSelected ? "menu-option" : "menu-option selected"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: icon,
    alt: text,
    className: "menu-option-icon"
  }), text);
};

MenuOption.propTypes = {
  text: _propTypes.default.string,
  icon: _propTypes.default.string,
  onClick: _propTypes.default.func,
  isSelected: _propTypes.default.bool
};
var _default = MenuOption;
exports.default = _default;