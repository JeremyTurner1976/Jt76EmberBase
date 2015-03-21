Jt76EmberBase.IndexAdminLogMessagesView = Jt76EmberBase.SlidingView.extend({
    templateName: "Modules/Admin/logMessages"
});

Jt76EmberBase.IndexAdminLogMessagesRoute = Jt76EmberBase.ArrayRoute.extend({
    strModel: "logMessage"
});

Jt76EmberBase.IndexAdminLogMessagesController = Jt76EmberBase.ArrayController.extend({
    strPageTitle: "Admin Log Messages",
    strSubHeader: "Handle your business.",
    nMaxPagesToDisplay: 5,
    nMaxPageItemsToDisplay: 10,
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
                Ember.Logger.info(data);
                self.send("refresh", false, false);
            });
        }
    }
});