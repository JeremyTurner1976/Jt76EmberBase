Jt76EmberBase.IndexAdminErrorDetailsView = Ember.View.extend({
    templateName: "Modules/Admin/errorDetails"
});

Jt76EmberBase.IndexAdminErrorDetailsRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find("error", params.id);
    },
    setupController: function (controller, model) {
        Ember.Logger.info(model);
        controller.set("model", model);
    }
});

Jt76EmberBase.IndexAdminErrorDetailsController = Ember.ObjectController.extend({
    actions: {
    }
});