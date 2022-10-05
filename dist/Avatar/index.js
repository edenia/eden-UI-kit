"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultBackgroundColor = "rgba(0, 0, 0, 0.38)";

const Avatar = _ref => {
  let {
    image,
    icon,
    bgColor
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "avatar-container",
    style: {
      backgroundColor: bgColor || defaultBackgroundColor
    }
  }, image && /*#__PURE__*/_react.default.createElement("img", {
    src: image,
    className: "app-avatar",
    alt: "avatar"
  }), icon && /*#__PURE__*/_react.default.createElement("img", {
    src: icon,
    alt: "avatar icon",
    className: "avatar-icon"
  }));
};

Avatar.propTypes = {
  icon: _propTypes.default.string,
  image: _propTypes.default.string,
  bgColor: _propTypes.default.string
};
var _default = Avatar;
exports.default = _default;