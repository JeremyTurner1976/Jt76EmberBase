﻿Jt76EmberBase.IndexAdminErrorsView = Jt76EmberBase.SlidingView.extend({
    templateName: "Modules/Admin/errors"
});

Jt76EmberBase.IndexAdminErrorsRoute = Jt76EmberBase.ArrayRoute.extend({
    strModel: "error"
});

Jt76EmberBase.IndexAdminErrorsController = Jt76EmberBase.ArrayController.extend({
    strPageTitle: "Admin Errors",
    strSubHeader: "Handle your business.",
    strDisplayType: "Error",
    strNewLink: "index.admin.errorDetails",
    nMaxPagesToDisplay: 5,
    nMaxPageItemsToDisplay: 10,
    displayProperties: [{ key: "strMessage", value: "Message" },
                        { key: "dtCreated", value: "Date Created" },
                        { key: "strSource", value: "Source" },
                        { key: "strErrorLevel", value: "Error Level" },
                        { key: "strAdditionalInformation", value: "Additional Information" }],
    sortProperties: ["dtCreated:desc", "numericId:desc"],
    archivedSortProperties: ["dtCreated:desc", "numericId:desc"], //saved for resets

    actions: {
        injectItem: function () {
            var self = this;
            var newItem = this.get("store").createRecord("error", {
                strMessage: "This is a strMessage",
                strSource: "This is a strSource",
                strErrorLevel: "This is a strErrorLevel",
                strAdditionalInformation: "This is a strAdditionalInformation",
                strStackTrace: "This is a strStackTrace"
            });
            newItem.save().then(function (data) {
                Jt76EmberBase.Common.log("This item has been saved.", data, "info", true);
                self.send("refresh", false, false);
            }, function (errorResponse) {
                Jt76EmberBase.Common.log("Unable to save record: ", errorResponse, "error", true);
            });
        }
    }
});