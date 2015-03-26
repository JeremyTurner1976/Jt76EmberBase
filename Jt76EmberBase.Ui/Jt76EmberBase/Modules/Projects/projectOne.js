Jt76EmberBase.IndexProjectsProjectOneView = Jt76EmberBase.SlidingView.extend({
    templateName: "Modules/Projects/projectOne"
});

Jt76EmberBase.IndexProjectsProjectOneRoute = Jt76EmberBase.BaseRoute.extend({
});

Jt76EmberBase.IndexProjectsProjectOneController = Ember.ObjectController.extend({
    strPageTitle: "Project One",
    strSubHeader: "A placeholder for future content.",
    iframe: function () {
        var iframe = document.createElement("iframe");

        //inline
        iframe.src = "api/v1/getPdf";
        //download
        //iframe.src = "Home/getPdf";

        var nFooterHeight = 32;
        var nHeaderHeight = 52;
        var nOverallPadding = 55;
        var nButtonPadding = 160;
        var nDesiredHeight = (window.innerHeight - (nFooterHeight + nHeaderHeight + nOverallPadding + nButtonPadding));

        //min-height of the iframe
        if (nDesiredHeight < 450)
            nDesiredHeight = 450;

        $(iframe).attr("style", "width:100%;height:" + nDesiredHeight + "px;");
        return iframe;
    }.property(),

    actions: {
        printPdf: function() {
            this.get("iframe").contentWindow.print();
        }
    }
});
