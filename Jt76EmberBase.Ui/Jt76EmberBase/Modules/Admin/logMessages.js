Jt76EmberBase.IndexAdminLogMessagesView = Ember.View.extend({
    templateName: "Modules/Admin/logMessages"
});

Jt76EmberBase.IndexAdminLogMessagesRoute = Ember.Route.extend({
    model: function () {
        //var data = this.store.all("logMessage");
        //return (data.get("content").length === 0) ? this.store.find("logMessage") : data;
        return this.store.find("logMessage");
    },
    setupController: function (controller, model) {
        //model.get("content").forEach(function(item) {
        //    Ember.Logger.info(item.get("data"));
        //});
        Ember.Logger.info(model.get("content").length + " items gathered.");
        controller.set("model", model);
    }
});

Jt76EmberBase.IndexAdminLogMessagesController = Ember.ObjectController.extend({
    actions: {
        refresh: function () {
            this.loadAdminLogMessages();
        }
    }
});