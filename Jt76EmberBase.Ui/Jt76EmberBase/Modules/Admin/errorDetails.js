Jt76EmberBase.IndexAdminErrorDetailsView = Ember.View.extend({
    /*__Template Name__*/
    templateName: "Modules/Admin/errorDetails",
    /*__End Template Name__*/

    willInsertElement: function () {
        var self = this.$();
        self.addClass("jt76-slow-slide-out");
    },
    didInsertElement: function () {
        var self = this.$();
        setTimeout(function () {
            self.removeClass("jt76-slow-slide-out");
            self.addClass("jt76-slow-slide-in");
        }, 50); //give the dom time to set the jt76-loading class then switch it
    }
});

Jt76EmberBase.IndexAdminErrorDetailsRoute = Ember.Route.extend({
    model: function (params) {
        if (params.id === "new")
            return this.store.createRecord("error");
        else
            return this.store.find("error", params.id);
    },
    setupController: function (controller, model) {
        Ember.Logger.info(model);
        controller.set("model", model);
    },
    deactivate: function () {
        var model = this.get("controller.model");
        //model.get("isSaving");
        //model.get("isDirty"); //true when new, and when altered as old item
        if (model.get("isNew")) {
            model.deleteRecord();
        }
    }
});

Jt76EmberBase.IndexAdminErrorDetailsController = Ember.ObjectController.extend({
    bNew: Ember.computed.alias("model.isNew"),
    bChanged: Ember.computed.alias("model.isDirty"),
    actions: {
        goBack: function() {
            this.transitionTo("index.admin.errors");
        },
        cancel: function() {
            var model = this.get("model");
            model.rollback();
        },
        save: function() {
            var self = this;
            var model = this.get("model");
            model.save().then(function (response) {
                if (response) {
                    var controller = self.controllerFor("index.admin.errors");
                    console.log(controller);
                    controller.set("bForceRefresh", true);
                    self.transitionToRoute("index.admin.errors");
                }
                else {
                    Ember.Logger.error("Unable to save record. " + model);
                    alert("Unable to save this error.");
                }
            });
        },
        deleteItem: function() {
            var self = this;
            var model = this.get("model");
            model.destroyRecord().then(function (response) {
                if (response) {
                    var controller = self.controllerFor("index.admin.errors");
                    console.log(controller);
                    controller.set("bForceRefresh", true);
                    self.transitionToRoute("index.admin.errors");
                }
                else {
                    Ember.Logger.error("Unable to delete record. " + model);
                    alert("Unable to save this error.");
                } 
            });
        }
    }
});