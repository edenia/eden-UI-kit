"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Logo = _ref => {
  let {
    logo
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("img", {
    src: logo,
    className: "app-logo",
    alt: "logo"
  });
};

var _default = Logo;
exports.default = _default;