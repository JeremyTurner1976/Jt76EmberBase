Jt76EmberBase.IndexAdminErrorDetailsView = Jt76EmberBase.SlidingView.extend({
    templateName: "Modules/Admin/errorDetails"
});

Jt76EmberBase.IndexAdminErrorDetailsRoute = Jt76EmberBase.SingleItemRoute.extend({
    strModel: "error"
});

Jt76EmberBase.IndexAdminErrorDetailsController = Jt76EmberBase.SingleItemController.extend({
    strParentRoute: "index.admin.errors",
    strPageTitle: "Admin Error",
    strSubHeader: "Handle your business."
});