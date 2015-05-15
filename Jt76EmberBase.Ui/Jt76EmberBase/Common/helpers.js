//OUTPUT HELPERS
Ember.Handlebars.registerBoundHelper("fromDate", function (strValue) {
    var today = moment();
    var target = moment(strValue);
    return target.from(today);
});



//VALIDATIONS
Ember.Handlebars.registerBoundHelper("Required", function (strValue) {
    if (strValue && strValue.length > 0)
        return "";
    else
        return "Required";
});

Ember.Handlebars.registerBoundHelper("RequiredLength", function (strValue, nMinLength, nMaxLength) {
    if (strValue) {
        if (strValue.length < nMinLength)
            return "Minimum " + nMinLength + " Characters";
        else if (strValue.length > nMaxLength)
            return "Maximum " + nMaxLength + " Characters";
        else
            return "";
    }
    else
        return "Required";
});
