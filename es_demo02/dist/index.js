/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var a = exports.a = 1;
var b = exports.b = function b(a, _b) {
    console.log(a + _b);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var asyncAction = function () {
    function asyncAction() {
        _classCallCheck(this, asyncAction);
    }

    _createClass(asyncAction, [{
        key: 'sayHello',
        value: function sayHello() {
            var _this = this;

            this.hello().then(function () {
                _this.world();
            });
        }
    }, {
        key: 'world',
        value: function world() {
            setTimeout(function () {
                console.log('world!');
            }, 1000);
        }
    }, {
        key: 'hello',
        value: function hello() {
            return new Promise(function (res, rej) {
                setTimeout(function () {
                    console.log('hello');
                    res();
                }, 1000);
            });
        }
    }]);

    return asyncAction;
}();

new asyncAction().sayHello();
exports.default = asyncAction;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module = __webpack_require__(0);

var _module2 = __webpack_require__(1);

var _module3 = _interopRequireDefault(_module2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var fn1 = () => "test function()";
//
// var fn2 = (a, b) => a + b;
//
// console.log(fn2(1, 5));
//
// var fn4 = (a, b) => {
//     var m = a + 2;
//     return m * b;
// };
//
// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getMessage() {
//         console.log(this.name + " is " + this.age + " years old!");
//     }
//     static showInfo() {
//         console.log(this.name + " is show info!");
//     }
// }
//
// class Cat extends Animal {
//     constructor(name, age, color) {
//         super(name, age);
//         this.color = color;
//     }
//     getName() {
//         console.log('cat color is ' + this.color);
//     }
// }

// var cat = new Animal("SanZhang", 18);
// cat.getMessage();

// var catMan = new Cat("joms", 90, "red");
// catMan.getName();
// catMan.getMessage();


// template string

// var name = "cat";
// var age = "11";
//
// var str = `${name} is ${age} years old!`;
// console.log(str);

console.log((0, _module.b)(1, 2));
new _module3.default().sayHello();

/***/ })
/******/ ]);