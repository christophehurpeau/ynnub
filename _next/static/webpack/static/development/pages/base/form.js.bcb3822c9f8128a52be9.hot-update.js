webpackHotUpdate("static/development/pages/base/form.js",{

/***/ "../ynnub/components/ListItem.tsx":
/*!****************************************!*\
  !*** ../ynnub/components/ListItem.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _list_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.global.scss */ "../ynnub/components/list.global.scss");
/* harmony import */ var _list_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_list_global_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_wrapWithClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/wrapWithClassName */ "../ynnub/utils/wrapWithClassName.tsx");
var _jsxFileName = "/Users/chris/Work/utils/ynnub/packages/ynnub/components/ListItem.tsx";

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var href = _ref.href,
      _ref$as = _ref.as,
      As = _ref$as === void 0 ? href ? 'a' : 'li' : _ref$as,
      className = _ref.className,
      startDetail = _ref.startDetail,
      endDetail = _ref.endDetail,
      text = _ref.text,
      secondaryText = _ref.secondaryText,
      children = _ref.children,
      otherProps = _objectWithoutPropertiesLoose(_ref, ["href", "as", "className", "startDetail", "endDetail", "text", "secondaryText", "children"]);

  var item = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(As, Object.assign({
    href: href,
    className: "mdc-list-item " + className
  }, otherProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), Object(_utils_wrapWithClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(startDetail, 'mdc-list-item__start-detail'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mdc-list-item__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, text, secondaryText && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mdc-list-item__secondary-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, secondaryText), children), Object(_utils_wrapWithClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(endDetail, 'mdc-list-item__end-detail'));

  if (As !== 'li') {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, item);
  }

  return item;
});

/***/ })

})
//# sourceMappingURL=form.js.bcb3822c9f8128a52be9.hot-update.js.map