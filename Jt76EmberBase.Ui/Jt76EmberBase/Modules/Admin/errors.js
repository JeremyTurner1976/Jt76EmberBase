Jt76EmberBase.IndexAdminErrorsView = Ember.View.extend({
    templateName: "Modules/Admin/errors"
});

Jt76EmberBase.IndexAdminErrorsRoute = Ember.Route.extend({
    model: function () {
        //call with this.modelFor("indexAdminErrors");

        //var data = this.store.all("error");
        //return (data.get("content").length === 0) ? this.store.find("error") : data;

        return this.store.find("error").then(function (data) {
            var array = data.toArray();
            var common = Jt76EmberBase.Common.create();

            array.forEach(function (item) {
                //set properties that will not change
                item.set("numericId", parseInt(item.id));
                item.set("strCreated", common.longDateTimeFormat(item.get("dtCreated")));
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
    strPageTitle: "Admin Errors",
    strSubHeader: "Handle your business.",

    nTotalCount: Ember.computed.alias("length"), //this property observes changes in length
    nFilteredCount: Ember.computed.alias("filteredModel.length"),
    sortProperties: ["dtCreated:desc", "numericId:desc"],
    filterProperties: "",
    paginationData: function() {
        var nMaxPageItemsToDisplay = 5;
        var bInSearchMode = this.get("filterProperties").length === 0;
        return {
            nFilteredCount: bInSearchMode ? this.get("nFilteredCount") : nMaxPageItemsToDisplay,
            nTotalCount: this.get("nTotalCount"),
            nCurrentPage: 1,
            nMaxPages: Math.ceil(this.get("nTotalCount") / nMaxPageItemsToDisplay),
            nMaxPagesToDisplay: 5,
            nMaxPageItemsToDisplay: nMaxPageItemsToDisplay,
            bInSearchMode: bInSearchMode
        };
    }.property(),

    sortedModel: Ember.computed.sort("model", "sortProperties"),
    filteredModel: function () {
        var filterProperties = this.get("filterProperties").toUpperCase();
        var bFilterActive = (filterProperties.length !== 0);
        return this.get("sortedModel").filter(function(item) {
            if (bFilterActive) {
                var strConcat = (item.get("strMessage") +
                    item.get("strSource") +
                    item.get("strErrorLevel") +
                    item.get("strAdditionalInformation") +
                    item.get("strStackTrace") +
                    item.get("strCreated"));
                return strConcat.toUpperCase().indexOf(filterProperties) !== -1;
            } else {
                return true;
            }
        });
    }.property("filterProperties", "sortProperties"),//set this to watch ui changes
               //"@each.strMessage", "@each.strSource",
               //"@each.strErrorLevel", "@each.strAdditionalInformation",
               //"@each.strStackTrace"), //set this to watch model changes for properties that can change

    actions: {
        refresh: function () {
            this.loadAdminErrors();
        }
    }
});