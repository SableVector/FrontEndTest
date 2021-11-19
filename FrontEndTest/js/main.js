"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.addEventListener("DOMContentLoaded", function () {
  var t = document.querySelector(".tabs-trigers__list"),
      e = document.querySelectorAll(".tabs-trigers__item-btn"),
      s = document.querySelectorAll(".tabs-content__item");
  console.log(e);

  var o = function o() {
    var _iterator = _createForOfIteratorHelper(s),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _t = _step.value;
        _t.style.display = "none";
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = _createForOfIteratorHelper(e),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _t2 = _step2.value;

        _t2.classList.remove("tabs-trigers__item-btn--active");
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  },
      n = function n() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    s[t].style.display = "block", e[t].classList.add("tabs-trigers__item-btn--active");
  };

  t.addEventListener("click", function (t) {
    var s = t.target;
    s && "BUTTON" == s.tagName && e.forEach(function (t, e) {
      s === t && (o(), n(e));
    });
  }), o(), n();
});