Jt76EmberBase.IndexAdminCustomErrorView = Ember.View.extend({
    templateName: "Modules/Admin/customError"
});

Jt76EmberBase.IndexAdminCustomErrorRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find("error", params.id);
    },
    setupController: function (controller, model) {
        Ember.Logger.info(model);
        controller.set("model", model);
    }
});

Jt76EmberBase.IndexAdminCustomErrorController = Ember.ObjectController.extend({
    actions: {
    }
});