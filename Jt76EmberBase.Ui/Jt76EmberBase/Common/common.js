Jt76EmberBase.Common = Ember.Object.extend({
    testFunction: function () {
        //var common = Jt76EmberBase.Common.create();
        //common.testFunction();

        var config = Jt76EmberBase.CONFIG.create();
        var title = config.get('title');
        alert(title + ", reporting for duty!");
    }
});