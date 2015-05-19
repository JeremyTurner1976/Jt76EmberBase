/*_____________ARRAY ROUTE_____________*/
Jt76EmberBase.ArrayRoute = Ember.Route.extend({
    model: function () {
        if (this.get("controller.bForceRefresh") === false) {
            return this.store.all(this.get("strModel")).toArray();
        } else {
            this.controllerFor("index").set("bIsLoaded", false);
            this.store.unloadAll(this.get("strModel"));
            return this.store.find(this.get("strModel")).then(function (response) {
                Jt76EmberBase.Common.log("Data pull.", response, "info", false);
                return response.toArray();
            },
            function(errorResponse) {
                Jt76EmberBase.Common.log("Unable to load item " + (params.id || params) + ".", errorResponse, "error", true);
            });
        }
    },
    setupController: function (controller, model) {
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
            return this.store.find(this.get("strModel"), params.id || params).then(function(response) {
                if (params.id && params)
                    Jt76EmberBase.Common.log("Data pull.", response, "info", false);

                return response;
            },
            function(errorResponse) {
                Jt76EmberBase.Common.log("Unable to load item " + (params.id || params) + ".", errorResponse, "error", true);
            });
    },
    setupController: function (controller, model) {
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

/*_____________BASE ROUTE_____________*/
Jt76EmberBase.BaseRoute = Ember.Route.extend({
    setupController: function (controller, model) {
        this.controllerFor("index").set("bIsLoaded", true);
    }
});