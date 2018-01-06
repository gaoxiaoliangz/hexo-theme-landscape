const contentPlus = {}

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
}

contentPlus._handlePara = function (tar) {
  if (tar.find("img").length) {
    tar.addClass("img-wrap");
  }
}

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
}

export default contentPlus
