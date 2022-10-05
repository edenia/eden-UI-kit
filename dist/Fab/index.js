"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Fab = _ref => {
  let {
    onClick,
    children,
    extended,
    bgColor,
    color
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: onClick,
    className: extended ? "extended" : "fab",
    style: {
      backgroundColor: bgColor,
      color: color
    }
  }, children);
};

Fab.propTypes = {
  extende: _propTypes.default.bool,
  color: _propTypes.default.string,
  onClick: _propTypes.default.func,
  children: _propTypes.default.node,
  bgColor: _propTypes.default.string
};
var _default = Fab;
exports.default = _default;