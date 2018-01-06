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
/******/ 	__webpack_require__.p = "/blog/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

var _mobileMenu = __webpack_require__(3);

var _mobileMenu2 = _interopRequireDefault(_mobileMenu);

var _contentPlus = __webpack_require__(5);

var _contentPlus2 = _interopRequireDefault(_contentPlus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_utils2.default.isIE()) {
  $("body").addClass("_ie");
}

hljs.initHighlightingOnLoad();

_utils2.default.excAndExcOnResizing(function () {
  _contentPlus2.default.layoutContent(".content-plus");
  _mobileMenu2.default.init();
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"no-csschunit":"no-csschunit","container-fluid":"container-fluid","left":"left","right":"right","sep":"sep","colophon":"colophon","links":"links","nav-menu":"nav-menu","post":"post","more-link":"more-link","content-plus":"content-plus","caption":"caption","with-code-caption":"with-code-caption","link":"link","container":"container","branding":"branding","wrap":"wrap","logo":"logo","icon":"icon","no-svg":"no-svg","active":"active","page-content":"page-content","comments":"comments","nav-bottom":"nav-bottom","text":"text","excerpt":"excerpt","next":"next","nav-pagination":"nav-pagination","page-number":"page-number","info":"info","nav-email":"nav-email","post--index":"post--index","post-header":"post-header","post-date":"post-date","post-title":"post-title","post-link":"post-link","post-meta":"post-meta","article-share-link":"article-share-link","article-category":"article-category","article-category-link":"article-category-link","post-tag-list":"post-tag-list","post-tag-list-item":"post-tag-list-item","page-header":"page-header","hash":"hash","author-bio":"author-bio","author-stats":"author-stats","author-location":"author-location","page-description":"page-description","page-content--archive":"page-content--archive","page-content-inner":"page-content-inner","archives-wrap":"archives-wrap","archive-year-wrap":"archive-year-wrap","archives":"archives","archive-post":"archive-post","archive-post-date":"archive-post-date","toc":"toc","mobile-menu-enabled":"mobile-menu-enabled","mobile-menu-open":"mobile-menu-open","nav-menu-float":"nav-menu-float","title":"title","backdrop":"backdrop","mobile-menu-closed":"mobile-menu-closed","article-share-box":"article-share-box","on":"on","article-share-input":"article-share-input","article-share-links":"article-share-links","article-share-twitter":"article-share-twitter","article-share-facebook":"article-share-facebook","article-share-pinterest":"article-share-pinterest","article-share-google":"article-share-google","icon-animated":"icon-animated","icon-animated-menu":"icon-animated-menu","state-1":"state-1","_ie":"_ie","state-2":"state-2","hljs":"hljs","hljs-comment":"hljs-comment","hljs-meta":"hljs-meta","hljs-string":"hljs-string","hljs-variable":"hljs-variable","hljs-template-variable":"hljs-template-variable","hljs-strong":"hljs-strong","hljs-emphasis":"hljs-emphasis","hljs-quote":"hljs-quote","hljs-keyword":"hljs-keyword","hljs-selector-tag":"hljs-selector-tag","hljs-type":"hljs-type","hljs-literal":"hljs-literal","hljs-symbol":"hljs-symbol","hljs-bullet":"hljs-bullet","hljs-attribute":"hljs-attribute","hljs-section":"hljs-section","hljs-name":"hljs-name","hljs-tag":"hljs-tag","hljs-title":"hljs-title","hljs-attr":"hljs-attr","hljs-selector-id":"hljs-selector-id","hljs-selector-class":"hljs-selector-class","hljs-selector-attr":"hljs-selector-attr","hljs-selector-pseudo":"hljs-selector-pseudo","hljs-addition":"hljs-addition","hljs-deletion":"hljs-deletion","hljs-link":"hljs-link"};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Share
$('body').on('click', function () {
  $('.article-share-box.on').removeClass('on');
}).on('click', '.article-share-link', function (e) {
  e.stopPropagation();
  var $this = $(this),
      url = $this.attr('data-url'),
      encodedUrl = encodeURIComponent(url),
      id = 'article-share-box-' + $this.attr('data-id'),
      offset = $this.offset();

  if ($('#' + id).length) {
    var box = $('#' + id);

    if (box.hasClass('on')) {
      box.removeClass('on');
      return false;
    }
  } else {
    var html = ['<div id="' + id + '" class="article-share-box">', '<input class="article-share-input" value="' + url + '">', '<div class="article-share-links">', '<a href="https://twitter.com/intent/tweet?url=' + encodedUrl + '" class="article-share-twitter" target="_blank" title="Twitter"></a>', '<a href="https://www.facebook.com/sharer.php?u=' + encodedUrl + '" class="article-share-facebook" target="_blank" title="Facebook"></a>', '<a href="http://pinterest.com/pin/create/button/?url=' + encodedUrl + '" class="article-share-pinterest" target="_blank" title="Pinterest"></a>',
    // '<a href="https://plus.google.com/share?url=' + encodedUrl + '" class="article-share-google" target="_blank" title="Google+"></a>',
    '</div>', '</div>'].join('');

    var box = $(html);

    $('body').append(box);
  }

  $('.article-share-box.on').hide();

  box.css({
    top: offset.top + 25,
    left: offset.left
  }).addClass('on');
  return false;
}).on('click', '.article-share-box', function (e) {
  e.stopPropagation();
}).on('click', '.article-share-box-input', function () {
  $(this).select();
}).on('click', '.article-share-box-link', function (e) {
  e.preventDefault();
  e.stopPropagation();

  window.open(this.href, 'article-share-box-window-' + Date.now(), 'width=500,height=450');
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mobileMenu = {};

mobileMenu.menu_icon = null;
mobileMenu.nav_float = null;
mobileMenu.nav_ul = null;
mobileMenu.is_initialized = false;

mobileMenu.init = function () {
  if ($(window).width() <= 768 && !this.is_initialized) {
    $("body").append("<div class='nav-menu-float'><div class='title'>" + window.__BLOG_NAME__ + "</div></div><div class='backdrop'></div>").addClass("mobile-menu-enabled mobile-menu-closed");
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

mobileMenu.open = function () {
  mobileMenu.menu_icon.removeClass("state-1").addClass("state-2");
  $("body").removeClass("mobile-menu-closed").addClass("mobile-menu-open");
  _utils2.default.sealScroll();
};

mobileMenu.close = function () {
  mobileMenu.menu_icon.removeClass("state-2").addClass("state-1");
  $("body").removeClass("mobile-menu-open").addClass("mobile-menu-closed");
  _utils2.default.unlockScroll();
};

exports.default = mobileMenu;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var utils = {};

utils.isIE = function (ver) {
	var b = document.createElement('b');
	b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->';
	return b.getElementsByTagName('i').length === 1;
};

utils.sealScroll = function () {
	$("body").css({ "overflow": "hidden" });
};

utils.unlockScroll = function () {
	$("body").css({ "overflow": "visible" });
};

utils.excAndExcOnResizing = function (func, args) {
	if (!args) {
		args = [];
	}
	func.apply([], args);
	$(window).resize(function () {
		func.apply(null, args);
	});
};

utils.addScriptToHead = function (url) {
	$("head").append("<script src='" + url + "'></script>");
};

utils.addScriptInBody = function (url) {
	$("body").append("<script src='" + url + "'></script>");
};

exports.default = utils;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var contentPlus = {};

contentPlus.threshold = 768;

contentPlus.config = function (data) {
  for (var p in data) {
    if (p == "threshold") {
      contentPlus.threshold = parseInt(data.threshold);
    }
  }
};

contentPlus.alignVerCenter = function (ele) {
  var ele_h = $(ele).outerHeight();
  var parent_h = $(ele).parent().height();
  $(ele).css({ "position": "absolute", "top": "50%", "margin-top": -ele_h / 2 });
  $(ele).parent().css({ "position": "relative" });
};

contentPlus._setImgWrapFullWidth = function (tar) {
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

contentPlus._setLinkOpenBlank = function (tar) {
  if (!tar.attr('target') && !tar.find("img").length && !tar.hasClass("no_blank")) {
    if (!tar.hasClass('toc-link')) {
      tar.attr('target', '_blank');
    }
    tar.addClass("link");
  }
};

contentPlus._handlePara = function (tar) {
  if (tar.find("img").length) {
    tar.addClass("img-wrap");
  }
};

contentPlus.layoutContent = function (tar) {
  $(tar).find("p,a,img").each(function () {
    var type = $(this).prop("tagName");
    switch (type) {
      case "P":
        contentPlus._handlePara($(this));
        break;

      case "A":
        contentPlus._setLinkOpenBlank($(this));
        break;

      case "IMG":
        contentPlus._setImgWrapFullWidth($(this));
        contentPlus._expandEle($(this), 40);
        break;

      default:
        break;
    }
  });
};

contentPlus._expandEle = function (tar, padding) {
  var w1 = tar.parent().width();
  if ($(window).width() < contentPlus.threshold) {
    padding = 15;
  }
  var w2 = w1 + padding * 2;
  tar.width(w2);
  tar.css({ "margin-left": -padding, "max-width": w2 });
};

exports.default = contentPlus;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map