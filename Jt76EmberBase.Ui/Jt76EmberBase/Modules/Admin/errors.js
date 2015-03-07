Jt76EmberBase.IndexAdminErrorsView = Ember.View.extend({
    templateName: "Modules/Admin/errors"
});

Jt76EmberBase.IndexAdminErrorsRoute = Ember.Route.extend({
    model: function () {
        //var data = this.store.all("error");
        //return (data.get("content").length === 0) ? this.store.find("error") : data;

        return this.store.find("error").then(function (data) {
            var array = data.toArray();
            array.forEach(function (item) {
                item.set("numericId", parseInt(item.id));
            });
            return array;
        });
    },
    setupController: function (controller, model) {
        Ember.Logger.info(model);
        controller.set("model", model);
    }
});

Jt76EmberBase.IndexAdminErrorsController = Ember.ArrayController.extend({
    sortProperties: ["dtCreated:desc", "numericId:desc"],
    sortedModel: Ember.computed.sort("model", "sortProperties"),
    actions: {
        refresh: function () {
            this.loadAdminErrors();
        }
    }
});