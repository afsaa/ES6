/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _destructObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./destructObjects */ \"./src/destructObjects.js\");\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ \"./src/classes.js\");\n // This way of import is for multiple things.\n\n // This way of import is used when we use export default.\n\nvar person = new _classes__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Brandon\", 23, \"brand@gmail.com\");\nvar title = _destructObjects__WEBPACK_IMPORTED_MODULE_0__[\"song\"].title,\n    band = _destructObjects__WEBPACK_IMPORTED_MODULE_0__[\"song\"].band;\nObject(_destructObjects__WEBPACK_IMPORTED_MODULE_0__[\"getSongInfo\"])({\n  title: title,\n  band: band\n});\nperson.showGreeting(\"Hola mundo\");\ndocument.write(person.showInfo());\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return User; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// Classes and inheritance are amply used on current frameworks.\nvar User =\n/*#__PURE__*/\nfunction () {\n  //Exporting by default can only be used to export 1 thing. Often is used to export classes.\n  function User(name, age, email) {\n    _classCallCheck(this, User);\n\n    this.name = name;\n    this.age = age;\n    this.email = email;\n  }\n\n  _createClass(User, [{\n    key: \"showGreeting\",\n    value: function showGreeting(greeting) {\n      console.log(greeting);\n    }\n  }, {\n    key: \"showInfo\",\n    value: function showInfo() {\n      return \"\\n            <b>Name:</b>  \".concat(this.name, \"<br />\\n            <b>Age:</b>  \").concat(this.age, \"<br />\\n            <b>Email:</b>  \").concat(this.email, \"<br />\\n            <hr />\\n        \");\n    }\n  }]);\n\n  return User;\n}();\n/*\r\nclass Student extends User {\r\n  constructor(name, age, email, career) {\r\n    super(name, age, email);\r\n    this.career = career;\r\n  }\r\n  \r\n  showInfo() {\r\n    return `\r\n            <b>Name:</b>  ${this.name}<br />\r\n            <b>Age:</b>  ${this.age}<br />\r\n            <b>Email:</b>  ${this.email}<br />\r\n            <b>Career:</b>  ${this.career}<br />\r\n            <hr />\r\n        `;\r\n  }\r\n}\r\nconst luis = new User(\"Luis Alberto Gomez\", 20, \"luis@correo.com\");\r\ndocument.write(luis.showInfo());\r\n\r\nconst andres = new Student(\r\n  \"Andres Fernando Saa\",\r\n  24,\r\n  \"andressaa.dev@gmail.com\",\r\n  \"Systems Engineering and Computing\"\r\n);\r\ndocument.write(andres.showInfo());\r\n\r\nconst stiven = new Student(\r\n  \"Stiven Lopez\",\r\n  27,\r\n  \"stivemaster@correo.com\",\r\n  \"Chemical Engineering\"\r\n);\r\ndocument.write(stiven.showInfo());*/\n\n\n\n\n//# sourceURL=webpack:///./src/classes.js?");

/***/ }),

/***/ "./src/destructObjects.js":
/*!********************************!*\
  !*** ./src/destructObjects.js ***!
  \********************************/
/*! exports provided: song, getSongInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"song\", function() { return song; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSongInfo\", function() { return getSongInfo; });\n// Object destructuring is really useful and is being used a lot by js developers and by popular frameworks like React, Angular and Vue.\nvar song = {\n  title: \"One More Light\",\n  band: \"Linkin Park\",\n  genre: \"Alternative\",\n  length: \"3:10\"\n};\nvar title = song.title,\n    band = song.band,\n    genre = song.genre,\n    length = song.length;\n\nvar getSongInfo = function getSongInfo(_ref) {\n  var title = _ref.title,\n      band = _ref.band;\n  return console.log(\"The song \".concat(title, \" was made by \").concat(band));\n};\n\n // This way is to export multiple things.\n\n//# sourceURL=webpack:///./src/destructObjects.js?");

/***/ })

/******/ });