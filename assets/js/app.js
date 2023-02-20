(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _burgerMenu = _interopRequireDefault(require("./components/burger-menu"));
var _slider = _interopRequireDefault(require("./components/slider"));
var _scrollTo = _interopRequireDefault(require("./components/scroll-to"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

(function ($) {
  // When DOM is ready
  $(function () {
    _burgerMenu["default"].init();
    (0, _slider["default"])();
    _scrollTo["default"].init();
    initToogleLabel();

    // fixed header
    $(window).scroll(function () {
      var sticky = $('.js-header'),
        scroll = $(window).scrollTop();
      if (scroll >= 1) sticky.addClass('fixed');else sticky.removeClass('fixed');
    });

    //toogleLabel()
    function initToogleLabel() {
      var fieldList = document.querySelectorAll('.js-form-field');
      if (!fieldList.length) return;
      fieldList.forEach(function (field) {
        var input = field.querySelector('input'),
          label = field.querySelector('.js-form-label');
        if (!input || !label) return;
        input.addEventListener('input', function (e) {
          if (e.currentTarget.value) {
            label.classList.add('active');
          } else {
            label.classList.remove('active');
          }
        });
      });
    }
  });
})(jQuery);

},{"./components/burger-menu":2,"./components/scroll-to":3,"./components/slider":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var BURGER = document.querySelector('.js-burger-open');
var NAV = document.querySelector('.js-burger');
var CLOSE = document.querySelectorAll('.js-burger-close');
var overlay = document.querySelector('.js-overlay');
var BODY = document.querySelector('body');
var CLASS_OVERFLOW = 'overflow';
var CLASS_ACTIVE = 'active';
var burgerMenu = function () {
  var burgeInit = function burgeInit() {
    if (!BURGER) return;
    BURGER.addEventListener('click', function (e) {
      if (!e.currentTarget.classList.contains('active')) {
        openBurger();
      } else {
        closeBurger();
      }
    });
    CLOSE.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        closeBurger();
      });
    });
  };
  var openBurger = function openBurger() {
    BURGER.classList.add(CLASS_ACTIVE);
    NAV.classList.add(CLASS_ACTIVE);
    BODY.classList.add(CLASS_OVERFLOW);
    overlay.classList.add(CLASS_ACTIVE);
  };
  var closeBurger = function closeBurger() {
    BURGER.classList.remove(CLASS_ACTIVE);
    NAV.classList.remove(CLASS_ACTIVE);
    BODY.classList.remove(CLASS_OVERFLOW);
    overlay.classList.remove(CLASS_ACTIVE);
  };
  var init = function init() {
    burgeInit();
  };
  return {
    init: init,
    closeBurger: closeBurger
  };
}();
var _default = burgerMenu;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// const ACTIVE = 'active';
var NAV_LINKS = document.querySelectorAll('.js-link-to');
var scrollTo = function () {
  var initScroll = function initScroll() {
    if (!NAV_LINKS.length) return;
    NAV_LINKS.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var href = e.currentTarget.getAttribute('href').substring(1);
        top(href);
      });
    });
  };
  var top = function top(id) {
    var scrollTarget = document.getElementById(id);
    if (!scrollTarget) return;
    var topOffset = 0;
    var fixHeader = document.querySelector('.js-fixed-header');
    if (fixHeader) {
      topOffset = fixHeader.offsetHeight;
    }
    var elementPosition = scrollTarget.getBoundingClientRect().top;
    var offsetPosition = elementPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };
  var init = function init() {
    initScroll();
  };
  return {
    init: init,
    top: top
  };
}();
var _default = scrollTo;
exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function initSwiper() {
  var swiper1 = new Swiper('.js-services-slider', {
    spaceBetween: 40,
    slidesPerView: 1,
    slidesPerColumnFill: 'row',
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 4,
        spaceBetween: 50
      },
      1024: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 4,
        spaceBetween: 60
      },
      1440: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 4,
        spaceBetween: 55
      }
    },
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev'
    }
  });
  if (!swiper1) return;
}
var _default = initSwiper;
exports["default"] = _default;

},{}]},{},[1]);
