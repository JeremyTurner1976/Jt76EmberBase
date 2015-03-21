Jt76EmberBase.IndexView = Ember.View.extend({
    templateName: "index"
});

Jt76EmberBase.IndexRoute = Ember.Route.extend({
});

Jt76EmberBase.IndexController = Ember.ObjectController.extend({
    bIsLoaded: true,
    strHeightStyle: function() {
        var nFooterHeight = 32;
        var nHeaderHeight = 52;
        var nOverallPadding = 55;
        var nDesiredHeight = (window.innerHeight - (nFooterHeight + nHeaderHeight + nOverallPadding));

        //min-height of the application
        if (nDesiredHeight < 450)
            nDesiredHeight = 450;

        return "min-height:" + nDesiredHeight + "px;";
    }.property(),
    actions: {
        toggleSidebar: function () {
            var strRoute = "href=\"#" + Jt76EmberBase.__container__.lookup('router:main').location.lastSetURL + "\"";
            $(".sidebar-accordion > li").toArray().forEach(function (element) {
                if (element.innerHTML.indexOf(strRoute) === -1) {
                    $(element).removeClass("active");
                }
                else {
                    $(element).addClass("active");
                    $(element).removeClass("open");
                    $(".sidebar-menu .openable").toArray().forEach(function (innerElement) {
                        $(innerElement).parent().removeClass("open").children(".submenu").slideUp(200);
                    });
                }
            });
        },
        toggleSidebarOpenable: function (strLinkItem) {
            var strRoute = "href=\"#" + Jt76EmberBase.__container__.lookup('router:main').location.lastSetURL + "\"";
            $(".sidebar-menu .openable > a").toArray().forEach(function (element) {
                if (!$("aside").hasClass("sidebar-mini") || Modernizr.mq("(max-width: 991px)")) {
                    if ($(element).parent().children(".submenu").is(":hidden") && element.innerHTML.indexOf(strLinkItem) !== -1) {
                        $(element).parent().addClass("open").children(".submenu").slideDown(200);
                    }
                    else {
                        if ($(element).siblings()[0].innerHTML.indexOf(strRoute) === -1)
                            $(element).parent().removeClass("open").children(".submenu").slideUp(200);
                    }
                }
            });
        },
        scrollToTop: function () {
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        },
        sidebarMenuToggle: function (item) {
            if (item.indexOf("LG") !== -1) {
                if ($(".wrapper").hasClass("display-right")) {
                    $(".wrapper").removeClass("display-right");
                    $(".sidebar-right").removeClass("active");
                }
                else {
                    $(".top-nav").toggleClass("sidebar-mini");
                    $("aside").toggleClass("sidebar-mini");
                    $("footer").toggleClass("sidebar-mini");
                    $(".main-container").toggleClass("sidebar-mini");

                    $(".main-menu").find(".openable").removeClass("open");
                    $(".main-menu").find(".submenu").removeAttr("style");
                }
            } else {
                $("aside").toggleClass("active");
                $(".wrapper").toggleClass("display-left");
            }
        }
    }
});