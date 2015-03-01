Jt76EmberBase.IndexAdminUserAdminView = Ember.View.extend({
    templateName: "Modules/Admin/userAdmin"
});

Jt76EmberBase.IndexAdminUserAdminRoute = Ember.Route.extend({
    model: function () {

    }
});

Jt76EmberBase.IndexAdminUserAdminController = Ember.ObjectController.extend({
    actions: {
        refresh: function () {
            this.loadAdminUserAdmin();
        }
    }
});