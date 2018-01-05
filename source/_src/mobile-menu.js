var kit = require("./kit");

var mobileMenu = (function (o) {
  o.menu_icon = null;
  o.nav_float = null;
  o.nav_ul = null;
  o.is_initialized = false;

  o.init = function () {
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
  }

  o.open = function () {
    o.menu_icon.removeClass("state-1").addClass("state-2");
    $("body").removeClass("mobile-menu-closed").addClass("mobile-menu-open");
    kit.sealScroll();
  }

  o.close = function () {
    o.menu_icon.removeClass("state-2").addClass("state-1");
    $("body").removeClass("mobile-menu-open").addClass("mobile-menu-closed");
    kit.unlockScroll();
  }

  return o;
}(mobileMenu || {}));

module.exports = mobileMenu;
