/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/api_carrito.js":
/*!******************************************!*\
  !*** ./src/js/components/api_carrito.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiCarrito: () => (/* binding */ apiCarrito)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var apiCarrito = function apiCarrito() {
  //Abrir carrito desde cta
  var buttonCart = document.querySelector(".img_cart");
  buttonCart.addEventListener('click', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var cart;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return obtenerDatosCarrito();
          case 2:
            cart = _context.sent;
            _context.next = 5;
            return updateCartDrawer(cart);
          case 5:
            _context.next = 7;
            return openCart(e);
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());

  //Agregar producto al carrito

  var btnAddCart = document.querySelectorAll('.button-add-cart');
  btnAddCart.forEach(function (btn) {
    btn.addEventListener('click', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
        var variantId, variantInventory, cart;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              variantId = btn.getAttribute('data-variant2-id');
              variantInventory = btn.getAttribute('data-variant2-inventory');
              _context2.next = 4;
              return addElementCart(variantId);
            case 4:
              _context2.next = 6;
              return obtenerDatosCarrito();
            case 6:
              cart = _context2.sent;
              _context2.next = 9;
              return updateCartDrawer(cart);
            case 9:
              _context2.next = 11;
              return openCart(e);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  });

  //Eliminar producto del carrito
};
function addElementCart(_x3) {
  return _addElementCart.apply(this, arguments);
}
function _addElementCart() {
  _addElementCart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(idAgregar) {
    var formData;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          formData = {
            'id': idAgregar,
            'quantity': 1
          };
          _context3.next = 3;
          return fetch("/cart/add.js", {
            method: "post",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          }).then(function (response) {
            return response.json();
          })["catch"](function (error) {
            console.error('Error:', error);
          });
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _addElementCart.apply(this, arguments);
}
function updateCartDrawer(_x4) {
  return _updateCartDrawer.apply(this, arguments);
}
function _updateCartDrawer() {
  _updateCartDrawer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(cart) {
    var quantityInCart, priceInCart, mainSideCart, items, textEmptyCart;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          console.log(cart);

          //Actualizar cantidad total carrito
          quantityInCart = cart.item_count;
          priceInCart = cart.total_price; //Eliminar texto empty
          mainSideCart = document.querySelector('.main-sideCart');
          while (mainSideCart.firstChild) {
            mainSideCart.removeChild(mainSideCart.firstChild);
          }

          //Actualziar items
          items = cart.items;
          items.forEach(function (item) {
            var contentCardCart = document.createElement('div');
            contentCardCart.classList.add('content-card_cart');

            //Insertar imagen
            var img = document.createElement('img');
            img.src = "".concat(item.featured_image.url);
            img.alt = "".concat(item.featured_image.alt);
            var divImg = document.createElement('div');
            divImg.classList.add('img_product-in-card-cart');
            divImg.appendChild(img);
            contentCardCart.appendChild(divImg);

            //Insertar precio, titulo, titulo variante, cantidad

            var divInfo = document.createElement('div');
            divInfo.classList.add('info_product-in-card-cart');
            var insertPrice = document.createElement('p');
            insertPrice.classList.add('price-item-cart');
            insertPrice.textContent = "$".concat(item.line_price);
            var insertTitle = document.createElement('h3');
            insertTitle.textContent = "".concat(item.product_title);
            var insertVariant = document.createElement('p');
            if (item.variant_title) {
              insertVariant.textContent = "".concat(item.variant_title);
            }
            divInfo.appendChild(insertPrice);
            divInfo.appendChild(insertTitle);
            if (item.variant_title) {
              divInfo.appendChild(insertVariant);
            }

            //Div QTY
            var divQtyandDelete = document.createElement('div');
            divQtyandDelete.classList.add('content_qty-remove');
            var insertQty = document.createElement('div');
            insertQty.classList.add('quantity-item-cart');
            var inputQty = document.createElement('input');
            inputQty.type = "number";
            inputQty.value = "".concat(item.quantity);
            inputQty.min = "0";
            inputQty.readOnly = true;
            var btnMenos = document.createElement('button');
            btnMenos.classList.add('menos');
            btnMenos.textContent = "-";
            btnMenos.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(inputQty.value > 1)) {
                      _context4.next = 7;
                      break;
                    }
                    inputQty.value = parseInt(inputQty.value) - 1;
                    _context4.next = 4;
                    return actualizarCantidad(item.key, inputQty.value);
                  case 4:
                    return _context4.abrupt("return");
                  case 7:
                    return _context4.abrupt("return");
                  case 8:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4);
            })));
            var btnMas = document.createElement('button');
            btnMas.classList.add('mas');
            btnMas.textContent = "+";
            btnMas.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    inputQty.value = parseInt(inputQty.value) + 1;
                    _context5.next = 3;
                    return actualizarCantidad(item.key, inputQty.value);
                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            })));
            insertQty.appendChild(btnMenos);
            insertQty.appendChild(inputQty);
            insertQty.appendChild(btnMas);
            var insertDelete = document.createElement('button');
            insertDelete.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return eliminarProducto(item.key);
                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6);
            })));
            var imgDelete = document.createElement('img');
            imgDelete.src = "https://cdn.shopify.com/s/files/1/0866/2479/6980/files/trash.png?v=1717534976";
            insertDelete.appendChild(imgDelete);
            divQtyandDelete.appendChild(insertQty);
            divQtyandDelete.appendChild(insertDelete);
            divInfo.appendChild(divQtyandDelete);
            contentCardCart.appendChild(divInfo);
            mainSideCart.appendChild(contentCardCart);

            //Creamos el footer

            crearFooter(priceInCart);
          });

          //Agregar texto empty si no hay productos
          if (!(quantityInCart === 0)) {
            _context7.next = 13;
            break;
          }
          textEmptyCart = document.createElement('p');
          textEmptyCart.classList.add('text-empty_cart');
          textEmptyCart.textContent = 'Your cart is empty';
          mainSideCart.appendChild(textEmptyCart);

          //actualizarPrecioTotalCarrito(cart);
          return _context7.abrupt("return");
        case 13:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _updateCartDrawer.apply(this, arguments);
}
function crearFooter(priceInCart) {
  //Eliminar footer
  var checkoutContent = document.querySelector('.checkout');
  if (checkoutContent) {
    while (checkoutContent.firstChild) {
      checkoutContent.removeChild(checkoutContent.firstChild);
    }
  }
  var divSubtotal = document.createElement('div');
  var textSubtotal = document.createElement('p');
  textSubtotal.textContent = "Subtotal";
  var priceSubtotal = document.createElement('p');
  priceSubtotal.classList.add('text_subtotal');
  priceSubtotal.textContent = priceInCart;
  divSubtotal.appendChild(textSubtotal);
  divSubtotal.appendChild(priceSubtotal);
  var btnCheckout = document.createElement('button');
  btnCheckout.type = 'submit';
  btnCheckout.name = 'checkout';
  btnCheckout.textContent = "Checkout";
  checkoutContent.appendChild(divSubtotal);
  checkoutContent.appendChild(btnCheckout);
}
function actualizarPrecioTotalCarrito(cart) {
  var cartPrice = document.querySelector('.text_subtotal');
  var priceInCart = cart.total_price;
  cartPrice.textContent = "$".concat(priceInCart);
}
function actualizarCantidad(_x5, _x6, _x7) {
  return _actualizarCantidad.apply(this, arguments);
}
function _actualizarCantidad() {
  _actualizarCantidad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(idActualizar, qty, currentQty) {
    var data, cart;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          if (!(qty < currentQty)) {
            _context8.next = 12;
            break;
          }
          data = {
            "id": idActualizar,
            "quantity": qty
          };
          _context8.next = 4;
          return fetch('/cart/change.js', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then(function (response) {
            return response.json();
          })["catch"](function (error) {
            console.error(error);
          });
        case 4:
          _context8.next = 6;
          return obtenerDatosCarrito();
        case 6:
          cart = _context8.sent;
          _context8.next = 9;
          return actualizarCantidadTotal(cart);
        case 9:
          actualizarPrecioTotalCarrito(cart);
          _context8.next = 13;
          break;
        case 12:
          console.log('No hoy más stock');
        case 13:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return _actualizarCantidad.apply(this, arguments);
}
function eliminarProducto(_x8) {
  return _eliminarProducto.apply(this, arguments);
}
function _eliminarProducto() {
  _eliminarProducto = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(idModificar) {
    var data, cart;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          data = {
            "id": idModificar,
            "quantity": 0
          };
          _context9.next = 3;
          return fetch('/cart/change.js', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then(function (response) {
            return response.json();
          })["catch"](function (error) {
            console.error(error);
          });
        case 3:
          _context9.next = 5;
          return obtenerDatosCarrito();
        case 5:
          cart = _context9.sent;
          _context9.next = 8;
          return updateCartDrawer(cart);
        case 8:
          _context9.next = 10;
          return actualizarCantidadTotal(cart);
        case 10:
          actualizarPrecioTotalCarrito(cart);
          if (!(cart.item_count === 0)) {
            _context9.next = 14;
            break;
          }
          _context9.next = 14;
          return quitarCTACheckout();
        case 14:
          ;
        case 15:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _eliminarProducto.apply(this, arguments);
}
function openCart(_x9) {
  return _openCart.apply(this, arguments);
}
function _openCart() {
  _openCart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(e) {
    var allBody, contentCart, sideCartView, btnAddUpsell;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          allBody = document.querySelector("body");
          contentCart = document.querySelector(".main-container-cart_hide");
          sideCartView = document.querySelector(".cart-drawer_hide"); //Verificar cuales productos estan ya en el carrito y actualizar cantidad total
          _context11.next = 5;
          return fetch('/cart.js').then(function (response) {
            return response.json();
          }).then(function (cart) {
            eliminarElementoExisteneteEnCarrito(cart);
            actualizarCantidadTotal(cart);
          })["catch"](function (error) {
            console.error('Error al obtener el carrito:', error);
          });
        case 5:
          //Agregar funcionalidad el boton de agregar producto desde upsell
          btnAddUpsell = document.querySelectorAll(".add-cart-from-upsell");
          btnAddUpsell.forEach(function (btn) {
            btn.addEventListener('click', /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(e) {
                var variantId, cart, parent;
                return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                  while (1) switch (_context10.prev = _context10.next) {
                    case 0:
                      variantId = btn.getAttribute('data-id');
                      _context10.next = 3;
                      return addElementCart(variantId);
                    case 3:
                      _context10.next = 5;
                      return obtenerDatosCarrito();
                    case 5:
                      cart = _context10.sent;
                      _context10.next = 8;
                      return updateCartDrawer(cart);
                    case 8:
                      _context10.next = 10;
                      return actualizarCantidadTotal(cart);
                    case 10:
                      parent = btn.parentElement.parentElement;
                      if (parent) {
                        parent.remove();
                      }
                    case 12:
                    case "end":
                      return _context10.stop();
                  }
                }, _callee10);
              }));
              return function (_x11) {
                return _ref6.apply(this, arguments);
              };
            }());
          });
          sideCartView.classList.add('cart-drawer');
          contentCart.classList.add('main-container-cart');
          allBody.style.overflow = 'hidden';
          e.stopPropagation();
        case 11:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return _openCart.apply(this, arguments);
}
function eliminarElementoExisteneteEnCarrito(cart) {
  var items = cart.items;
  var ids = [];
  items.forEach(function (item) {
    ids.push(item.variant_id);
  });
  var elementos = document.querySelectorAll(".content-upsell-carrito");
  elementos.forEach(function (elemento) {
    var idElemento = Number(elemento.getAttribute('data-id'));
    var existeElemento = ids.some(function (id) {
      return id === idElemento;
    });
    if (existeElemento) {
      elemento.remove();
    }
  });
}
function obtenerDatosCarrito() {
  return _obtenerDatosCarrito.apply(this, arguments);
}
function _obtenerDatosCarrito() {
  _obtenerDatosCarrito = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return fetch('/cart.js').then(function (response) {
            return response.json();
          }).then(function (cart) {
            return cart;
          })["catch"](function (error) {
            console.error('Error al obtener el carrito:', error);
          });
        case 2:
          return _context12.abrupt("return", _context12.sent);
        case 3:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return _obtenerDatosCarrito.apply(this, arguments);
}
function actualizarCantidadTotal(_x10) {
  return _actualizarCantidadTotal.apply(this, arguments);
}
function _actualizarCantidadTotal() {
  _actualizarCantidadTotal = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(cart) {
    var total, cartCount, countCart, imageCart, createDiv;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          total = cart.item_count;
          cartCount = document.querySelector(".cart-count");
          countCart = document.querySelector('.count_cart');
          cartCount.textContent = "Your cart (".concat(total, ")");
          if (cart.item_count > 0) {
            if (countCart) {
              countCart.textContent = "".concat(total);
            } else {
              imageCart = document.querySelector('.count_img_cart');
              createDiv = document.createElement('div');
              createDiv.classList.add('count_cart');
              createDiv.textContent = "".concat(total);
              imageCart.appendChild(createDiv);
            }
          } else {
            countCart.remove();
          }
        case 5:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return _actualizarCantidadTotal.apply(this, arguments);
}
function quitarCTACheckout() {
  return _quitarCTACheckout.apply(this, arguments);
} //Agregar al icon carrito la cantidad
//Tomar en cuenta inventario del producto para no poder agregar más si se llega al limite
//Crear templates de paginas nuevos y que el sitio deje de depender de dawn
//Template producto
//Carrousel de productos relacionados
//Predictive search --> sugerencias mientras escribes --> esta es una api
//Scrol infinito flickity
//Subscripcion a la newsletter con shopify, shopify tiene algo que si lo pasas al formulario lo reconoce como suscriber
//node.js como tecnología nueva a aprender
//Api admin shopify se necesita node.js
//Aprender a hacer una api
//Servicio que muestra cuantas personas estan en vivo comprando en la tienda
//Se han creado x o y ordenes 
//Shopify developper
//Hablar sobre experiencia con shopify del lado dev
//Quire todo lo que sea pm
//Bien soft skills
//Agregar hard skills, nombrar tecnologias para rol que estoy buscando CSS, JZ, HTML, SHOPIFY (LIQUID, API, CUSTOMIZER)
//No poner certificaciones, en lugar 
function _quitarCTACheckout() {
  _quitarCTACheckout = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
    var contentCheckout;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          contentCheckout = document.querySelector('.checkout');
          while (contentCheckout.firstChild) {
            contentCheckout.removeChild(contentCheckout.firstChild);
          }
        case 2:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return _quitarCTACheckout.apply(this, arguments);
}

/***/ }),

/***/ "./src/js/components/product-cards.js":
/*!********************************************!*\
  !*** ./src/js/components/product-cards.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   productCard: () => (/* binding */ productCard)
/* harmony export */ });
var seleccionarColor = function seleccionarColor() {
  // agregar todo lo relacionado a la seleccion de color
  // console.log("color")
};
var selectorTalla = function selectorTalla() {
  // agregar todo lo relacionada a la seleccion de tallas
  // console.log("talla")
};
var productCard = function productCard() {
  //En collection, para las porudct card podremos cambiar la imagen y el id dependiendo de la varainte
  var productCards = document.querySelectorAll('.product_card');
  if (productCards) {
    productCards.forEach(function (card) {
      var swatches = card.querySelectorAll('.swatch');
      var mainImage = card.querySelector('.main-image');
      var variantIdInput = card.querySelector('.variant-id');
      var colorSize = card.querySelectorAll('.swatch-size');
      var cartButton = card.querySelector('.buttonCart');
      var selectorSizeCart = card.querySelector('.swatches-size');

      //Oculta las pastillas de talla al iniciar la pagina
      selectorSizeCart.classList.add('swatches-size_hide');
      selectorSizeCart.classList.remove('swatches-size');
      //Funcion para click en add to cart y que muestre las variantes de talla
      cartButton.addEventListener('click', function () {
        cartButton.classList.add('buttonCart_hide');
        cartButton.classList.remove('buttonCart');
        selectorSizeCart.classList.add('swatches-size');
        selectorSizeCart.classList.remove('swatches-size_hide');
      });

      //Función para click fuera de las variantes de talla y que se muestre de nuevo el boton add to cart
      document.addEventListener('click', function (event) {
        if (cartButton.classList.contains('buttonCart_hide') && !cartButton.contains(event.target) && !selectorSizeCart.contains(event.target)) {
          cartButton.classList.add('buttonCart');
          cartButton.classList.remove('buttonCart_hide');
          selectorSizeCart.classList.add('swatches-size_hide');
          selectorSizeCart.classList.remove('swatches-size');
        }
      });

      //Codigo para pintar las variantes
      if (swatches.length > 0) {
        var firstVariant = swatches[0];
        var firstVariantId = firstVariant.getAttribute('data-variant-id');
        var firstImageId = firstVariant.getAttribute('data-variant-image');
        var firstColorId = firstVariant.getAttribute('data-variant-color');

        //Poner las imagenes asociadas al color de la variante seleccionada
        mainImage.setAttribute('src', firstImageId);
        variantIdInput.setAttribute('value', firstVariantId);

        //Ponerle a la primera variante el estilo seleccionado
        var firstStyle = firstVariant.querySelector('.item_color-variant');
        firstStyle.classList.add('item_color-variant_selected');

        //Muestra las variantes de talla que estan ligadas al color seleccionado, les quita su clase ite_size-varaint que esta oculta
        colorSize.forEach(function (element) {
          if (element.getAttribute('data-variant2-color') === firstColorId) {
            var firstStyleSize = element.querySelector('.item_size-variant');
            firstStyleSize.classList.remove('item_size-variant');
            firstStyleSize.classList.add('item_size-variant_selected');
          }
          ;
        });
      }
      ;

      //Click en la variante de talla para add to cart
      colorSize.forEach(function (element) {
        element.addEventListener('click', function () {
          //Poner el id de la variante que se agrega al carrito
          var variantId = element.getAttribute('data-variant2-id');
          variantIdInput.setAttribute('value', variantId);

          //Quitar la clase del elemento seleccionado
          // const previousSelected = card.querySelector('.item_size-variant_decor');
          // if (previousSelected){
          //   previousSelected.classList.remove('item_size-variant_decor');
          // }

          //Agrandar el elemento seleccionado al momento de dar click
          var swatchP = element.querySelector('.item_size-variant_selected');
          swatchP.classList.add('item_size-variant_decor');
        });
      });

      //Click en variante de color 
      swatches.forEach(function (swatch) {
        swatch.addEventListener('click', function () {
          //Obtener atributos de imagen y color
          var variantImage = swatch.getAttribute('data-variant-image');
          var variantColor = swatch.getAttribute('data-variant-color');

          //Fijar imagen segun color seleccionado
          mainImage.setAttribute('src', variantImage);

          //Quitar seleccion al color anterior
          var previousSelected = card.querySelector('.item_color-variant_selected');
          if (previousSelected) {
            previousSelected.classList.remove('item_color-variant_selected');
          }

          //Poner selección al nuevo color seleccionado
          var swatchP = swatch.querySelector('.item_color-variant');
          swatchP.classList.add('item_color-variant_selected');

          //Quita las variantes de color selecciondas
          var previousSelectedSize = card.querySelectorAll('.item_size-variant_selected');
          previousSelectedSize.forEach(function (element) {
            element.classList.add('item_size-variant');
            element.classList.remove('item_size-variant_selected');
          });

          //Pone las nuevas variantes de color seleccionadas
          colorSize.forEach(function (element) {
            if (element.getAttribute('data-variant2-color') === variantColor) {
              var firstStyleSize = element.querySelector('.item_size-variant');
              firstStyleSize.classList.remove('item_size-variant');
              firstStyleSize.classList.add('item_size-variant_selected');
            }
            ;
          });
        });
      });
    });
  }
};

/***/ }),

/***/ "./src/js/components/product.js":
/*!**************************************!*\
  !*** ./src/js/components/product.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   product: () => (/* binding */ product)
/* harmony export */ });
var product = function product() {};

/***/ }),

/***/ "./src/js/components/sidecart.js":
/*!***************************************!*\
  !*** ./src/js/components/sidecart.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sideCart: () => (/* binding */ sideCart)
/* harmony export */ });
var sideCart = function sideCart() {
  //Abrir carrito desde cta
  // const buttonCart = document.querySelector(".img_cart");  

  //   buttonCart.addEventListener('click', function(event){
  //     const allBody = document.querySelector("body"); 
  //     const contentCart = document.querySelector(".main-container-cart_hide");
  //     const sideCartView = document.querySelector(".cart-drawer_hide");       

  //     sideCartView.classList.add('cart-drawer'); 
  //     contentCart.classList.add('main-container-cart');
  //     allBody.style.overflow = 'hidden';
  //     event.stopPropagation();
  //   });

  //Cerrar carrito con flecha
  var arrowClose = document.querySelector(".icon_exit-cart");
  arrowClose.addEventListener('click', function (event) {
    var sideCartView = document.querySelector(".cart-drawer");
    var contentCart = document.querySelector(".main-container-cart");
    var allBody = document.querySelector("body");
    if (sideCartView) {
      sideCartView.classList.remove('cart-drawer');
      contentCart.classList.remove('main-container-cart');
      allBody.style.overflow = 'scroll';
    }
    event.stopPropagation();
  });

  //Cerrar carrito dando clic afuera de el
  document.addEventListener('click', function (event) {
    var sideCartView = document.querySelector(".cart-drawer");
    var contentCart = document.querySelector(".main-container-cart");
    var allBody = document.querySelector("body");
    if (sideCartView && !sideCartView.contains(event.target)) {
      sideCartView.classList.remove('cart-drawer');
      contentCart.classList.remove('main-container-cart');
      allBody.style.overflow = 'scroll';
    }
    event.stopPropagation();
  });
};

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_product_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/product-cards */ "./src/js/components/product-cards.js");
/* harmony import */ var _components_sidecart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sidecart */ "./src/js/components/sidecart.js");
/* harmony import */ var _components_api_carrito__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/api_carrito */ "./src/js/components/api_carrito.js");
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product */ "./src/js/components/product.js");
//import { swiperValueprops } from "./swiper";
//import { Ajaxinate } from "ajaxinate";





document.addEventListener("DOMContentLoaded", function () {
  (0,_components_sidecart__WEBPACK_IMPORTED_MODULE_1__.sideCart)();
  (0,_components_product_cards__WEBPACK_IMPORTED_MODULE_0__.productCard)();
});
(0,_components_api_carrito__WEBPACK_IMPORTED_MODULE_2__.apiCarrito)();
})();

/******/ })()
;
//# sourceMappingURL=juan.scripts.js.map