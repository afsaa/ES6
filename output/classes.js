"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Classes and inheritance are amply used on current frameworks. 
var User =
/*#__PURE__*/
function () {
  function User(name, age, email) {
    _classCallCheck(this, User);

    this.name = name;
    this.age = age;
    this.email = email;
  }

  _createClass(User, [{
    key: "showGreeting",
    value: function showGreeting(greeting) {
      console.log(greeting);
    }
  }, {
    key: "showInfo",
    value: function showInfo() {
      return "\n            <b>Name:</b>  ".concat(this.name, "<br />\n            <b>Age:</b>  ").concat(this.age, "<br />\n            <b>Email:</b>  ").concat(this.email, "<br />\n            <hr />\n        ");
    }
  }]);

  return User;
}();

var Student =
/*#__PURE__*/
function (_User) {
  _inherits(Student, _User);

  function Student(name, age, email, career) {
    var _this;

    _classCallCheck(this, Student);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Student).call(this, name, age, email));
    _this.career = career;
    return _this;
  }

  _createClass(Student, [{
    key: "showInfo",
    value: function showInfo() {
      return "\n            <b>Name:</b>  ".concat(this.name, "<br />\n            <b>Age:</b>  ").concat(this.age, "<br />\n            <b>Email:</b>  ").concat(this.email, "<br />\n            <b>Career:</b>  ").concat(this.career, "<br />\n            <hr />\n        ");
    }
  }]);

  return Student;
}(User);

var luis = new User('Luis Alberto Gomez', 20, 'luis@correo.com');
document.write(luis.showInfo());
var andres = new Student('Andres Fernando Saa', 24, 'andressaa.dev@gmail.com', 'Systems Engineering and Computing');
document.write(andres.showInfo());
var stiven = new Student('Stiven Lopez', 27, 'stivemaster@correo.com', 'Chemical Engineering');
document.write(stiven.showInfo());