"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var products =
/*#__PURE__*/
function () {
  function products(obj) {
    _classCallCheck(this, products);

    this.products = obj;
  }

  _createClass(products, [{
    key: "renderProducts",
    value: function renderProducts() {
      var html = '<table border="1">';

      for (var i = 0; i < this.products.length; i++) {
        html += '<tr><td>' + this.products[i].id + '</td>' + '<td>' + this.products[i].name + '</td>' + '<td>' + this.products[i].summary + '</td></tr>';
      }

      html += '</table>';
      return html;
    }
  }]);

  return products;
}();

var _default = products;
exports["default"] = _default;