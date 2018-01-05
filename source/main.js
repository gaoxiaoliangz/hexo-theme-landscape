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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Kit = function (kit) {

	kit.isIE = function (ver) {
		var b = document.createElement('b');
		b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->';
		return b.getElementsByTagName('i').length === 1;
	};

	kit.sealScroll = function () {
		$("body").css({ "overflow": "hidden" });
	};

	kit.unlockScroll = function () {
		$("body").css({ "overflow": "visible" });
	};

	kit.excAndExcOnResizing = function (func, args) {
		if (!args) {
			args = [];
		}
		func.apply([], args);
		$(window).resize(function () {
			func.apply(null, args);
		});
	};

	kit.addScriptToHead = function (url) {
		$("head").append("<script src='" + url + "'></script>");
	};

	kit.addScriptInBody = function (url) {
		$("body").append("<script src='" + url + "'></script>");
	};

	return kit;
}(Kit || {});

module.exports = Kit;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var kit = __webpack_require__(0);
var mobilemenu = __webpack_require__(2);
var contentplus = __webpack_require__(3);

hljs.initHighlightingOnLoad();

kit.excAndExcOnResizing(function () {
  contentplus.layoutContent(".content-plus");
  mobilemenu.init();
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var kit = __webpack_require__(0);

var mobileMenu = function (o) {
  o.menu_icon = null;
  o.nav_float = null;
  o.nav_ul = null;
  o.is_initialized = false;

  o.init = function () {
    console.log('here');
    if ($(window).width() <= 768 && !this.is_initialized) {
      $("body").append("<div class='nav-menu-float'><div class='title'>菜单</div></div><div class='backdrop'></div>").addClass("mobile-menu-enabled mobile-menu-closed");
      $(".branding .wrap").append("<span class='icon icon-animated icon-animated-menu state-1'></span>");
      this.nav_float = $(".nav-menu-float");
      this.nav_ul = $(".branding ul.nav-menu");
      this.nav_float.append(this.nav_ul);
      this.is_initialized = true;
    } else if ($(window).width() > 768 && this.is_initialized) {
      if ($("body").hasClass("mobile-menu-open")) {
        this.close();
      }
      $("body").removeClass("mobile-menu-enabled mobile-menu-closed");
      this.menu_icon.remove();
      this.nav_float.remove();
      this.is_initialized = false;
      $(".branding .wrap").append(this.nav_ul);
      $(".backdrop").remove();
    }

    $(".branding .wrap").on("click", ".icon.state-1", this.open);
    $(".branding .wrap").on("click", ".icon.state-2", this.close);
    $("body.mobile-menu-open").on("click", ".backdrop", this.close);
    $("body").on("click", ".backdrop", this.close);

    this.menu_icon = $(".branding .wrap .icon");
  };

  o.open = function () {
    o.menu_icon.removeClass("state-1").addClass("state-2");
    $("body").removeClass("mobile-menu-closed").addClass("mobile-menu-open");
    kit.sealScroll();
  };

  o.close = function () {
    o.menu_icon.removeClass("state-2").addClass("state-1");
    $("body").removeClass("mobile-menu-open").addClass("mobile-menu-closed");
    kit.unlockScroll();
  };

  return o;
}(mobileMenu || {});

module.exports = mobileMenu;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var kit = __webpack_require__(0);

if (kit.isIE()) {
  $("body").addClass("_ie");
}

var contentPlus = function (obj) {

  obj.threshold = 768;

  obj.config = function (data) {
    for (var p in data) {
      if (p == "threshold") {
        obj.threshold = parseInt(data.threshold);
      }
    }
  };

  obj.alignVerCenter = function (ele) {
    var ele_h = $(ele).outerHeight();
    var parent_h = $(ele).parent().height();
    $(ele).css({ "position": "absolute", "top": "50%", "margin-top": -ele_h / 2 });
    $(ele).parent().css({ "position": "relative" });
  };

  obj._setImgWrapFullWidth = function (tar) {
    var w1 = $(document).width();
    if (tar.parent().prop("tagName") == "P") {
      var type = tar.data("img-type");
      tar.parent().addClass("img-wrap-type-" + type);
      switch (type) {

        case 1:
          // img full width
          var w2 = tar.parent().parent().width();
          var offset = (w1 - w2) / 2;
          var p = tar.parent();
          p.width(w1);
          tar.width(w1);
          p.css("margin-left", -offset);
          break;

        case 2:
          // img wrap full width
          var w2 = tar.parent().parent().width();
          var offset = (w1 - w2) / 2;
          var p = tar.parent();
          p.width(w1);
          p.css("margin-left", -offset);
          break;

        default:
          break;
      }
    }
  };

  obj._setLinkOpenBlank = function (tar) {
    if (!tar.attr('target') && !tar.find("img").length && !tar.hasClass("no_blank")) {
      tar.attr('target', '_blank');
      tar.addClass("link");
    }
  };

  obj._handlePara = function (tar) {
    if (tar.find("img").length) {
      tar.addClass("img-wrap");
    }
  };

  obj.layoutContent = function (tar) {
    $(tar).find("p,a,img").each(function () {
      var type = $(this).prop("tagName");
      switch (type) {
        case "P":
          obj._handlePara($(this));
          break;

        case "A":
          obj._setLinkOpenBlank($(this));
          break;

        case "IMG":
          obj._setImgWrapFullWidth($(this));
          obj._expandEle($(this), 40);
          break;

        default:
          break;
      }
    });
  };

  obj._expandEle = function (tar, padding) {
    var w1 = tar.parent().width();
    if ($(window).width() < obj.threshold) {
      padding = 15;
    }
    var w2 = w1 + padding * 2;
    tar.width(w2);
    tar.css({ "margin-left": -padding, "max-width": w2 });
  };

  return obj;
}(contentPlus || {});

module.exports = contentPlus;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map