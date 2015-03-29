Jt76EmberBase.Common = Ember.Object.extend({
    testFunction: function () {
        //var common = Jt76EmberBase.Common.create();
        //common.testFunction();

        var config = Jt76EmberBase.CONFIG.create();
        var strAppTitle = config.get("strAppTitle");
        alert(strAppTitle + ", reporting for duty!");
    },

    //helper methods
    isNumber: function (val) {
        // negative or positive
        return /^[-]?\d+$/.test(val);
    },

    //output helpers
    longDateTimeFormat: function(dtInput) {
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
    
    log: function (strMessage, data, strType, bForceToast) {
        var config = Jt76EmberBase.CONFIG.create();
        strType = strType || "info";

        if (bForceToast || config.get("bDebug") === true) {
            if (strType === "error") {
                toastr.error(strMessage);
            } else if (strType === "warning") {
                toastr.warning(strMessage);
            } else if (strType === "success") {
                toastr.success(strMessage);
            } else {
                toastr.info(strMessage);
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

    scrollbarWidth: function() {
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