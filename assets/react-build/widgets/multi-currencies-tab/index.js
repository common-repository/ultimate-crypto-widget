/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./react/helper-components/PricePercentage.tsx":
/*!*****************************************************!*\
  !*** ./react/helper-components/PricePercentage.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var iconsax_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! iconsax-react */ "./node_modules/iconsax-react/dist/esm/ArrowUp.js");
/* harmony import */ var iconsax_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! iconsax-react */ "./node_modules/iconsax-react/dist/esm/ArrowDown.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helper_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/helper/helper */ "./react/helper/helper.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["percentage", "arrowSize", "styles", "showPercentageSign", "decimalPlaces"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }




/**
 * Props for the PricePercentage component.
 *
 * @interface PricePercentageProps
 * @extends {HTMLAttributes<HTMLDivElement>}
 * @property {number} percentage - The percentage value to display.
 * @property {number | false} [arrowSize=15] - The size of the arrow icon. If set to false, the arrow will be hidden.
 * @property {CSSProperties} [styles] - Additional styles to apply to the component.
 */

/**
 * A component that displays a percentage value with an optional up or down arrow icon.
 * The arrow icon indicates whether the percentage is positive or negative.
 * 
 * common properties
 * @param {number} percentage - The percentage value to display.
 * @param {number | false} [arrowSize=15] - The size of the arrow icon. If set to false, the arrow will be hidden.
 *
 * @param {PricePercentageProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
var PricePercentage = function PricePercentage(_ref) {
  var percentage = _ref.percentage,
    _ref$arrowSize = _ref.arrowSize,
    arrowSize = _ref$arrowSize === void 0 ? 15 : _ref$arrowSize,
    styles = _ref.styles,
    _ref$showPercentageSi = _ref.showPercentageSign,
    showPercentageSign = _ref$showPercentageSi === void 0 ? true : _ref$showPercentageSi,
    _ref$decimalPlaces = _ref.decimalPlaces,
    decimalPlaces = _ref$decimalPlaces === void 0 ? 2 : _ref$decimalPlaces,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(percentage >= 0),
    _useState2 = _slicedToArray(_useState, 2),
    isPositive = _useState2[0],
    setIsPositive = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    lastPercentage = _useState4[0],
    setLastPercentage = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIsPositive(percentage >= lastPercentage);
    setLastPercentage(percentage);
  }, [percentage]);
  styles = _objectSpread({
    display: "flex",
    alignItems: "center",
    // shrink the font size to fit the content
    whiteSpace: "nowrap"
  }, styles);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({}, props, {
    style: _objectSpread({
      color: isPositive ? "green" : "red"
    }, styles)
  }), arrowSize !== false && (isPositive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(iconsax_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: arrowSize,
    color: "green"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(iconsax_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: arrowSize,
    color: "red"
  })), (0,react_helper_helper__WEBPACK_IMPORTED_MODULE_1__.roundToDecimalPlaces)(percentage, decimalPlaces), showPercentageSign && '%');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PricePercentage);

/***/ }),

/***/ "./react/helper-components/WebHooks/BinanceStreamTicker.tsx":
/*!******************************************************************!*\
  !*** ./react/helper-components/WebHooks/BinanceStreamTicker.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

function useBinanceStreamTickerWebSocket(symbols) {
  var defaultCurrencyDollarRate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    connected = _useState2[0],
    setConnected = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    tickerData = _useState4[0],
    setTickerData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var connectWebSocket = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var socket = new WebSocket("wss://stream.binance.com:9443/stream?streams=");
    socket.onopen = function () {
      console.log("Connected to Binance Stream WebSocket");
      setConnected(true);
      var message = {
        id: Date.now().toString(),
        method: "SUBSCRIBE",
        params: _toConsumableArray(symbols.map(function (symbol) {
          return "".concat(symbol.toLowerCase(), "usdt@ticker");
        }))
      };
      socket.send(JSON.stringify(message));
    };
    socket.onmessage = function (event) {
      var response = JSON.parse(event.data);
      if (response && response.data) {
        var data = response.data;
        // Symbol is in the format "BTCUSDT", remove "USDT" to get the original symbol
        var originalSymbol = data.s.replace("USDT", "");
        setTickerData(function (prevData) {
          return _objectSpread(_objectSpread({}, prevData), {}, _defineProperty({}, originalSymbol, {
            symbol: originalSymbol.toLowerCase(),
            current_price: parseFloat(data.c) * defaultCurrencyDollarRate,
            total_volume: parseFloat(data.v),
            high_24h: parseFloat(data.h) * defaultCurrencyDollarRate,
            low_24h: parseFloat(data.l) * defaultCurrencyDollarRate,
            price_change_24h: parseFloat(data.p) * defaultCurrencyDollarRate,
            price_change_percentage_24h: parseFloat(data.P),
            last_updated: new Date(data.E).toLocaleString()
          }));
        });
      }
    };
    socket.onclose = function () {
      console.log("Disconnected from Binance WebSocket");
      setConnected(false);
    };
    socket.onerror = function (err) {
      console.error("WebSocket error:", err);
      setError("Error connecting to Binance WebSocket");
    };
    return function () {
      socket.close();
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var cleanup = connectWebSocket();
    return cleanup;
  }, [connectWebSocket]);
  return {
    connected: connected,
    data: tickerData,
    error: error
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBinanceStreamTickerWebSocket);

/***/ }),

/***/ "./react/helper-components/WebHooks/BinanceTicker.tsx":
/*!************************************************************!*\
  !*** ./react/helper-components/WebHooks/BinanceTicker.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

function useBinanceTickerWebSocket(symbols) {
  var defaultCurrencyDollarRate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    connected = _useState2[0],
    setConnected = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    tickerData = _useState4[0],
    setTickerData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var connectWebSocket = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var socket = new WebSocket("wss://ws-api.binance.com:443/ws-api/v3");
    socket.onopen = function () {
      console.log("Connected to Binance WebSocket");
      setConnected(true);
      symbols.forEach(function (symbol) {
        var message = {
          id: Date.now().toString(),
          method: "ticker.24hr",
          params: {
            symbol: "".concat(symbol.toUpperCase(), "USDT")
          }
        };
        socket.send(JSON.stringify(message));
      });
    };
    socket.onmessage = function (event) {
      var response = JSON.parse(event.data);
      if (response.result) {
        var data = response.result;
        var originalSymbol = data.symbol.replace("USDT", "");
        setTickerData(function (prevData) {
          return _objectSpread(_objectSpread({}, prevData), {}, _defineProperty({}, originalSymbol, {
            symbol: originalSymbol.toLowerCase(),
            current_price: parseFloat(data.lastPrice) * defaultCurrencyDollarRate,
            total_volume: parseFloat(data.volume),
            high_24h: parseFloat(data.highPrice) * defaultCurrencyDollarRate,
            low_24h: parseFloat(data.lowPrice) * defaultCurrencyDollarRate,
            price_change_24h: parseFloat(data.priceChange) * defaultCurrencyDollarRate,
            price_change_percentage_24h: parseFloat(data.priceChangePercent),
            last_updated: new Date().toLocaleString()
          }));
        });
      }
    };
    socket.onclose = function () {
      console.log("Disconnected from Binance WebSocket");
      setConnected(false);
    };
    socket.onerror = function (err) {
      console.error("WebSocket error:", err);
      setError("Error connecting to Binance WebSocket");
    };
    return function () {
      socket.close();
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var cleanup = connectWebSocket();
    return cleanup;
  }, [connectWebSocket]);
  return {
    connected: connected,
    data: tickerData,
    error: error
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBinanceTickerWebSocket);

/***/ }),

/***/ "./react/helper-components/WebHooks/BitMEXTicker.tsx":
/*!***********************************************************!*\
  !*** ./react/helper-components/WebHooks/BitMEXTicker.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

function useBitMEXTickerWebSocket(symbols) {
  var defaultCurrencyDollarRate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    connected = _useState2[0],
    setConnected = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    tickerData = _useState4[0],
    setTickerData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var connectWebSocket = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var socket = new WebSocket("wss://ws.bitmex.com/realtime");
    socket.onopen = function () {
      console.log("Connected to BitMEX WebSocket");
      setConnected(true);
      var subscribeMessage = {
        op: "subscribe",
        args: symbols.map(function (symbol) {
          return "instrument:".concat(symbol.toUpperCase(), "USD");
        })
      };
      socket.send(JSON.stringify(subscribeMessage));
    };
    socket.onmessage = function (event) {
      try {
        var response = JSON.parse(event.data);
        if (response.table === "instrument" && response.action === "update") {
          response.data.forEach(function (instrumentData) {
            if (instrumentData.symbol) {
              var originalSymbol = instrumentData.symbol.replace("USD", "");
              setTickerData(function (prevData) {
                var _instrumentData$lastP, _instrumentData$openV, _instrumentData$lastP2, _instrumentData$fairP, _instrumentData$times;
                return _objectSpread(_objectSpread({}, prevData), {}, _defineProperty({}, originalSymbol, {
                  symbol: originalSymbol.toLowerCase(),
                  current_price: ((_instrumentData$lastP = instrumentData.lastPriceProtected) !== null && _instrumentData$lastP !== void 0 ? _instrumentData$lastP : 0) * defaultCurrencyDollarRate,
                  total_volume: (_instrumentData$openV = instrumentData.openValue) !== null && _instrumentData$openV !== void 0 ? _instrumentData$openV : 0,
                  high_24h: ((_instrumentData$lastP2 = instrumentData.lastPriceProtected) !== null && _instrumentData$lastP2 !== void 0 ? _instrumentData$lastP2 : 0) * defaultCurrencyDollarRate,
                  low_24h: ((_instrumentData$fairP = instrumentData.fairPrice) !== null && _instrumentData$fairP !== void 0 ? _instrumentData$fairP : 0) * defaultCurrencyDollarRate,
                  price_change_24h: 0,
                  // Not provided in the response
                  price_change_percentage_24h: 0,
                  // Not provided in the response
                  last_updated: (_instrumentData$times = instrumentData.timestamp) !== null && _instrumentData$times !== void 0 ? _instrumentData$times : new Date().toLocaleString()
                }));
              });
            }
          });
        }
      } catch (err) {
        console.error("Error parsing WebSocket message:", err);
        setError("Error parsing WebSocket message");
      }
    };
    socket.onclose = function () {
      console.log("Disconnected from BitMEX WebSocket");
      setConnected(false);
    };
    socket.onerror = function (err) {
      console.error("WebSocket error:", err);
      setError("Error connecting to BitMEX WebSocket");
    };
    return function () {
      socket.close();
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var cleanup = connectWebSocket();
    return cleanup;
  }, [connectWebSocket]);
  return {
    connected: connected,
    data: tickerData,
    error: error
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBitMEXTickerWebSocket);

/***/ }),

/***/ "./react/helper-components/WebHooks/CoinbasePrimeTicker.tsx":
/*!******************************************************************!*\
  !*** ./react/helper-components/WebHooks/CoinbasePrimeTicker.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

function useCoinbasePrimeTickerWebSocket(symbols) {
  var defaultCurrencyDollarRate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var accessKey = arguments.length > 2 ? arguments[2] : undefined;
  var apiKeyId = arguments.length > 3 ? arguments[3] : undefined;
  var passphrase = arguments.length > 4 ? arguments[4] : undefined;
  var portfolioId = arguments.length > 5 ? arguments[5] : undefined;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    connected = _useState2[0],
    setConnected = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    tickerData = _useState4[0],
    setTickerData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var connectWebSocket = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var socket = new WebSocket("wss://ws-feed.prime.coinbase.com");
    socket.onopen = function () {
      console.log("Connected to Coinbase Prime WebSocket");
      setConnected(true);
      var subscribeMessage = {
        type: "subscribe",
        channel: "ticker",
        access_key: accessKey,
        api_key_id: apiKeyId,
        timestamp: new Date().toISOString(),
        passphrase: passphrase,
        signature: "SIGNATURE",
        // Note: Implement proper signature generation
        portfolio_id: portfolioId,
        product_ids: symbols.map(function (symbol) {
          return "".concat(symbol.toUpperCase(), "-USD");
        })
      };
      socket.send(JSON.stringify(subscribeMessage));
    };
    socket.onmessage = function (event) {
      try {
        var response = JSON.parse(event.data);
        if (response.channel === "ticker" && response.events && response.events.length > 0) {
          response.events.forEach(function (tickerEvent) {
            if (tickerEvent.type === "ticker") {
              var originalSymbol = tickerEvent.product_id.replace("-USD", "");
              setTickerData(function (prevData) {
                return _objectSpread(_objectSpread({}, prevData), {}, _defineProperty({}, originalSymbol, {
                  id: originalSymbol.toLowerCase(),
                  symbol: originalSymbol,
                  current_price: parseFloat(tickerEvent.price) * defaultCurrencyDollarRate,
                  total_volume: parseFloat(tickerEvent.volume_24h),
                  high_24h: 0,
                  // Placeholder, adjust as needed
                  low_24h: 0,
                  // Placeholder, adjust as needed
                  price_change_24h: parseFloat(tickerEvent.price_change_24h) * defaultCurrencyDollarRate,
                  price_change_percentage_24h: parseFloat(tickerEvent.price_change_percent_24h),
                  last_updated: new Date(tickerEvent.time).toLocaleString()
                }));
              });
            }
          });
        }
      } catch (err) {
        console.error("Error parsing WebSocket message:", err);
        setError("Error parsing WebSocket message");
      }
    };
    socket.onclose = function () {
      console.log("Disconnected from Coinbase Prime WebSocket");
      setConnected(false);
    };
    socket.onerror = function (err) {
      console.error("WebSocket error:", err);
      setError("Error connecting to Coinbase Prime WebSocket");
    };
    return function () {
      socket.close();
    };
  }, [symbols, defaultCurrencyDollarRate, accessKey, apiKeyId, passphrase, portfolioId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var cleanup = connectWebSocket();
    return cleanup;
  }, [connectWebSocket]);
  return {
    connected: connected,
    data: tickerData,
    error: error
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCoinbasePrimeTickerWebSocket);

/***/ }),

/***/ "./react/helper-components/WebHooks/KrakenTicker.tsx":
/*!***********************************************************!*\
  !*** ./react/helper-components/WebHooks/KrakenTicker.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

function useKrakenTickerWebSocket(symbols) {
  var defaultCurrencyDollarRate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  console.log("KrakenTicker", symbols);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    connected = _useState2[0],
    setConnected = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    tickerData = _useState4[0],
    setTickerData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var connectWebSocket = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var socket = new WebSocket("wss://ws.kraken.com/v2");
    socket.onopen = function () {
      console.log("Connected to Kraken WebSocket");
      setConnected(true);
      var subscribeMessage = {
        method: "subscribe",
        params: {
          channel: "ticker",
          snapshot: true,
          symbol: symbols.map(function (symbol) {
            return "".concat(symbol.toUpperCase(), "/USD");
          })
        },
        req_id: Date.now()
      };
      socket.send(JSON.stringify(subscribeMessage));
    };
    socket.onmessage = function (event) {
      try {
        var response = JSON.parse(event.data);
        console.log("Kraken WebSocket message:", response);
        if (response.channel === "ticker" && response.data && response.data.length > 0) {
          response.data.forEach(function (tickerUpdate) {
            var originalSymbol = tickerUpdate.symbol.split("/")[0];
            setTickerData(function (prevData) {
              return _objectSpread(_objectSpread({}, prevData), {}, _defineProperty({}, originalSymbol, {
                symbol: originalSymbol.toLowerCase(),
                current_price: tickerUpdate.last * defaultCurrencyDollarRate,
                total_volume: tickerUpdate.volume,
                high_24h: tickerUpdate.high * defaultCurrencyDollarRate,
                low_24h: tickerUpdate.low * defaultCurrencyDollarRate,
                price_change_24h: tickerUpdate.change * defaultCurrencyDollarRate,
                price_change_percentage_24h: tickerUpdate.change_pct,
                last_updated: new Date().toLocaleString()
              }));
            });
          });
        }
      } catch (err) {
        console.error("Error parsing WebSocket message:", err);
      }
    };
    socket.onclose = function () {
      console.log("Disconnected from Kraken WebSocket");
      setConnected(false);
    };
    socket.onerror = function (err) {
      console.error("WebSocket error:", err);
      setError("Error connecting to Kraken WebSocket");
    };
    return function () {
      socket.close();
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var cleanup = connectWebSocket();
    return cleanup;
  }, [connectWebSocket]);
  return {
    connected: connected,
    data: tickerData,
    error: error
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useKrakenTickerWebSocket);

/***/ }),

/***/ "./react/helper-components/WebHooks/index.tsx":
/*!****************************************************!*\
  !*** ./react/helper-components/WebHooks/index.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useBinanceStreamTickerWebSocket: () => (/* reexport safe */ _BinanceStreamTicker__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   useBinanceTickerWebSocket: () => (/* reexport safe */ _BinanceTicker__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   useBitMEXTickerWebSocket: () => (/* reexport safe */ _BitMEXTicker__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   useCoinbasePrimeTickerWebSocket: () => (/* reexport safe */ _CoinbasePrimeTicker__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   useKrakenTickerWebSocket: () => (/* reexport safe */ _KrakenTicker__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _BinanceStreamTicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BinanceStreamTicker */ "./react/helper-components/WebHooks/BinanceStreamTicker.tsx");
/* harmony import */ var _BinanceTicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BinanceTicker */ "./react/helper-components/WebHooks/BinanceTicker.tsx");
/* harmony import */ var _BitMEXTicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BitMEXTicker */ "./react/helper-components/WebHooks/BitMEXTicker.tsx");
/* harmony import */ var _CoinbasePrimeTicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CoinbasePrimeTicker */ "./react/helper-components/WebHooks/CoinbasePrimeTicker.tsx");
/* harmony import */ var _KrakenTicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KrakenTicker */ "./react/helper-components/WebHooks/KrakenTicker.tsx");







/***/ }),

/***/ "./react/helper-components/react-wrapper.tsx":
/*!***************************************************!*\
  !*** ./react/helper-components/react-wrapper.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReactRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



// Retrieve or initialize global data

var ucwpReactData = window.ucwpReactData || {};
console.log(ucwpReactData);

// Store references to rendered roots
window.ucwpRenderedRoots = {};
function ReactRender(Children) {
  // Get the DOM node based on the react_id from ucwpReactData
  var domNode = document.getElementById(ucwpReactData.react_id);
  // Check if a root already exists for this react_id, or create a new one
  var root = window.ucwpRenderedRoots[ucwpReactData.react_id] || null;
  if (domNode && !root) {
    root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(domNode);
    window.ucwpRenderedRoots[ucwpReactData.react_id] = root;
  }

  // Render the React component
  if (root) {
    var prop = _objectSpread({}, ucwpReactData);
    root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Children, prop));
    console.log('React component rendered');
  }
}

/***/ }),

/***/ "./react/widgets/multi-currencies-tab/index.tsx":
/*!******************************************************!*\
  !*** ./react/widgets/multi-currencies-tab/index.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_components_react_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper-components/react-wrapper */ "./react/helper-components/react-wrapper.tsx");
/* harmony import */ var _styles_sass_multi_currencies_tab_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/sass/multi-currencies-tab.scss */ "./assets/styles/sass/multi-currencies-tab.scss");
/* harmony import */ var react_helper_components_PricePercentage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/helper-components/PricePercentage */ "./react/helper-components/PricePercentage.tsx");
/* harmony import */ var react_helper_components_WebHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/helper-components/WebHooks */ "./react/helper-components/WebHooks/index.tsx");
/* harmony import */ var react_helper_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/helper/helper */ "./react/helper/helper.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






(0,_helper_components_react_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_ref) {
  var _default_currencies_r, _settings$default_cur, _ref2, _settings$currency_sy, _settings$usd_convers, _settings$count;
  var coins = _ref.coins,
    settings = _ref.settings,
    default_currencies_rate = _ref.default_currencies_rate,
    default_currencies_symbol = _ref.default_currencies_symbol;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(coins !== null && coins !== void 0 ? coins : []),
    _useState2 = _slicedToArray(_useState, 2),
    coinList = _useState2[0],
    setCoinList = _useState2[1];
  // State for current selected currency and its rate
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((settings === null || settings === void 0 ? void 0 : settings.default_currency) || "USD"),
    _useState4 = _slicedToArray(_useState3, 2),
    currentCurrency = _useState4[0],
    setCurrentCurrency = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((_default_currencies_r = default_currencies_rate === null || default_currencies_rate === void 0 ? void 0 : default_currencies_rate[(_settings$default_cur = settings === null || settings === void 0 ? void 0 : settings.default_currency) !== null && _settings$default_cur !== void 0 ? _settings$default_cur : "usd"]) !== null && _default_currencies_r !== void 0 ? _default_currencies_r : 1),
    _useState6 = _slicedToArray(_useState5, 2),
    currentRate = _useState6[0],
    setCurrentRate = _useState6[1];

  // symbol 
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((_ref2 = (_settings$currency_sy = settings === null || settings === void 0 ? void 0 : settings.currency_symbol) !== null && _settings$currency_sy !== void 0 ? _settings$currency_sy : "$") !== null && _ref2 !== void 0 ? _ref2 : default_currencies_symbol[currentCurrency.toLowerCase()]),
    _useState8 = _slicedToArray(_useState7, 2),
    symbol = _useState8[0],
    setSymbol = _useState8[1];
  var _useBinanceStreamTick = (0,react_helper_components_WebHooks__WEBPACK_IMPORTED_MODULE_4__.useBinanceStreamTickerWebSocket)(coinList === null || coinList === void 0 ? void 0 : coinList.map(function (coin) {
      return coin.symbol;
    }).slice(0, settings.count), (_settings$usd_convers = settings === null || settings === void 0 ? void 0 : settings.usd_conversion_rate) !== null && _settings$usd_convers !== void 0 ? _settings$usd_convers : 1),
    connected = _useBinanceStreamTick.connected,
    data = _useBinanceStreamTick.data,
    error = _useBinanceStreamTick.error;

  // Update currentRate when currentCurrency changes
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _ref3, _default_currencies_r2, _ref4, _default_currencies_s;
    var newRate = (_ref3 = (_default_currencies_r2 = default_currencies_rate[currentCurrency.toLowerCase()]) !== null && _default_currencies_r2 !== void 0 ? _default_currencies_r2 : default_currencies_rate[currentCurrency.toUpperCase()]) !== null && _ref3 !== void 0 ? _ref3 : 1;
    setCurrentRate(newRate);
    setSymbol((_ref4 = (_default_currencies_s = default_currencies_symbol[currentCurrency.toLowerCase()]) !== null && _default_currencies_s !== void 0 ? _default_currencies_s : default_currencies_symbol[currentCurrency.toUpperCase()]) !== null && _ref4 !== void 0 ? _ref4 : "$");
  }, [currentCurrency, default_currencies_rate]);
  // currencies array and remove duplicates, null, and undefined values
  var currencies = [settings.default_currency].concat(_toConsumableArray(Object.keys(default_currencies_rate))).filter(function (value, index, self) {
    return value !== undefined && self.indexOf(value) === index;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ucwp-multi-currencies-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ucwp-multi-currencies-flat-holder"
  }, currencies.map(function (currency) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "ucwp-mc-fh-button ".concat(currency === currentCurrency ? "ucwp-mc-fh-button-active" : ""),
      key: currency,
      onClick: function onClick() {
        return setCurrentCurrency(currency);
      }
    }, currency === null || currency === void 0 ? void 0 : currency.toUpperCase(), " ");
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ucwp-mct-table-main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "ucwp-mct-main-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, coinList.slice(0, (_settings$count = settings.count) !== null && _settings$count !== void 0 ? _settings$count : 10).map(function (_coin, index) {
    var coin = _objectSpread(_objectSpread({}, _coin), data[_coin.symbol.toUpperCase()]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: index,
      "data-table-row-coin": "".concat(coin.name, "---").concat(coin.symbol)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "ucwp-mct-rank"
    }, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "ucwp-mct-name"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ucwp-mct-name-info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ucwp-mct-name-info-image"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: coin.image,
      alt: coin.name
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ucwp-mct-name-info-name"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, coin.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ucwp-mct-name-sybmol"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, coin.symbol))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "ucwp-mct-price"
    }, symbol, (0,react_helper_helper__WEBPACK_IMPORTED_MODULE_5__.abbreviateNumber)(coin.current_price * currentRate, 10e5, true)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "ucwp-mct-change"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helper_components_PricePercentage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      percentage: coin.price_change_percentage_24h
    })));
  })))));
});

/***/ }),

/***/ "./assets/styles/sass/multi-currencies-tab.scss":
/*!******************************************************!*\
  !*** ./assets/styles/sass/multi-currencies-tab.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"widgets/multi-currencies-tab": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkultimate_crypto_widget"] = globalThis["webpackChunkultimate_crypto_widget"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./react/widgets/multi-currencies-tab/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map