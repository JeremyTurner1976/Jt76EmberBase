﻿Jt76EmberBase.PaginationDisplayComponent = Ember.Component.extend({
    visiblePages: function() {
        var pages = [];
        var nCurrentPage = this.get("pagination.nCurrentPage");
        var nMaxPagesToDisplay = this.get("pagination.nMaxPagesToDisplay");
        var nMaxPages = this.get("pagination.nMaxPages");

        var nListCap = nCurrentPage + nMaxPagesToDisplay - 1;
        var nStartDisplayPage = nCurrentPage;
        if (nCurrentPage + nMaxPagesToDisplay > nMaxPages) {
            nListCap = nMaxPages;
            nStartDisplayPage = nMaxPages - nMaxPagesToDisplay + 1;
        }
        if (nStartDisplayPage < 1) {
            nListCap = nListCap + (1 - (nStartDisplayPage));
            nStartDisplayPage = 1;
        }

        for (var i = nStartDisplayPage; i <= nListCap; i++) {
            var pageInfo = {
                nPageNumber: i,
                className: (i === nCurrentPage) ? "active" : ""
            };
            pages.push(pageInfo);
        }
        return pages;
    }.property("pagination.nCurrentPage", "pagination.nMaxPages"),

    prevClassName: function () {
        return this.get("pagination.nCurrentPage") === 1 ? "disabled" : "";
    }.property("pagination.nCurrentPage", "pagination.nMaxPages"),

    nextClassName: function () {
        return this.get("pagination.nCurrentPage") === this.get("pagination.nMaxPages") ? "disabled" : "";
    }.property("pagination.nCurrentPage","pagination.nMaxPages"),

    paginationListStyle: function () {
        var nButtonWidth = 28;
        var nDefaultButtonsWidth = 182;
        var nMinWidth = nDefaultButtonsWidth + (nButtonWidth * this.get("pagination.nMaxPagesToDisplay"));
        return "min-width:" + nMinWidth + "px;";
    }.property("pagination.nMaxPagesToDisplay"),

    actions: {
        gotoPage: function (item) {
            if (item.nPageNumber)
                this.set("pagination.nCurrentPage", item.nPageNumber);
            else {
                switch(item) {
                    case "First":
                        this.set("pagination.nCurrentPage", 1);
                        break;
                    case "Prev":
                        if (this.get("pagination.nCurrentPage") - 1 >= 1)
                            this.set("pagination.nCurrentPage", this.get("pagination.nCurrentPage") - 1);
                        break;
                    case "Next":
                        if (this.get("pagination.nCurrentPage") + 1 <= this.get("pagination.nMaxPages"))
                            this.set("pagination.nCurrentPage", this.get("pagination.nCurrentPage") + 1);
                        break;
                    case "Last":
                        this.set("pagination.nCurrentPage", this.get("pagination.nMaxPages"));
                        break;
                    default:
                        throw new Error("Not all cases caught in components/pagination-display.js.");
                }
            }

            //controller will watch for changes in the current page in the object it passes and set the pagedDisplayModel
            this.set("parentView.controller.paginationData.nCurrentPage", this.get("pagination.nCurrentPage"));
        }
    }
});

//pagination object - sample in Ember Extensions Jt76EmberBase.ArrayController
//paginationData: function () {
//    var nMaxPagesToDisplay = this.get("nMaxPagesToDisplay");
//    var nMaxPageItemsToDisplay = this.get("nMaxPageItemsToDisplay");
//    var nMaxPages = Math.ceil(this.get("nTotalCount") / nMaxPageItemsToDisplay);
//    return {
//        nMaxPagesToDisplay: nMaxPages >= nMaxPagesToDisplay ? nMaxPagesToDisplay : nMaxPages,
//        nMaxPageItemsToDisplay: nMaxPageItemsToDisplay,
//        bInSearchMode: false,
//        nCurrentPage: nMaxPages >= 1 ? 1 : 0,
//        nMaxPages: nMaxPages,
//        nTotalCount: this.get("nTotalCount"),
//        nFilteredCount: nMaxPageItemsToDisplay
//    }
//}.property(),