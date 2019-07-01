webpackJsonp([0],{

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(237);

var _Header2 = _interopRequireDefault(_Header);

var _AllBills = __webpack_require__(236);

var _AllBills2 = _interopRequireDefault(_AllBills);

var _Menu = __webpack_require__(238);

var _Menu2 = _interopRequireDefault(_Menu);

var _AddBill = __webpack_require__(235);

var _AddBill2 = _interopRequireDefault(_AddBill);

var _immutabilityHelper = __webpack_require__(457);

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BillsApp = function (_Component) {
  _inherits(BillsApp, _Component);

  function BillsApp() {
    _classCallCheck(this, BillsApp);

    var _this = _possibleConstructorReturn(this, (BillsApp.__proto__ || Object.getPrototypeOf(BillsApp)).call(this));

    _this.clickeAddBillBtn = function () {
      _this.setState({
        addBillOpen: !_this.state.addBillOpen
      });
    };

    _this.saveBill = function (bill) {
      var newBills = (0, _immutabilityHelper2.default)(_this.state.AllBills, {
        $push: [bill]
      });
      _this.setState({
        allBills: newBills
      }, function () {
        console.log(_this.state);
      });
    };

    _this.state = {
      addBillOpen: true,
      AllBills: []
    };
    return _this;
  }

  _createClass(BillsApp, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "BillsApp" },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_AllBills2.default, null),
        _react2.default.createElement(_AddBill2.default, {
          addBillOpen: this.state.addBillOpen,
          saveBill: this.saveBill
        }),
        _react2.default.createElement("div", { className: "content-bg" }),
        _react2.default.createElement(_Menu2.default, { clickeAddBillBtn: this.clickeAddBillBtn })
      );
    }
  }]);

  return BillsApp;
}(_react.Component);

exports.default = BillsApp;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddBill = function (_Component) {
  _inherits(AddBill, _Component);

  function AddBill() {
    _classCallCheck(this, AddBill);

    var _this = _possibleConstructorReturn(this, (AddBill.__proto__ || Object.getPrototypeOf(AddBill)).call(this));

    _this.inputChange = function (event) {
      var name = event.target.name;
      var value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
      _this.setState(_defineProperty({}, name, value)
      //  () => {
      //     console.log(this.state);
      //   }
      );
    };

    _this.handleSubmit = function (event) {
      event.preventDefault();
      console.log(_this.state);
      _this.props.saveBill(_this.state);
    };

    _this.state = {
      business_name: "",
      price: 0
    };
    return _this;
  }

  _createClass(AddBill, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        {
          id: "AddBill",
          className: "" + (this.props.addBillOpen === true ? "active" : "")
        },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "h2",
            null,
            "Add a bill"
          ),
          _react2.default.createElement(
            "form",
            { onSubmit: this.handleSubmit },
            _react2.default.createElement(
              "div",
              { className: "form-group" },
              _react2.default.createElement(
                "lable",
                { htmlFor: "business_name" },
                "Business Name"
              ),
              _react2.default.createElement("input", {
                type: "text",
                id: "business_name",
                name: "business_name",
                onChange: this.inputChange,
                value: this.state.business_name
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group" },
              _react2.default.createElement(
                "lable",
                { htmlFor: "price" },
                "Price"
              ),
              _react2.default.createElement("input", {
                type: "text",
                id: "price",
                name: "price",
                onChange: this.inputChange,
                value: this.state.price
              })
            ),
            _react2.default.createElement(
              "button",
              { type: "submit" },
              "Save"
            )
          )
        )
      );
    }
  }]);

  return AddBill;
}(_react.Component);

exports.default = AddBill;

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AllBills = function (_Component) {
  _inherits(AllBills, _Component);

  function AllBills() {
    _classCallCheck(this, AllBills);

    var _this = _possibleConstructorReturn(this, (AllBills.__proto__ || Object.getPrototypeOf(AllBills)).call(this));

    _this.showAllBills = function (bill) {
      var bills = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
      return bills.map(function (i) {
        return _react2.default.createElement(
          "li",
          { className: "bill", key: i },
          _react2.default.createElement(
            "div",
            { className: "company" },
            _react2.default.createElement(
              "div",
              { className: "logo" },
              " ",
              _react2.default.createElement("img", {
                src: "https://cdn1.spiegel.de/images/image-1392206-860_poster_16x9-khrb-1392206.jpg",
                alt: ""
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "title" },
              "Spotify"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "price" },
            "$-25.99"
          )
        );
      });
    };

    _this.state = {};
    return _this;
  }

  _createClass(AllBills, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "AllBills" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "total-bills" },
            _react2.default.createElement(
              "div",
              { className: "text" },
              "Total Amount:"
            ),
            _react2.default.createElement(
              "div",
              { className: "number" },
              "$874"
            )
          ),
          _react2.default.createElement(
            "ul",
            { className: "bills-list" },
            this.showAllBills()
          )
        )
      );
    }
  }]);

  return AllBills;
}(_react.Component);

exports.default = AllBills;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "header",
        null,
        _react2.default.createElement(
          "h2",
          null,
          "Bills App"
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "nav",
        { id: "floating-menu" },
        _react2.default.createElement(
          "div",
          { className: "link" },
          _react2.default.createElement(
            "div",
            { className: "icon" },
            _react2.default.createElement("i", { className: "fab fa-cc-mastercard" })
          ),
          _react2.default.createElement(
            "div",
            { className: "text" },
            "text"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "link" },
          _react2.default.createElement(
            "div",
            { className: "icon" },
            _react2.default.createElement("i", { className: "fab fa-cc-mastercard" })
          ),
          _react2.default.createElement(
            "div",
            { className: "text" },
            "save"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "link" },
          _react2.default.createElement(
            "div",
            { className: "icon" },
            _react2.default.createElement("i", { className: "fab fa-cc-mastercard" })
          ),
          _react2.default.createElement(
            "div",
            { className: "text" },
            "transfer"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "link" },
          _react2.default.createElement(
            "div",
            { className: "icon" },
            _react2.default.createElement("i", { className: "fab fa-cc-mastercard" })
          ),
          _react2.default.createElement(
            "div",
            { className: "text" },
            "settings"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "add-button", onClick: this.props.clickeAddBillBtn },
          _react2.default.createElement(
            "div",
            { className: "icon-plus" },
            "+"
          )
        )
      );
    }
  }]);

  return Menu;
}(_react.Component);

exports.default = Menu;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(42);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _BillsApp = __webpack_require__(231);

var _BillsApp2 = _interopRequireDefault(_BillsApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: "Joe"
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_BillsApp2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[239]);