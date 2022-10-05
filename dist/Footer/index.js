"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Footer = _ref => {
  let {
    socialMediaItems,
    buttomContent,
    itemsFooter,
    bgColor,
    color
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-container",
    style: {
      backgroundColor: bgColor
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-items-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex"
  }, itemsFooter.map(item => {
    var _item$links;

    return /*#__PURE__*/_react.default.createElement("div", {
      key: item === null || item === void 0 ? void 0 : item.title,
      style: {
        color: color
      },
      className: "footer-item-container"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "footer-item-title"
    }, item === null || item === void 0 ? void 0 : item.title), item === null || item === void 0 ? void 0 : (_item$links = item.links) === null || _item$links === void 0 ? void 0 : _item$links.map(link => /*#__PURE__*/_react.default.createElement("a", {
      style: {
        color: color,
        textDecoration: link === null || link === void 0 ? void 0 : link.underline
      },
      href: link === null || link === void 0 ? void 0 : link.ref,
      rel: "noreferrer",
      target: link === null || link === void 0 ? void 0 : link.target
    }, link === null || link === void 0 ? void 0 : link.text)));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex footer-social-media-container"
  }, socialMediaItems.map(item => /*#__PURE__*/_react.default.createElement("a", {
    key: item === null || item === void 0 ? void 0 : item.name,
    href: item === null || item === void 0 ? void 0 : item.ref,
    target: "_blank",
    rel: "noreferrer",
    className: "footer-paddding-social-media-icons"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: item === null || item === void 0 ? void 0 : item.image,
    alt: item === null || item === void 0 ? void 0 : item.name,
    width: "24px"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-buttom-component"
  }, buttomContent));
};

Footer.propTypes = {
  color: _propTypes.default.string,
  bgColor: _propTypes.default.string,
  itemsFooter: _propTypes.default.array,
  buttomContent: _propTypes.default.node,
  socialMediaItems: _propTypes.default.array
};
var _default = Footer;
exports.default = _default;