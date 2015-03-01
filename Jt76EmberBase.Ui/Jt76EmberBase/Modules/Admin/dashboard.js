Jt76EmberBase.IndexAdminDashboardView = Ember.View.extend({
    templateName: "Modules/Admin/dashboard"
});

Jt76EmberBase.IndexAdminDashboardRoute = Ember.Route.extend({
    model: function () {

    }
});

Jt76EmberBase.IndexAdminDashboardController = Ember.ObjectController.extend({
    actions: {
        refresh: function () {
            this.loadAdminDashboard();
        }
    }
});