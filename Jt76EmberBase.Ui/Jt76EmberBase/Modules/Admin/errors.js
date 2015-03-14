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
            return this.store.all("error");
        } else {
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
        setTimeout(function () { controller.set("bIsLoaded", true); }, 150); //give the dom time to set the jt76-loading class then switch it
    },
    deactivate: function() {
        //this._super();
        this.set("controller.bIsLoaded", false);
    }
});

Jt76EmberBase.IndexAdminErrorsController = Ember.ArrayController.extend({
    /*__Config__*/
    strPageTitle: "Admin Errors",
    strSubHeader: "Handle your business.",
    nMaxPagesToDisplay:5,
    nMaxPageItemsToDisplay: 10,
    sortProperties: ["dtCreated:asc", "numericId:desc"],
    searchProperties: ["strCreated", "strMessage", "strSource", "strErrorLevel", "strAdditionalInformation", "strStackTrace"],
    /*__End Config__*/

    bIsLoaded: false,
    bForceRefresh: false,
    strToSearchFor: "",
    nTotalCount: Ember.computed.alias("mappedArray.length"),
    sortedModel: Ember.computed.sort("mappedArray", "sortProperties"),

    bInSearchMode: function () {
        var bInSearchMode = this.get("strToSearchFor").length !== 0;
        this.set("paginationData.bInSearchMode", bInSearchMode);
        return bInSearchMode;
    }.property("strToSearchFor"),

    paginationData: function () {
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

    mappedArray: function () {
        var self = this;
        var strToSearchAgainst = "";
        var mappedModel = self.get("model");
        var common = Jt76EmberBase.Common.create();

        mappedModel.forEach(function (item) {
            item.set("numericId", parseInt(item.id));
            item.set("strCreated", common.longDateTimeFormat(item.get("dtCreated")));
            self.get("searchProperties").forEach(function (innerItem) {
                strToSearchAgainst += item.get(innerItem);
            });
            item.set("strToSearchAgainst", strToSearchAgainst.toUpperCase());
        });
        return mappedModel;
    }.property("model.@each"),

    displayModel: function () {
        return this.get("bInSearchMode") ? this.get("searchDisplay") : this.get("pagedDisplay"); 
    }.property("paginationData.nCurrentPage", "bInSearchMode"),

    searchDisplay: function() {
        var self = this;
        self.set("paginationData.nFilteredCount", 0);
        var strToSearchFor = self.get("strToSearchFor").toUpperCase();
        var nMatchCount = 0;
        return self.get("sortedModel").filter(function (item) {
            var bMatch = item.get("strToSearchAgainst").indexOf(strToSearchFor) !== -1;
            if (bMatch) { self.set("paginationData.nFilteredCount", ++nMatchCount); }
            return bMatch;
        });
    }.property("bInSearchMode"),

    pagedDisplay: function () {
        var nCurrentPage = this.get("paginationData.nCurrentPage");
        var nMaxPageItemsToDisplay = this.get("paginationData.nMaxPageItemsToDisplay");
        var nStartItem = (nCurrentPage * nMaxPageItemsToDisplay) - nMaxPageItemsToDisplay;
        var pagedArray = this.get("sortedModel").toArray().splice(nStartItem, nMaxPageItemsToDisplay);
        this.set("paginationData.nFilteredCount", pagedArray.length);
        return pagedArray;
    }.property("paginationData.nCurrentPage"),

    actions: {
        refresh: function () {
            this.set("bForceRefresh", true);
            this.get("target.router").refresh(); //get fresh data
            this.set("strToSearchFor", ""); //reset default values
            this.set("paginationData.nCurrentPage", 1);
            this.set("paginationData.bInSearchMode", false);
            this.set("paginationData.nTotalCount", this.get("nTotalCount"));
            this.set("paginationData.nFilteredItems", this.get("paginationData.nMaxPageItemsToDisplay"));
            this.set("bForceRefresh", false);
        },
        injectError: function () {
            var nTotalCount = this.get("nTotalCount");
            this.get("store").createRecord("error", {
                //temporary id and dtCreated until I get this posting to the server
                id: (nTotalCount + 1).toString(),
                dtCreated: moment(),

                strMessage: "This is a strMessage",
                strSource: "This is a strSource",
                strErrorLevel: "This is a strErrorLevel",
                strAdditionalInformation: "This is a strAdditionalInformation",
                strStackTrace: "This is a strStackTrace"
            });
            //this.send("refresh");
            this.set("model", this.get("store").all("error"));
            this.set("strToSearchFor", ""); //reset default values
            var nMaxPagesToDisplay = this.get("nMaxPagesToDisplay");
            var nMaxPageItemsToDisplay = this.get("nMaxPageItemsToDisplay");
            var nMaxPages = Math.ceil(this.get("nTotalCount") / nMaxPageItemsToDisplay);
            this.set("paginationData.bInSearchMode", false);
            this.set("paginationData.nTotalCount", this.get("nTotalCount"));
            this.set("paginationData.nFilteredItems", this.get("paginationData.nMaxPageItemsToDisplay"));
            this.set("paginationData.nMaxPages", nMaxPages);
            this.set("paginationData.nMaxPagesToDisplay", nMaxPages >= nMaxPagesToDisplay ? nMaxPagesToDisplay : nMaxPages);
            //this.set("paginationData.nCurrentPage", 1);
        }
    }
});

//"@each.strMessage", "@each.strSource",
//"@each.strErrorLevel", "@each.strAdditionalInformation",
//"@each.strStackTrace"), //set this to watch model changes for properties that can change