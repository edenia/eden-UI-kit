"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HeaderFooterCard = _ref => {
  let {
    content
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card-header-footer"
  }, content);
};

HeaderFooterCard.propTypes = {
  content: _propTypes.default.node
};
var _default = HeaderFooterCard;
exports.default = _default;