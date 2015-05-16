Jt76EmberBase.IndexAdminLogMessageView = Jt76EmberBase.SlidingView.extend({
    templateName: "Modules/Admin/logMessage"
});

Jt76EmberBase.IndexAdminLogMessageRoute = Jt76EmberBase.SingleItemRoute.extend({
    strModel: "logMessage"
});

Jt76EmberBase.IndexAdminLogMessageController = Jt76EmberBase.SingleItemController.extend({
    strPageTitle: "Admin Log Message",
    strSubHeader: "Handle your business.",

    needs: ["indexAdminLogMessages"],
    strParentController: "indexAdminLogMessages",
    strParentRoute: "index.admin.logMessages",

    bInValid: function () {
        return !Jt76EmberBase.LogMessageValidation.create().isValid(this.get("model"));
    }.property("model.strLogMessage")
});