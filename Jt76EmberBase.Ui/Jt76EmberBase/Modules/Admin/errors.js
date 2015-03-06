Jt76EmberBase.IndexAdminErrorsView = Ember.View.extend({
    templateName: "Modules/Admin/errors"
});

Jt76EmberBase.IndexAdminErrorsRoute = Ember.Route.extend({
    model: function () {
        //var data = this.store.all("error");
        //return (data.get("content").length === 0) ? this.store.find("error") : data;
        return this.store.find("error");
    },
    setupController: function (controller, model) {
        //model.get("content").forEach(function(item) {
        //    Ember.Logger.info(item.get("data"));
        //});
        Ember.Logger.info(model.get("content").length + " items gathered.");
        controller.set("model", model);
    }
});

Jt76EmberBase.IndexAdminErrorsController = Ember.ObjectController.extend({
    actions: {
        refresh: function () {
            this.loadAdminErrors();
        }
    }
});