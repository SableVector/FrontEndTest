"use strict";

window.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tabs__list").addEventListener("click", function (t) {
    var e = t.target,
        a = document.querySelectorAll(".tabs__item-btn");
    e && "BUTTON" == e.tagName && (a.forEach(function (t) {
      t.classList.remove("tabs__item-btn--active");
    }), e.classList.add("tabs__item-btn--active"));
  });
});