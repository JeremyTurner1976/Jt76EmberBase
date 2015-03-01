﻿Jt76EmberBase.IndexAdminCustomErrorView = Ember.View.extend({
    templateName: "Modules/Admin/customError"
});

Jt76EmberBase.IndexAdminCustomErrorRoute = Ember.Route.extend({
    model: function (params) {
        return params.data;

        //return Ember.$.getJSON('/api/v1/errors/' + params.id).then(function (data) {
        //    Ember.Logger.log(data);
        //    return data;
        //});
        //console.log("AT ERROR");
        //return this.store.findBy("id", params.id);
        //works great using the fixture adapter
        //gets errors from the api properly using RESTAdapter, but not mapped
    }
});

Jt76EmberBase.IndexAdminCustomErrorController = Ember.ObjectController.extend({
    actions: {
        refresh: function () {
            this.loadAdminError();
        }
    }
});