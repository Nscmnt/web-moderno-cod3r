/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var __webpack_modules__={"./src/assets/css/style.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-exercicios/./src/assets/css/style.css?")},"./src/assets/scss/index.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-exercicios/./src/assets/scss/index.scss?")},"./src/assets/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/assets/css/style.css");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/index.scss */ "./src/assets/scss/index.scss");\n\n\n\n\n//# sourceURL=webpack://webpack-exercicios/./src/assets/index.js?')},"./src/js/Pessoa.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Pessoa)\n/* harmony export */ });\nconst moduloA = __webpack_require__(/*! ../modulos/moduloA */ "./src/modulos/moduloA.js");\nclass Pessoa {\n  cumprimentar() {\n    return "Bom dia";\n  }\n}\n\n\n//# sourceURL=webpack://webpack-exercicios/./src/js/Pessoa.js?')},"./src/modulos/moduloA.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{eval('const moduloB = __webpack_require__(/*! ./moduloB */ "./src/modulos/moduloB.js");\n\nconsole.log(moduloB.saudacao());\n\n\n//# sourceURL=webpack://webpack-exercicios/./src/modulos/moduloA.js?')},"./src/modulos/moduloB.js":module=>{eval('module.exports = {\n  saudacao() {\n    return "olá eu sou o modulo B";\n  },\n};\n\n\n//# sourceURL=webpack://webpack-exercicios/./src/modulos/moduloB.js?')},"./src/principal.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Pessoa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Pessoa */ "./src/js/Pessoa.js");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets */ "./src/assets/index.js");\n\n\n\nconst atendente = new _js_Pessoa__WEBPACK_IMPORTED_MODULE_0__.default();\n\nconsole.log(atendente.cumprimentar());\n\n\n//# sourceURL=webpack://webpack-exercicios/./src/principal.js?')}},__webpack_module_cache__={};function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var s=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_](s,s.exports,__webpack_require__),s.exports}__webpack_require__.d=(_,e)=>{for(var s in e)__webpack_require__.o(e,s)&&!__webpack_require__.o(_,s)&&Object.defineProperty(_,s,{enumerable:!0,get:e[s]})},__webpack_require__.o=(_,e)=>Object.prototype.hasOwnProperty.call(_,e),__webpack_require__.r=_=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/principal.js")})();