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
            return this.store.find("error").then(function (response) {
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
    deactivate: function () {
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
    displayProperties: [{ key: "strMessage", value: "Message" },
                        { key: "dtCreated", value: "Date Created" },
                        { key: "strSource", value: "Source" },
                        { key: "strErrorLevel", value: "Error Level" },
                        { key: "strAdditionalInformation", value: "Additional Information" }],
    nSearchDelayInSeconds: .6,
    sortProperties: ["dtCreated:desc", "numericId:desc"],
    resetSortProperties: function () {
        this.sortProperties = ["dtCreated:desc", "numericId:desc"];
    },
    /*__End Config__*/

    bIsLoaded: false,
    bForceRefresh: false,
    strToSearchFor: "",
    debouncedStrToSearchFor: "",
    nTotalCount: Ember.computed.alias("mappedModel.length"),
    sortedModel: Ember.computed.sort("mappedModel","sortProperties"),

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

    mappedModel: function () {
        var self = this;
        var mappedModel = self.get("model");
        var common = Jt76EmberBase.Common.create();

        mappedModel.forEach(function (item) {
            item.set("numericId", parseInt(item.id));
            item.set("strCreated", common.longDateTimeFormat(item.get("dtCreated")));
            var strToSearchAgainst = "";
            self.get("displayProperties").forEach(function (innerItem) {
                strToSearchAgainst += item.get(innerItem.key);
            });
            item.set("strToSearchAgainst", strToSearchAgainst.toUpperCase());
        });
        return mappedModel;
    }.property("model.@each"),

    displayModel: function () {
        return this.get("bInSearchMode") ? this.get("searchDisplayModel") : this.get("pagedDisplayModel");
    }.property("paginationData.nCurrentPage", "bInSearchMode"),

    searchDisplayModel: function () {
        var self = this;
        self.set("paginationData.nFilteredCount", 0);
        var debouncedStrToSearchFor = self.get("debouncedStrToSearchFor").toUpperCase();
        var nMatchCount = 0;
        return self.get("sortedModel").filter(function (item) {
            var bMatch = item.get("strToSearchAgainst").indexOf(debouncedStrToSearchFor) !== -1;
            if (bMatch) {
                self.set("paginationData.nFilteredCount", ++nMatchCount);
            }
            return bMatch;
        });
    }.property("bInSearchMode"),

    pagedDisplayModel: function () {
        var nCurrentPage = this.get("paginationData.nCurrentPage");
        var nMaxPageItemsToDisplay = this.get("paginationData.nMaxPageItemsToDisplay");
        var nStartItem = (nCurrentPage * nMaxPageItemsToDisplay) - nMaxPageItemsToDisplay;
        var pagedArray = this.get("sortedModel").toArray().splice(nStartItem, nMaxPageItemsToDisplay);
        this.set("paginationData.nFilteredCount", pagedArray.length);
        return pagedArray;
    }.property("paginationData.nCurrentPage"),

    actions: {
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
                self.send("refresh", false, false);
            });
        },
        toggleSort: function (item) {
            var bResetSort = (item === "Reset");
            var newSortProperties = [];

            //set the sort
            if (!bResetSort) {
                var oldToggleSortProperty = this.get("sortProperties").toArray().splice(0, 1)[0];
                Ember.run.once(this.resetSortProperties);

                var strNewSortProperty = (item.key + ":asc" !== oldToggleSortProperty) ? item.key + ":asc" : item.key + ":desc";
                newSortProperties.pushObject(strNewSortProperty);

                this.get("sortProperties").forEach(function(innerItem) {
                    if (innerItem.indexOf(item.key) !== 0)
                        newSortProperties.pushObject(innerItem);
                });
                this.set("sortProperties", newSortProperties);
            }

            //update the ui
            var elements = $(".dropdown-menu-sort > li");
            elements.toArray().splice(0, elements.length - 2).forEach(function (element) {
                var strArrowUp = "<span><i class=\"fa fa-arrow-circle-up\"></i><span>&nbsp;";
                var strArrowDown = "<span><i class=\"fa fa-arrow-circle-down\"></i><span>&nbsp;";
                var bActive = element.children[0].innerHTML.indexOf(item.value) !== -1;
                var bDecorated = element.children[0].innerHTML.indexOf(strArrowDown) !== -1;
                element.children[0].innerHTML = element.children[0].innerHTML.replace(strArrowUp, "");
                element.children[0].innerHTML = element.children[0].innerHTML.replace(strArrowDown, "");

                if (!bResetSort && bActive) {
                    element.className = "active";
                    element.children[0].innerHTML = ((bDecorated) ? strArrowUp : strArrowDown) + element.children[0].innerHTML;
                } else {
                    element.className = "";
                }
            });

            //refresh the view
            this.send("refresh", false, bResetSort);
        },
        refresh: function (bForceRefresh, bResetSort) {
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

            if(bResetSort)
                Ember.run.once(this.resetSortProperties);

            //refresh then reset array count specific properties
            self.get("target.router").refresh().then(function () {
                var nTotalCount = self.get("nTotalCount");
                var nMaxPages = Math.ceil(nTotalCount / nMaxPageItemsToDisplay);
                self.set("paginationData.nTotalCount", nTotalCount);
                self.set("paginationData.nMaxPages", nMaxPages);
                self.set("paginationData.nCurrentPage", nPagePlaceHolder > nMaxPages ? nMaxPages : nPagePlaceHolder);
                self.set("bForceRefresh", false);
            });
        }
    }
});

//"@each.strMessage", "@each.strSource",
//"@each.strErrorLevel", "@each.strAdditionalInformation",
//"@each.strStackTrace"), //set this to watch model changes for properties that can change