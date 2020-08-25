"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _app["default"];
  }
});
exports.storage = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/storage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyD9TwC78Vi-ZyAFXnmkRzxyilAXhO8r6Uc",
  authDomain: "antenna-8225f.firebaseapp.com",
  databaseURL: "https://antenna-8225f.firebaseio.com",
  projectId: "antenna-8225f",
  storageBucket: "antenna-8225f.appspot.com",
  messagingSenderId: "776278968733",
  appId: "1:776278968733:web:5b215d8a97aded0f4cc774",
  measurementId: "G-63M4RRKT5G"
};
var storage = _app["default"].storage; // Initialize Firebase

exports.storage = storage;

_app["default"].initializeApp(firebaseConfig);

_app["default"].analytics();