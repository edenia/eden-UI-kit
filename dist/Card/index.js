"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BodyCard = _interopRequireDefault(require("../BodyCard"));

var _HeaderFooterCard = _interopRequireDefault(require("../HeaderFooterCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Card = _ref => {
  let {
    headerContent,
    bobyContent,
    footerContent,
    width,
    height
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card-container",
    style: {
      width: width,
      height: height
    }
  }, /*#__PURE__*/_react.default.createElement(_HeaderFooterCard.default, {
    content: headerContent
  }), /*#__PURE__*/_react.default.createElement(_BodyCard.default, {
    content: bobyContent
  }), /*#__PURE__*/_react.default.createElement(_HeaderFooterCard.default, {
    content: footerContent
  }));
};

Card.propTypes = {
  height: _propTypes.default.string,
  width: _propTypes.default.string,
  bobyContent: _propTypes.default.node,
  headerContent: _propTypes.default.node,
  footerContent: _propTypes.default.node
};
var _default = Card;
exports.default = _default;