//{{fromDate theDate}}
Ember.Handlebars.registerBoundHelper("fromDate", function (theDate) {
    var today = moment();
    var target = moment(theDate);
    return target.from(today);
});

//{{markdown text}}
Ember.Handlebars.registerBoundHelper("markdown", function (text) {
    return new Handlebars.SafeString(markdown.toHTML(text));
});

//{{money amount}}
//Ember.Handlebars.registerBoundHelper("money", function (amount) {
//    return accounting.formatMoney(amount / 100);
//});