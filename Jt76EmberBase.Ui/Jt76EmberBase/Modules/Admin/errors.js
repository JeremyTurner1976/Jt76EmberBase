Jt76EmberBase.IndexAdminErrorsView = Ember.View.extend({
    /*__Template Name__*/
    templateName: "Modules/Admin/errors",
    /*__End Template Name__*/

    className: ["jt76-loading-slide"],
    classNameBindings: ["bIsLoading"],
    bIsLoading: function () {
        return this.get("controller.bIsLoaded") ? "jt76-loaded-slide" : "jt76-loading-slide";
    }.property("controller.bIsLoaded")
});

Jt76EmberBase.IndexAdminErrorsRoute = Ember.Route.extend({
    model: function () {
        /*__Data Pull__*/;
        if (this.get("controller.bForceRefresh") === false) {
            Ember.Logger.info("Cached data pull");
            return this.store.all("error").toArray();
        } else {
            Ember.Logger.info("Network data pull");
            this.controllerFor("index").set("bIsLoaded", false);
            return this.store.find("error").then(function(response) {
                return response.toArray();
            });
        }
        /*__End Data Pull__*/
    },
    setupController: function (controller, model) {
        Ember.Logger.info(model);
        controller.set("model", model);
        this.controllerFor("index").set("bIsLoaded", true);
        setTimeout(function () { controller.set("bIsLoaded", true); }, 200); //give the dom time to set the jt76-loading class then switch it
    },
    deactivate: function() {
        this._super();
        this.set("controller.bIsLoaded", false);
    }
});

Jt76EmberBase.IndexAdminErrorsController = Ember.ArrayController.extend({
    /*__Config__*/
    strPageTitle: "Admin Errors",
    strSubHeader: "Handle your business.",
    nMaxPagesToDisplay: 5,
    nMaxPageItemsToDisplay: 10,
    sortProperties: ["dtCreated:desc", "numericId:desc"],
    searchProperties: ["strCreated", "strMessage", "strSource", "strErrorLevel", "strAdditionalInformation", "strStackTrace"],
    nSearchDelayInSeconds: 1,
    /*__End Config__*/

    bIsLoaded: false,
    bForceRefresh: false,
    strToSearchFor: "",
    debouncedStrToSearchFor: "",
    nTotalCount: Ember.computed.alias("mappedArray.length"),
    sortedModel: Ember.computed.sort("mappedArray", "sortProperties"),

    watchSearchString: function () {
        Em.run.debounce(this, this.setSearchString, this.get("nSearchDelayInSeconds") * 1000);
    }.observes("strToSearchFor"),
    setSearchString: function () {
        this.set("debouncedStrToSearchFor", this.get("strToSearchFor"));
    },
    bInSearchMode: function () {
        var bInSearchMode = this.get("debouncedStrToSearchFor").length !== 0;
        this.set("paginationData.bInSearchMode", bInSearchMode);
        return bInSearchMode;
    }.property("debouncedStrToSearchFor"),

    paginationData: function() {
        var nMaxPagesToDisplay = this.get("nMaxPagesToDisplay");
        var nMaxPageItemsToDisplay = this.get("nMaxPageItemsToDisplay");
        var nMaxPages = Math.ceil(this.get("nTotalCount") / nMaxPageItemsToDisplay);
        return {
            nMaxPagesToDisplay: nMaxPages >= nMaxPagesToDisplay ? nMaxPagesToDisplay : nMaxPages,
            nMaxPageItemsToDisplay: nMaxPageItemsToDisplay,
            bInSearchMode: false,
            nCurrentPage: nMaxPages >= 1 ? 1 : 0,
            nMaxPages: nMaxPages,
            nTotalCount: this.get("nTotalCount"),
            nFilteredCount: nMaxPageItemsToDisplay
        }
    }.property(),

    mappedArray: function() {
        var self = this;
        var mappedModel = self.get("model");
        var common = Jt76EmberBase.Common.create();

        mappedModel.forEach(function(item) {
            item.set("numericId", parseInt(item.id));
            item.set("strCreated", common.longDateTimeFormat(item.get("dtCreated")));
            var strToSearchAgainst = "";
            self.get("searchProperties").forEach(function(innerItem) {
                strToSearchAgainst += item.get(innerItem);
            });
            item.set("strToSearchAgainst", strToSearchAgainst.toUpperCase());
        });
        return mappedModel;
    }.property("model.@each"),

    displayModel: function() {
        return this.get("bInSearchMode") ? this.get("searchDisplay") : this.get("pagedDisplay");
    }.property("paginationData.nCurrentPage", "bInSearchMode"),

    searchDisplay: function() {
        var self = this;
        self.set("paginationData.nFilteredCount", 0);
        var debouncedStrToSearchFor = self.get("debouncedStrToSearchFor").toUpperCase();
        var nMatchCount = 0;
        return self.get("sortedModel").filter(function(item) {
            var bMatch = item.get("strToSearchAgainst").indexOf(debouncedStrToSearchFor) !== -1;
            if (bMatch) {
                self.set("paginationData.nFilteredCount", ++nMatchCount);
            }
            return bMatch;
        });
    }.property("bInSearchMode"),

    pagedDisplay: function() {
        var nCurrentPage = this.get("paginationData.nCurrentPage");
        var nMaxPageItemsToDisplay = this.get("paginationData.nMaxPageItemsToDisplay");
        var nStartItem = (nCurrentPage * nMaxPageItemsToDisplay) - nMaxPageItemsToDisplay;
        var pagedArray = this.get("sortedModel").toArray().splice(nStartItem, nMaxPageItemsToDisplay);
        this.set("paginationData.nFilteredCount", pagedArray.length);
        return pagedArray;
    }.property("paginationData.nCurrentPage"),

    actions: {
        refresh: function (bForceRefresh) {
            var self = this;
            var nMaxPagesToDisplay = this.get("nMaxPagesToDisplay");
            var nMaxPageItemsToDisplay = this.get("nMaxPageItemsToDisplay");
            var nPagePlaceHolder = self.get("paginationData.nCurrentPage");

            //reset defaults
            self.set("bForceRefresh", bForceRefresh);
            self.set("bIsLoaded", false);
            self.set("strToSearchFor", "");
            self.set("debouncedStrToSearchFor", "");
            self.set("paginationData.nCurrentPage", 0);
            self.set("paginationData.bInSearchMode", false);
            self.set("paginationData.nFilteredItems", nMaxPagesToDisplay);
            self.get("target.router").refresh().then(function () {
                //reset array count specific properties
                var nTotalCount = self.get("nTotalCount");
                var nMaxPages = Math.ceil(nTotalCount / nMaxPageItemsToDisplay);
                self.set("paginationData.nTotalCount", nTotalCount);
                self.set("paginationData.nMaxPages", nMaxPages);
                self.set("paginationData.nCurrentPage", nPagePlaceHolder > nMaxPages ? nMaxPages : nPagePlaceHolder);
                self.set("bForceRefresh", false);
            });
        },
        injectError: function () {
            var self = this;
            var newError = this.get("store").createRecord("error", {
                strMessage: "This is a strMessage",
                strSource: "This is a strSource",
                strErrorLevel: "This is a strErrorLevel",
                strAdditionalInformation: "This is a strAdditionalInformation",
                strStackTrace: "This is a strStackTrace"
            });
            newError.save().then(function (data) {
                Ember.Logger.info(data);
                self.send("refresh", false);
            });
        }
    }
});

//"@each.strMessage", "@each.strSource",
//"@each.strErrorLevel", "@each.strAdditionalInformation",
//"@each.strStackTrace"), //set this to watch model changes for properties that can change