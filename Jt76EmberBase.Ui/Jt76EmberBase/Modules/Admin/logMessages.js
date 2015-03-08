Jt76EmberBase.IndexAdminLogMessagesView = Ember.View.extend({
    templateName: "Modules/Admin/logMessages"
});

Jt76EmberBase.IndexAdminLogMessagesRoute = Ember.Route.extend({
    model: function () {
        //var data = this.store.all("logMessage");
        //return (data.get("content").length === 0) ? this.store.find("logMessage") : data;

        return this.store.find("logMessage").then(function (data) {
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

Jt76EmberBase.IndexAdminLogMessagesController = Ember.ArrayController.extend({
    nTotalCount: Ember.computed.alias("length"),
    sortProperties: ["dtCreated:desc", "numericId:desc"],
    sortedModel: Ember.computed.sort("model", "sortProperties"),
    actions: {
        refresh: function () { 
            this.loadAdminLogMessages();
        }
    }
});