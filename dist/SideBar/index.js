"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SideBar = _ref => {
  let {
    open,
    logo,
    close,
    menuOptions,
    profileComponent
  } = _ref;
  if (!open) return;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-drawer-mobile"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-mobile-background",
    onClick: close
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-body-head-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-logo-container"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: logo,
    alt: "App logo"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-options-container"
  }, menuOptions)), /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-padding-profile"
  }, profileComponent)));
};

SideBar.propTypes = {
  open: _propTypes.default.func,
  close: _propTypes.default.func,
  logo: _propTypes.default.string,
  menuOptions: _propTypes.default.node,
  profileComponent: _propTypes.default.node
};
SideBar.defaultProps = {
  open: true
};
var _default = SideBar;
exports.default = _default;