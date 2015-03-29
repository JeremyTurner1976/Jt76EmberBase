Jt76EmberBase.ModalDialogComponent = Ember.Component.extend({

    nFrameHeight: function () {
        var nDesiredVerticalPadding = 100;
        var nDesiredHeight = ($("#jt76emberbase-app").height() - nDesiredVerticalPadding);
        //min-height of the modal
        if (nDesiredHeight < 450)
            nDesiredHeight = 450;
        return nDesiredHeight;
    }.property(),

    nFrameWidth: function () {
        var nDesiredHorizontalPadding = 100;
        var nDesiredWidth = ($("#jt76emberbase-app").innerWidth() - nDesiredHorizontalPadding);
        //min-width of the modal
        if (nDesiredWidth < 450)
            nDesiredWidth = 450;
        return nDesiredWidth;
    }.property(),

    actions: {
        close: function () {
            return this.sendAction();
        }
    },

    didInsertElement: function () {
        //model passed via openModal in app.js
        switch (this.get("_parentView.controller.model.displayType")) {
            case "iFrame":
                var nMargin = 10;
                var iframe = document.createElement("iframe");
                var parent = $("#modalContent");
                $(iframe).attr("style", "position:absolute;border-color:#2F96B4;" +
                    "top:" + nMargin + "px;left:" + nMargin + "px;right:" + nMargin + "px;bottom:" + nMargin + "px;" +
                    "height:" + (this.get("nFrameHeight") - (nMargin * 2)) + "px;" +
                    "width:" + (this.get("nFrameWidth") - (nMargin * 2)) + "px;");
                iframe.src = this.get("_parentView.controller.model.source");

                $(parent).empty();
                $(parent).append(iframe);
                break;
            default:
                Ember.Logger.error("The modal component does not have a valid type defined: " + this.get("displayType"));
                break;
        }
    }
});

