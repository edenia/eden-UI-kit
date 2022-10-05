"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ActionItemDelegateBp = _ref => {
  let {
    headItem,
    text,
    icon,
    link,
    target
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "alignCenter"
  }, headItem), /*#__PURE__*/_react.default.createElement("div", {
    className: "centerItems"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "body1"
  }, text), icon && /*#__PURE__*/_react.default.createElement("a", {
    className: "linkPadding",
    href: link,
    target: target
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: icon,
    alt: "action item icon"
  }))));
};

ActionItemDelegateBp.propTypes = {
  headItem: _propTypes.default.node,
  target: _propTypes.default.string,
  text: _propTypes.default.string,
  icon: _propTypes.default.string,
  link: _propTypes.default.string
};
var _default = ActionItemDelegateBp;
exports.default = _default;