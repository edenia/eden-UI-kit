"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = _ref => {
  let {
    text,
    icon,
    onClick,
    variant,
    bgColor,
    color
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: onClick,
    className: variant,
    style: {
      backgroundColor: bgColor,
      color: color
    }
  }, icon && /*#__PURE__*/_react.default.createElement("img", {
    className: "button-icon",
    src: icon,
    alt: "icon button"
  }), text);
};

Button.propTypes = {
  text: _propTypes.default.string,
  icon: _propTypes.default.string,
  color: _propTypes.default.string,
  onClick: _propTypes.default.func,
  bgColor: _propTypes.default.string,
  variant: _propTypes.default.string
};
var _default = Button;
exports.default = _default;