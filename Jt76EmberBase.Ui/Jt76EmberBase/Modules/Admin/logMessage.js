Jt76EmberBase.IndexAdminLogMessagesLogMessageView = Ember.View.extend({
    templateName: "Modules/Admin/logMessage"
});

Jt76EmberBase.IndexAdminLogMessagesLogMessageRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find("logMessage", params.id);
    },
    setupController: function (controller, model) {
        Ember.Logger.info(model);
        controller.set("model", model);
    }
});

Jt76EmberBase.IndexAdminLogMessagesLogMessageController = Ember.ObjectController.extend({
    actions: {
        refresh: function () {
            this.loadAdminLogMessage();
        }
    }
});