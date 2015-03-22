/*_____________ARRAY ROUTE_____________*/
Jt76EmberBase.ArrayRoute = Ember.Route.extend({
    model: function () {
        if (this.get("controller.bForceRefresh") === false) {
            return this.store.all(this.get("strModel")).toArray();
        } else {
            this.controllerFor("index").set("bIsLoaded", false);
            this.store.unloadAll(this.get("strModel"));
            return this.store.find(this.get("strModel")).then(function (response) {
                return response.toArray();
            });
        }
    },
    setupController: function (controller, model) {
        Jt76EmberBase.Common.create().log("Data pull.", model, "info");

        controller.set("model", model);
        this.controllerFor("index").set("bIsLoaded", true);
        controller.set("bForceRefresh", false);
    }
});

/*_____________SINGLE ITEM ROUTE_____________*/
Jt76EmberBase.SingleItemRoute = Ember.Route.extend({
    model: function (params) {
        if (params.id === "new")
            return this.store.createRecord(this.get("strModel"));
        else
            return this.store.find(this.get("strModel"), params.id);
    },
    setupController: function (controller, model) {
        Jt76EmberBase.Common.create().log("Data pull.", model, "info");

        controller.set("model", model);
    },
    deactivate: function () {
        var model = this.get("controller.model");
        //model.get("isSaving");
        //model.get("isDirty"); //true when new, and when altered as old item
        if (model && model.get("isNew")) {
            model.deleteRecord();
        }
    }
});