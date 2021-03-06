﻿/*_____________ARRAY CONTROLLER_____________*/
Jt76EmberBase.ArrayController = Ember.ArrayController.extend({
    nSearchDelayInSeconds: .45,
    bForceRefresh: false,
    strToSearchFor: "",
    debouncedStrToSearchFor: "",
    nTotalCount: Ember.computed.alias("mappedModel.length"),
    sortedModel: Ember.computed.sort("mappedModel", "sortProperties"),


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
    }.property("bForceRefresh"),


    mappedModel: function () {
        var self = this;
        var mappedModel = self.get("model");

        mappedModel.forEach(function (item) {
            item.set("numericId", parseInt(item.id));
            item.set("strCreated", Jt76EmberBase.Common.shortDateTimeFormat(item.get("dtCreated")));
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
    }.property("paginationData.nCurrentPage", "debouncedStrToSearchFor"),

    searchDisplayModel: function () {
        var self = this;
        self.set("paginationData.nFilteredCount", 0);
        var debouncedStrToSearchFor = self.get("debouncedStrToSearchFor").toUpperCase();
        var nMatchCount = 0;
        return self.get("sortedModel").filter(function (item) {
            var bMatch = item.get("strToSearchAgainst").indexOf(debouncedStrToSearchFor) !== -1;
            if (bMatch)
                self.set("paginationData.nFilteredCount", ++nMatchCount);

            return bMatch;
        });
    }.property("debouncedStrToSearchFor", "sortedModel"),

    pagedDisplayModel: function () {
        var nCurrentPage = this.get("paginationData.nCurrentPage");
        var nMaxPageItemsToDisplay = this.get("paginationData.nMaxPageItemsToDisplay");
        var nStartItem = (nCurrentPage * nMaxPageItemsToDisplay) - nMaxPageItemsToDisplay;
        var pagedArray = this.get("sortedModel").toArray().splice(nStartItem, nMaxPageItemsToDisplay);
        this.set("paginationData.nFilteredCount", pagedArray.length);
        return pagedArray;
    }.property("paginationData.nCurrentPage", "bInSearchMode"),


    actions: {
        resetSortProperties: function () {
            this.set("sortProperties", this.get("archivedSortProperties"));
        },

        toggleSort: function (item) {
            var bResetSort = (item === "reset");
            var newSortProperties = [];
            var oldToggleSortProperty = this.get("sortProperties").toArray().splice(0, 1)[0];
            this.send("resetSortProperties");

            if (!bResetSort) {
                var strNewSortProperty = (item.key + ":asc" !== oldToggleSortProperty) ? item.key + ":asc" : item.key + ":desc";
                newSortProperties.pushObject(strNewSortProperty);

                this.get("sortProperties").forEach(function (innerItem) {
                    if (innerItem.indexOf(item.key) !== 0)
                        newSortProperties.pushObject(innerItem);
                });

                this.set("sortProperties", newSortProperties);
                this.send("decorateSortSelect", item.value, false);
            }
            else {
                this.send("decorateSortSelect", null, false);
            }

            this.send("refresh", false);
        },

        refresh: function (bForceRefresh) {
            var self = this;
            var nSavedPage = this.get("paginationData.nCurrentPage");
            this.set("paginationData.nCurrentPage", 0);
            self.set("bForceRefresh", bForceRefresh);

            self.get("target.router").refresh().then(function () {
                //update the pagination display in case no refresh is wanted
                self.set("paginationData.nTotalCount", self.get("nTotalCount"));
                self.set("paginationData.nCurrentPage", nSavedPage);
            });
        },

        decorateSortSelect: function (strItemValue, bResetSort) {
            //update the ui
            var elements = $(".dropdown-menu-sort > li");
            elements.toArray().splice(0, elements.length - 2).forEach(function (element) {
                var strArrowUp = "<span><i class=\"fa fa-arrow-circle-up\"></i><span>&nbsp;";
                var strArrowDown = "<span><i class=\"fa fa-arrow-circle-down\"></i><span>&nbsp;";
                var bActive = element.children[0].innerHTML.indexOf(strItemValue) !== -1;
                var bDecorated = element.children[0].innerHTML.indexOf(strArrowDown) !== -1;
                element.children[0].innerHTML = element.children[0].innerHTML.replace(strArrowUp, "");
                element.children[0].innerHTML = element.children[0].innerHTML.replace(strArrowDown, "");

                if (!bResetSort && bActive) {
                    element.className = "active";
                    element.children[0].innerHTML = ((bDecorated) ? strArrowUp : strArrowDown) + element.children[0].innerHTML;
                } else
                    element.className = "";
            });
        },

        newItem: function () {
            this.transitionToRoute(this.get("strNewLink"), "new");
        }
    }
});

/*_____________SINGLE ITEM CONTROLLER_____________*/
Jt76EmberBase.SingleItemController = Ember.ObjectController.extend({
    bNew: Ember.computed.alias("model.isNew"),
    bChanged: Ember.computed.alias("model.isDirty"),
    bInValid: false,

    gotoParentRoute: function () {
        var parentController = this.get("controllers." + this.get("strParentController"));
        parentController.set("bForceRefresh", true);
        this.transitionToRoute(this.get("strParentRoute"));
    },

    actions: {
        goBack: function () {
            this.transitionToRoute(this.get("strParentRoute"));
        },
        cancel: function () {
            var model = this.get("model");
            model.rollback();
        },
        save: function () {
            var self = this;
            var model = this.get("model");
            model.save().then(function (response) {
                Jt76EmberBase.Common.log("This item has been saved.", model, "info", true);
                self.gotoParentRoute();
            }, function(errorResponse) {
                Jt76EmberBase.Common.log("Unable to save record: ", errorResponse, "error", true);
            });
        },
        deleteItem: function () {
            var self = this;
            var model = this.get("model");
            model.destroyRecord().then(function (response) {
                if (response) {
                    Jt76EmberBase.Common.log("This item has been deleted.", model, "info", true);
                    self.gotoParentRoute();
                }
                else {
                    Jt76EmberBase.Common.log("Unable to delete record.", model, "error", true);
                }
            });
        }
    }
});