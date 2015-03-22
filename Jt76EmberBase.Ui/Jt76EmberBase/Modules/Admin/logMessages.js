Jt76EmberBase.IndexAdminLogMessagesView = Jt76EmberBase.SlidingView.extend({
    templateName: "Modules/Admin/logMessages"
});

Jt76EmberBase.IndexAdminLogMessagesRoute = Jt76EmberBase.ArrayRoute.extend({
    strModel: "logMessage"
});

Jt76EmberBase.IndexAdminLogMessagesController = Jt76EmberBase.ArrayController.extend({
    strPageTitle: "Admin Log Messages",
    strSubHeader: "Handle your business.",
    strDisplayType: "Log",
    nMaxPagesToDisplay: 3,
    nMaxPageItemsToDisplay: 15,
    displayProperties: [{ key: "strLogMessage", value: "Message" },
                        { key: "dtCreated", value: "Date Created" }],
    sortProperties: ["dtCreated:desc", "numericId:desc"],

    actions: {
        resetSortProperties: function () {
            var archivedSortProperties = ["dtCreated:desc", "numericId:desc"];
            this.set("sortProperties", archivedSortProperties);
        },
        injectItem: function () {
            var self = this;
            var newItem = this.get("store").createRecord("logMessage", {
                strLogMessage: "This is a strLogMessage"
            });
            newItem.save().then(function (data) {
                if (data) {
                    Jt76EmberBase.Common.create().log("This item has been saved.", data, "info", true);
                    self.send("refresh", false, false);
                } else {
                    Jt76EmberBase.Common.create().log("There was an error processing this data.", data, "error", true);
                }
            });
        }
    }
});