Jt76EmberBase.IndexProjectsProjectOneView = Jt76EmberBase.SlidingView.extend({
    templateName: "Modules/Projects/projectOne"
});

Jt76EmberBase.IndexProjectsProjectOneRoute = Jt76EmberBase.BaseRoute.extend({
});

Jt76EmberBase.IndexProjectsProjectOneController = Ember.ObjectController.extend({
    strPageTitle: "Project One",
    strSubHeader: "A placeholder for future content.",
    iframe: function () {
        this.controllerFor("index").set("bIsLoaded", false);
        var iframe = document.createElement("iframe");

        var self = this;
        iframe.onload = (function () {
            self.controllerFor("index").set("bIsLoaded", true);
        });

        iframe.src = "GetPdfResponse";

        var nFooterHeight = 32;
        var nHeaderHeight = 52;
        var nOverallPadding = 55;
        var nButtonPadding = 160;
        var nDesiredHeight = (window.innerHeight - (nFooterHeight + nHeaderHeight + nOverallPadding + nButtonPadding));

        //min-height of the iframe
        if (nDesiredHeight < 450)
            nDesiredHeight = 450;

        $(iframe).attr("style", "width:100%;height:" + nDesiredHeight + "px;");


        //this.controllerFor("index").set("bIsLoaded", true);
        return iframe;
    }.property(),

    actions: {
        printPdf: function() {
            //pdf.print();
            //document.getElementById("contentIframe").contentWindow.print();
            this.get("iframe").contentWindow.print();
        }
    }
});

var pdf = new PdfUtil("GetPdfResponse");

function PdfUtil(url) {

    var iframe;

    var construct = function (url) {
        iframe = getContentIframe(url);
    }

    var getContentIframe = function (url) {
        var iframe = document.createElement('iframe');
        iframe.src = url;
        return iframe;
    }

    this.display = function (parentDomElement) {
        parentDomElement.appendChild(iframe);
    }

    this.print = function () {
        try {
            iframe.contentWindow.print();
        } catch (e) {
            throw new Error("Printing failed.");
        }
    }

    construct(url);
}