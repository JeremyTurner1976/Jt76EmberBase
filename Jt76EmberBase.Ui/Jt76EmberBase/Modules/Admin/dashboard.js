Jt76EmberBase.IndexAdminDashboardView = Jt76EmberBase.SlidingView.extend({
    templateName: "Modules/Admin/dashboard"
});

Jt76EmberBase.IndexAdminDashboardRoute = Ember.Route.extend({
    setupController: function (controller, model) {
        this.controllerFor("index").set("bIsLoaded", true);
    }
});

Jt76EmberBase.IndexAdminDashboardController = Ember.ObjectController.extend({
    strPageTitle: "Admin Dashboard",
    strSubHeader: "Placeholder for future content."
});