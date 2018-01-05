var kit = require("./kit");

if(kit.isIE()){
  $("body").addClass("_ie");
}

var contentPlus = (function(obj){

  obj.threshold = 768;

  obj.config = function(data){
    for(var p in data){
      if(p == "threshold"){
        obj.threshold = parseInt(data.threshold);
      }
    }
  };

  obj.alignVerCenter = function (ele) {
    var ele_h = $(ele).outerHeight();
    var parent_h = $(ele).parent().height();
    $(ele).css({"position":"absolute","top":"50%","margin-top":-ele_h/2});
    $(ele).parent().css({"position":"relative"});
  };

  obj._setImgWrapFullWidth = function(tar) {
    var w1 = $(document).width();
    if(tar.parent().prop("tagName")=="P"){
      var type = tar.data("img-type");
      tar.parent().addClass("img-wrap-type-"+type);
      switch(type){

        case 1:
          // img full width
          var w2 = tar.parent().parent().width();
          var offset = (w1-w2)/2;
          var p = tar.parent();
          p.width(w1);
          tar.width(w1);
          p.css("margin-left",-offset);
          break;

        case 2:
          // img wrap full width
          var w2 = tar.parent().parent().width();
          var offset = (w1-w2)/2;
          var p = tar.parent();
          p.width(w1);
          p.css("margin-left",-offset);
          break;

        default:
          break;
      }
    }
  };

  obj._setLinkOpenBlank = function(tar) {
    if (!tar.attr('target') && !tar.find("img").length && !tar.hasClass("no_blank")) {
      tar.attr('target', '_blank');
      tar.addClass("link");
    }
  }

  obj._handlePara = function(tar){
    if(tar.find("img").length) {
      tar.addClass("img-wrap");
    }
  }

  obj.layoutContent = function (tar) {
    $(tar).find("p,a,img").each(function(){
      var type = $(this).prop("tagName");
      switch(type){
        case "P":
          obj._handlePara($(this));
          break;

        case "A":
          obj._setLinkOpenBlank($(this));
          break;

        case "IMG":
          obj._setImgWrapFullWidth($(this));
          obj._expandEle($(this),40);
          break;

        default:
          break;
      }
    });
  };

  obj._expandEle = function(tar,padding){
    var w1 = tar.parent().width();
    if($(window).width() < obj.threshold){
      padding = 15;
    }
    var w2 = w1 + padding*2;
    tar.width(w2);
    tar.css({"margin-left": -padding,"max-width": w2});
  }

  return obj;
}(contentPlus || {}));

module.exports =  contentPlus;
