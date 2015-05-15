Jt76EmberBase.IndexAdminLogMessageView = Jt76EmberBase.SlidingView.extend({
    templateName: "Modules/Admin/logMessage"
});

Jt76EmberBase.IndexAdminLogMessageRoute = Jt76EmberBase.SingleItemRoute.extend({
    strModel: "logMessage"
});

Jt76EmberBase.IndexAdminLogMessageController = Jt76EmberBase.SingleItemController.extend({
    strParentRoute: "index.admin.logMessages",
    strPageTitle: "Admin Log Message",
    strSubHeader: "Handle your business.",
    bInValid: function () {
        return !Jt76EmberBase.LogMessageValidation.create().isValid(this.get("model"));
    }.property("model.strLogMessage")
});