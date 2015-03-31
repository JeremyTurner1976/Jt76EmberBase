Jt76EmberBase.IndexProjectsProjectOneView = Jt76EmberBase.SlidingView.extend({
    templateName: "Modules/Projects/projectOne"
});

Jt76EmberBase.IndexProjectsProjectOneRoute = Jt76EmberBase.BaseRoute.extend({
    actions: {
        popupPdf: function () {
            var model = Ember.Object.create({displayType: "iFrame", source: "api/v1/getPdf"});
            this.send("openModal", "modal", model);
        }
    }
});

Jt76EmberBase.IndexProjectsProjectOneController = Ember.ObjectController.extend({
    strPageTitle: "Project One",
    strSubHeader: "A placeholder for future content.",
    nFrameHeight: function () {
        var nFooterHeight = 32;
        var nHeaderHeight = 52;
        var nOverallPadding = 55;
        var nButtonPadding = 160;
        var nDesiredHeight = (window.innerHeight - (nFooterHeight + nHeaderHeight + nOverallPadding + nButtonPadding));

        //min-height of the iframe
        if (nDesiredHeight < 450)
            nDesiredHeight = 450;

        return nDesiredHeight;
    }.property(),

    actions: {
        viewPdf: function() {
            //inline
            var iframe = document.createElement("iframe");
            var parent = $("#contentIframe");
            var nFrameHeight = this.get("nFrameHeight");
            $(iframe).attr("style", "width:100%;height:" + nFrameHeight + "px;");
            $(parent).attr("style", "width:100%;height:" + nFrameHeight + "px;");

            iframe.src = "api/v1/getPdf";
            $(parent).empty();
            $(parent).append(iframe);
        },
        downloadPdf: function() {
            //attachment
            window.location.href = "Home/getPdf";
        },
        viewCreatedPdf: function() {
            //inline
            var iframe = document.createElement("iframe");
            var parent = $("#contentIframe");
            var nFrameHeight = this.get("nFrameHeight");
            $(iframe).attr("style", "width:100%;height:" + nFrameHeight + "px;");
            $(parent).attr("style", "width:100%;height:" + nFrameHeight + "px;");

            iframe.src = "api/v1/getCreatedPdf";
            $(parent).empty();
            $(parent).append(iframe);
        }
    }
});
