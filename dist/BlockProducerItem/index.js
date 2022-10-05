"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PreviewProfile = _interopRequireDefault(require("../PreviewProfile"));

var _ActionItemDelegateBp = _interopRequireDefault(require("../ActionItemDelegateBp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const BlockProducerItem = _ref => {
  let {
    name,
    image,
    bgColor,
    nameSize,
    nameColor,
    rankValue,
    proxyScore,
    avatarIcon,
    eosrateValue,
    positionText,
    checkboxValue,
    nameFontWeight,
    selectableItems
  } = _ref;
  const ref = (0, _react.useRef)(null);
  const [isSelected, setIsSelected] = (0, _react.useState)();

  const handleCheckboxState = () => {
    var _ref$current;

    setIsSelected(ref === null || ref === void 0 ? void 0 : (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.checked);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: isSelected ? "delegate-bp-item-container delegate-bp-item-seleted" : "delegate-bp-item-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react.default.createElement("input", {
    ref: ref,
    className: "delegate-bp-item-checkbox",
    type: "checkbox",
    id: "checkbox",
    name: "checkbox",
    onChange: handleCheckboxState,
    value: checkboxValue
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "delegate-bp-item-rank-padding"
  }, /*#__PURE__*/_react.default.createElement(_ActionItemDelegateBp.default, {
    text: "Rank",
    headItem: /*#__PURE__*/_react.default.createElement("span", {
      className: "h6"
    }, rankValue)
  })), /*#__PURE__*/_react.default.createElement(_PreviewProfile.default, {
    name: name,
    image: image,
    bgColor: bgColor,
    icon: avatarIcon,
    positionText: positionText,
    nameSize: nameSize,
    nameColor: nameColor,
    nameFontWeight: nameFontWeight,
    selectableItems: selectableItems
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "centerItems"
  }, /*#__PURE__*/_react.default.createElement(_ActionItemDelegateBp.default, {
    text: "EOSRate",
    headItem: /*#__PURE__*/_react.default.createElement("span", {
      className: "h6"
    }, eosrateValue)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "delegate-bp-item-proxy-padding"
  }, /*#__PURE__*/_react.default.createElement(_ActionItemDelegateBp.default, {
    text: "Proxy Score",
    headItem: /*#__PURE__*/_react.default.createElement("span", {
      className: "h6"
    }, proxyScore)
  }))));
};

BlockProducerItem.propTypes = {
  name: _propTypes.default.string,
  image: _propTypes.default.string,
  bgColor: _propTypes.default.string,
  nameSize: _propTypes.default.string,
  rankValue: _propTypes.default.string,
  nameColor: _propTypes.default.string,
  avatarIcon: _propTypes.default.string,
  proxyScore: _propTypes.default.string,
  eosrateValue: _propTypes.default.string,
  positionText: _propTypes.default.string,
  checkboxValue: _propTypes.default.string,
  selectableItems: _propTypes.default.node,
  nameFontWeight: _propTypes.default.number
};
var _default = BlockProducerItem;
exports.default = _default;