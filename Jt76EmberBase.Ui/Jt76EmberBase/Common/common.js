Jt76EmberBase.CommonFunctions = Ember.Object.extend({
    init: function () {
        //var common = Jt76EmberBase.Common;
    },

    //helper methods
    isNumber: function (value) {
        // negative or positive
        return /^[-]?\d+$/.test(value);
    },
    isValidLength: function (strValue, nMinLength, nMaxLength) {
        if (strValue)
            return (strValue.length < nMinLength || (nMaxLength && strValue.length > nMaxLength)) ? false : true;
        else
            return false;
    },

    //output helpers
    paddedStringFormat: function(strValue, nDesiredLength, character, bPadLeft) {
        var strPadding = Array(nDesiredLength).join(character || " ");
        if (typeof strValue === "undefined") 
            return strPadding;

        if (bPadLeft) {
            return (strPadding + strValue).slice(-strPadding.length);
        } else {
            return (strValue + strPadding).substring(0, strPadding.length);
        }

    },
    longDateTimeFormat: function (dtInput) {
        var localValue = moment.utc(dtInput).toDate();
        var formattedValue = moment(localValue).format("MMMM Do YYYY, h:mm:ss a");
        return formattedValue;
    },
    shortDateTimeFormat: function (dtInput) {
        var localValue = moment.utc(dtInput).toDate();
        var formattedValue = moment(localValue).format("MM/DD/YY h:mm a");
        return formattedValue;
    },
    longDateFormat: function (dtInput) {
        var localValue = moment.utc(dtInput).toDate();
        var formattedValue = moment(localValue).format("MMMM Do YYYY");
        return formattedValue;
    },
    shortDateFormat: function (dtInput) {
        var localValue = moment.utc(dtInput).toDate();
        var formattedValue = moment(localValue).format("MM/DD/YY");
        return formattedValue;
    },
    longTimeFormat: function (dtInput) {
        var localValue = moment.utc(dtInput).toDate();
        var formattedValue = moment(localValue).format("h:mm:ss a");
        return formattedValue;
    },
    shortTimeFormat: function (dtInput) {
        var localValue = moment.utc(dtInput).toDate();
        var formattedValue = moment(localValue).format("h:mm a");
        return formattedValue;
    },

    //Common API functions
    log: function (strMessage, data, strType, bForceToast) {
        strMessage = strMessage || "No Message";
        strType = strType || "info";

        if (bForceToast || Jt76EmberBase.CONFIG.bDebug === true) {
            var options = {
                "closeButton": false,
                "debug": false,
                "positionClass": "toast-bottom-left",
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "3500",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            if (strType === "error") {
                toastr.error(strMessage, data, options);
            } else if (strType === "warning") {
                toastr.warning(strMessage, data, options);
            } else if (strType === "success") {
                toastr.success(strMessage, data, options);
            } else {
                toastr.info(strMessage, data, options);
            }
        }

        if (strType === "error") {
            Ember.Logger.error(strMessage, data);
        } else if (strType === "warning") {
            Ember.Logger.warn(strMessage, data);
        } else if (strType === "success") {
            Ember.Logger.info(strMessage, data);
        } else {
            Ember.Logger.debug(strMessage, data);
        }
    },

    logToDatabase: function (strType, data) {
        if (strType === "error") {
            var appStore = Jt76EmberBase.__container__.lookup("controller:indexAdminErrors").get("store");
            var newItem = appStore.createRecord("error", {
                strMessage: data.message || "No Message Found",
                strSource: "Client Side",
                strErrorLevel: "Warning",
                strAdditionalInformation: "Not Applicable",
                strStackTrace: data.stack || "Not Applicable"
            });
            var self = this;
            newItem.save().then(function(dataResponse) {
                self.log("We apologize, An error has occurred and was saved to our Database. Please contact customer support.", dataResponse, "error", true);
            }, function(errorResponse) {
                self.log("An error ocurred saving this record.<br\>" + +(errorResponse.status || "") + ": " + (errorResponse.statusText || ""), errorResponse, "warning", false);
                self.log("We apologize, An error has occurred and were unable to record this error. Please contact customer support and give a description of this issue.", data, "error", true);
            });
        } else {
            this.log("No functionality built to log the " + strType + " item type in logToDatabase().", data, "warning", true);
        }
    },

    //common UI functions
    scrollbarWidth: function () {
        var $inner = jQuery("<div style=\"width: 100%; height:200px;\">test</div>"),
            $outer = jQuery("<div style=\"width:200px;height:150px; position: absolute; top: 0; left: 0; visibility: hidden; overflow:hidden;\"></div>").append($inner),
            inner = $inner[0],
            outer = $outer[0];

        jQuery("body").append(outer);
        var width1 = inner.offsetWidth;
        $outer.css("overflow", "scroll");
        var width2 = outer.clientWidth;
        $outer.remove();

        return (width1 - width2);
    }
});