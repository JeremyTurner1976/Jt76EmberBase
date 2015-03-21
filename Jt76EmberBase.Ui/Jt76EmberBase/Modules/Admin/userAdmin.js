Jt76EmberBase.IndexAdminUserAdminView = Jt76EmberBase.SlidingView.extend({
    templateName: "Modules/Admin/userAdmin"
});

Jt76EmberBase.IndexAdminUserAdminRoute = Ember.Route.extend({
    setupController: function (controller, model) {
        this.controllerFor("index").set("bIsLoaded", true);
    }
});

Jt76EmberBase.IndexAdminUserAdminController = Ember.ObjectController.extend({
    strPageTitle: "Admin User Admin",
    strSubHeader: "Placeholder for future content."
});